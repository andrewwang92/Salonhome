import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Position } from './../../../models/position';
import { EmailService } from './../../../services/email.services';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-apply-careers',
  templateUrl: './apply-careers.component.html',
  styleUrls: ['./apply-careers.component.css'],
  providers: [EmailService]
})
export class ApplyCareersComponent {

	form: FormGroup;
	public position: Position;

	public filesToUpload;
	public resultUpload;
	public titlePage = 'Apply Careers | Salon Home';

	setMeta(){
		this.title.setTitle( this.titlePage );
		this.meta.updateTag({ name: 'itemprop', content: this.titlePage });
		this.meta.updateTag({ name: 'og:title', content: this.titlePage });
		this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });	
	}

	constructor(
		private _EmailService: EmailService,
		private _route: ActivatedRoute,
		private _router: Router,
		private formBuilder: FormBuilder,
		private meta: Meta, 
		private title: Title,
		private router: Router
	) { 
		this.position = new Position(0, '', '', '', '', '', null, '', false);
	}

	initTop(){
		this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
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

	ngOnInit() {
		this.initTop();
		this.setMeta();
		this.addEventSelectable();
		this.InitValidForm();
	}

	onSubmit(){
		
		if (this.form.valid) {

		  	this.position = new Position(0, 
		  					this.form.get('position').value, 
		  					this.form.get('fullname').value, 
		  					this.form.get('phone').value, 
		  					this.form.get('email').value,
		  					this.form.get('linkedin').value,
		  					null,
		  					this.form.get('message').value,
		  					true
		  				);

			this._EmailService.addPosition(this.position).subscribe(
				(response : any) => {
					
					if(response.status){
						this.reset();
		  				this.position = new Position(0, '', '', '', '', '', null, '', false);
		  				$('#form-apply-careers .set-response').html('<div class="message success">'+response.message+'</div>');
					}else{
						console.log('Error Response:');
						console.log(response);
						$('#form-apply-careers .set-response').html('<div class="message error">'+response.message+'</div>');
					}
					$('html, body').stop().animate({ scrollTop: $('#form-apply-careers .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
				},
				error => {
					console.log('Error Exception:');
					console.log(<any>error);
				}
			);
		} else {
			$('html, body').stop().animate({ scrollTop: $('#form-apply-careers').offset().top - $('#myNavbar').height() - 64 }, 1000);
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
		  position: ['', null],
	      fullname: [null, Validators.required],
	      phone: [null, Validators.required],
	      email: [null, [Validators.required, Validators.email]],
	      linkedin: [null, null],
	      message: [null, Validators.required]
	    });
	}

	reset(){
		this.form.reset();
	}

	addEventSelectable(){
		$(document).ready(function() {
			$(document).on('change', '.selectable-texts', function(e) {
				var _text = $(this).find('option:selected').attr('data-text');
				$('.position-desc').css('display', 'none').text(_text).fadeIn();
			});
		});
	}
}
