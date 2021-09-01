import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class HelpService{
	public base_api_url: string;

	constructor( private _http:HttpClient){

		this.base_api_url = GLOBAL.url;
	}

	searchPostHelp( keyword:string ){
		
		return this._http.get( this.base_api_url + 'search/'+ keyword +'/1' );
	}

	getHelp(){

		return this._http.get( this.base_api_url + 'help?per_page=100' );
	}

	getPostHelp( slug:string ){
		
		return this._http.get( this.base_api_url + 'help?slug=' + slug );
	}
}