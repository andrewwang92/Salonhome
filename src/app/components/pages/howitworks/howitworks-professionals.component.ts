import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Professional } from './../../../models/professional';
import { EmailService } from './../../../services/email.services';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-howitworks-professionals',
  templateUrl: './howitworks-professionals.component.html',
  styleUrls: ['./howitworks.component.css'],
  providers: [EmailService]
})
export class HowitworksProfessionalsComponent {

	form: FormGroup;
	public professional: Professional;
	public titlePage = 'How It Works Professionals | Salon Home';

	constructor(
		private _EmailService: EmailService,
		private _route: ActivatedRoute,
		private _router: Router,
		private formBuilder: FormBuilder,
		private meta: Meta, 
		private title: Title,
		private router: Router
	) {
		this.professional = new Professional(0, '', '', '', '', '', '', '', '', '', false);
	}

	isFieldValid(field: string) {
		return !this.form.get(field).valid && this.form.get(field).touched;
	}

	displayFieldCss(field: string) {
		return {
		  'has-error': this.isFieldValid(field),
		  'has-feedback': this.isFieldValid(field)
		};
	}

	ngOnInit(){
		this.initTop();
		this.InitValidForm();
		this.setMeta();
	}

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ property: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	initTop(){
		this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
	}

	onSubmit(){
		
		if (this.form.valid) {

		  	this.professional = new Professional(0, 
				  		this.form.get('business').value, 
				  		this.form.get('services').value, 
				  		this.form.get('street').value, 
				  		this.form.get('code').value, 
				  		this.form.get('city').value, 
				  		this.form.get('firstname').value,
				  		this.form.get('lastname').value,
				  		this.form.get('email').value,
				  		this.form.get('contactnumber').value,
				  		true
				  	);

			this._EmailService.addProfessional(this.professional).subscribe(
				(response : any) => {
					
					if(response.status){
						this.reset();
		  				this.professional = new Professional(0, '', '', '', '', '', '', '', '', '', false);
		  				$('#form-professionals .set-response').html('<div class="message success">'+response.message+'</div>');
					}else{
						console.log('Error Response:');
						console.log(response);
						$('#form-professionals .set-response').html('<div class="message error">'+response.message+'</div>');
					}
					$('html, body').stop().animate({ scrollTop: $('#form-professionals .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
				},
				error => {
					console.log('Error Exception:');
					console.log(<any>error);
				}
			);
		} else {
			$('html, body').stop().animate({ scrollTop: $('#form-professionals').offset().top - $('#myNavbar').height() - 64 }, 1000);
			this.validateAllFormFields(this.form);
		}
	}

	validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFormFields(control);
			}
		});
	}

	InitValidForm(){
		this.form = this.formBuilder.group({
	      business: [null, Validators.required],
	      services: ['', Validators.required],
	      street: [null, Validators.required],
	      code: [null, Validators.required],
	      city: [null, Validators.required],
	      firstname: [null, Validators.required],
	      lastname: [null, Validators.required],
	      email: [null, [Validators.required, Validators.email]],
	      contactnumber: [null, Validators.required],
	    });
	}

	reset(){
		this.form.reset();
	}

}
