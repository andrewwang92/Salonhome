import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { MagazineService } from '../../../services/magazine.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-magazine-post',
  templateUrl: './magazine-post.component.html',
  providers: [MagazineService]
})
export class MagazinePostComponent implements OnInit {

	public magazine_post;
	public magazine_posts;
	public titlePage = 'Post | Salon Home';

	constructor(
		private _MagazineService: MagazineService,
		private _route: ActivatedRoute,
		private meta: Meta, 
		private title: Title, 
		private router: Router
	) { 
	}

	ngOnInit() {
		this.initTop();
		this.getPost();
		this.getAllPost();
		this.setMeta();
	}

	initTop(){
		this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	getPost(){
		
		this._route.params.forEach((params: Params) => {
			let _slug = params['slug'];

			this._MagazineService.getPostMagazine(_slug).subscribe(
				response => {
					this.magazine_post = response;
					if( !this.magazine_post ){
						console.log('Not found data source.');
					} 
				},
				error => {
					console.log(<any>error);
				}
			);
		});
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

}
