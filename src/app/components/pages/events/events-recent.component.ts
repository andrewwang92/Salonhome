import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from './../../../services/event.services';

@Component({
  selector: 'app-events-recent',
  templateUrl: './events-recent.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsRecentComponent implements OnInit {

	public events_posts;

	constructor(
		private __EventService: EventService,
		private _route: ActivatedRoute,
		private _router: Router
	) { 
	}

	ngOnInit() {

		this.getAllPost();		
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

	searchPost( keyword:string ){

		this._router.navigate( ['search', keyword] );
	}
}
