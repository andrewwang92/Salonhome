import { Component, OnInit, HostListener } from '@angular/core';
import { HelpService } from './../../../services/help.services';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { SlideInOutAnimation } from './../../../shared/animations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers: [HelpService],
  animations: [SlideInOutAnimation]
})
export class HelpComponent implements OnInit {
	animationState = false;
	currentIndex = 0;
	public help_posts;
	public titlePage = 'Help | Salon Home';
	
	constructor(private _HelpService: HelpService, private meta: Meta, private title: Title, private router: Router) { }

	ngOnInit() {
		this.initTop();
		this.setMeta();
		this.getAllPost();
		this.currentIndex = -1;
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	getAllPost() {
		
		this._HelpService.getHelp().subscribe(
			response => {
				this.help_posts = response;
				if( !this.help_posts ){
					console.log('Data source not found.');
				} 
			}, 
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
	}

	initTop(){
		this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
	}

	toggleShowDiv(index: number): void {
		this.currentIndex = index;
	}
}
