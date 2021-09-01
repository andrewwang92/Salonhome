import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { Account } from '../models/account';
import { Professional } from '../models/professional';
import { Position } from '../models/position';
import { GLOBAL } from './global';

@Injectable()
export class EmailService{
	
	public base_api_url: string;

	constructor( private _http:HttpClient){

		this.base_api_url = GLOBAL.slim;
	}

	addContact( contact:Contact ){

		let json = JSON.stringify( contact );
		let params = 'json='+json;
		let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.base_api_url+'contact', params, {headers: headers});
	}

	addTryifFree( account:Account ){

		let json = JSON.stringify( account );
		let params = 'json='+json;
		let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
		
		return this._http.post(this.base_api_url+'pre', params, {headers: headers});
	}

	addProfessional( professional:Professional ){

		let json = JSON.stringify( professional );
		let params = 'json='+json;
		let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
		
		return this._http.post(this.base_api_url+'getintouch', params, {headers: headers});
	}

	addPosition( position:Position ){

		let json = JSON.stringify( position );
		let params = 'json='+json;
		let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.base_api_url+'applycareers', params, {headers: headers});
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}
}