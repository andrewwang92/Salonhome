import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineService } from '../../../services/magazine.services';

@Component({
  selector: 'app-magazine-recent',
  templateUrl: './magazine-recent.component.html',
  providers: [MagazineService]
})
export class MagazineRecentComponent implements OnInit {

	public magazine_posts;

	constructor(
	private _MagazineService: MagazineService,
	private _router: Router
	) { 
	}

	ngOnInit() {

		this.getRecentPost();
	}

	getRecentPost() {
		
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

	searchPost( keyword:string ){

		this._router.navigate( ['search', keyword] );
	}
}
