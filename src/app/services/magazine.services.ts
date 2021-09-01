import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class MagazineService{
	public base_api_url: string;

	constructor( private _http:HttpClient){

		this.base_api_url = GLOBAL.url;
	}

	getMagazine(){

		return this._http.get( this.base_api_url + 'posts?per_page=100' );
	}

	getPostMagazine( slug:string ){
		
		return this._http.get( this.base_api_url + 'posts?slug=' + slug );
	}
}