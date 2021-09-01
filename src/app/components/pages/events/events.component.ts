import { Component, OnInit } from '@angular/core';
import { EventService } from './../../../services/event.services';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

	public events_posts: Object;
	public titlePage = 'Events | Salon Home';
  	
	  constructor(
		private __EventService: EventService,
		private meta: Meta, 
		private title: Title, 
		private router: Router,
		) { }

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
		
		this.__EventService.getEvent().subscribe(
			response => {
				this.events_posts = response;
				if( !this.events_posts ){
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
