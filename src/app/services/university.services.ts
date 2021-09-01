import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class UniversityService{
	public base_api_url: string;

	constructor( private _http:HttpClient){

		this.base_api_url = GLOBAL.url;
	}

	searchPostUniversity( keyword:string ){
		
		return this._http.get( this.base_api_url + 'search/'+ keyword +'/1' );
	}

	getUniversity(){

		return this._http.get( this.base_api_url + 'university?per_page=100' );
	}

	getPostUniversity( slug:string ){
		
		return this._http.get( this.base_api_url + 'university?slug=' + slug );
	}
}