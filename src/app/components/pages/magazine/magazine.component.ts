import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../../services/magazine.services';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css'],
  providers: [MagazineService]
})
export class MagazineComponent implements OnInit {

	public magazine_posts;
	public titlePage = 'Magazine | Salon Home';

	constructor(
		private _MagazineService: MagazineService,
		private meta: Meta, 
		private title: Title,
		private router: Router
	) { 
	}

	ngOnInit() {
		this.initTop();
		this.setMeta();
		this.getAllPost();
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	getAllPost() {
		
		this._MagazineService.getMagazine().subscribe(
			response => {
				this.magazine_posts = response;
				if( !this.magazine_posts ){
					console.log('Not found data source.');
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

}

