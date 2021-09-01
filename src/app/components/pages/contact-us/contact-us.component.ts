import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Contact } from './../../../models/contact';
import { EmailService } from './../../../services/email.services';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [EmailService]
})
export class ContactUsComponent {

	form: FormGroup;
	public contact: Contact;
	public titlePage = 'Contact Us | Salon Home';

	constructor(
		private _EmailService: EmailService,
		private _route: ActivatedRoute,
		private _router: Router,
		private formBuilder: FormBuilder,
		private meta: Meta, 
		private title: Title,
		private router: Router
	) { 
		this.contact = new Contact(0, '', '', null, '', true);
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

	onSubmit(){
		
		if (this.form.valid) {

		  	this.contact = new Contact(0, 
		  					this.form.get('name').value, 
		  					this.form.get('email').value, 
		  					this.form.get('mobile').value, 
		  					this.form.get('message').value,
		  					true
		  				);

			this._EmailService.addContact(this.contact).subscribe(
				(response : any) =>  {
					
					if(response.status){
						this.reset();
		  				this.contact = new Contact(0, '', '', null, '', false);
		  				$('#form-contact .set-response').html('<div class="message success">'+response.message+'</div>');
					}else{
						console.log('Error Response:');
						console.log(response);
						$('#form-contact .set-response').html('<div class="message error">'+response.message+'</div>');
					}
					$('html, body').stop().animate({ scrollTop: $('#form-contact .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
				},
				error => {
					console.log('Error Exception:');
					console.log(<any>error);
				}
			);
		} else {
			$('html, body').stop().animate({ scrollTop: $('#form-contact').offset().top - $('#myNavbar').height() - 40 }, 1000);
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
	      name: [null, Validators.required],
	      email: [null, [Validators.required, Validators.email]],
	      mobile: [null, Validators.required],
	      message: [null, Validators.required]
	    });
	}

	reset(){
		this.form.reset();
	}

}
