import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { EventService } from './../../../services/event.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events-post',
  templateUrl: './events-post.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsPostComponent implements OnInit {

	public events_post: Object;
	public titlePage = 'SalonHome Events | Salon Home';

	constructor(
		private __EventService: EventService,
		private _route: ActivatedRoute,
		private _router: Router,
		private meta: Meta, 
      	private title: Title,
      	private router: Router
	) { 
	}

	ngOnInit() {
		this.initTop();
		this.setMeta();
		this.getPost();
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });  
	}

	getPost(){
	
		this._route.params.forEach((params: Params) => {
			let _slug = params['slug'];

			this.__EventService.getPostEvent(_slug).subscribe(
				response => {
					this.events_post = response;
					if( !this.events_post ){
						console.log('Not found data source.');
					} 
				},
				error => {
					console.log(<any>error);
				}
			);
		});
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
