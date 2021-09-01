import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { UniversityService } from './../../../services/university.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [UniversityService]
})
export class SearchPostComponent implements OnInit {

	public result_posts;
	public titlePage = 'Search Results | Salon Home';

	constructor(
		private _UniversityService: UniversityService,
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
		this.getResults();
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	getResults(){
	
		this._route.params.forEach((params: Params) => {
			let _keywords = params['keywords'];

			this._UniversityService.searchPostUniversity(_keywords).subscribe(
				response => {
					this.result_posts = response;
					if( !this.result_posts ){
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
