import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class EventService{
	public base_api_url: string;

	constructor( private _http:HttpClient){

		this.base_api_url = GLOBAL.url;
	}

	searchPostEvent( keyword:string ){
		
		return this._http.get( this.base_api_url + 'search/'+ keyword +'/1' );
	}

	getEvent(){

		return this._http.get( this.base_api_url + 'events?per_page=100' );
	}

	getPostEvent( slug:string ){
		
		return this._http.get( this.base_api_url + 'events?slug=' + slug );
	}
}