import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Account } from './../../../models/account';
import { EmailService } from './../../../services/email.services';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-try-it-free',
  templateUrl: './try-it-free.component.html',
  providers: [EmailService]
})
export class TryItFreeComponent implements OnInit, OnDestroy {

  form: FormGroup;
  public account: Account;
  public titlePage = 'Join Our Community | Salon Home';
  public type_account_value: string;
  
  navigationSubscription;
  
  constructor(
      private _EmailService: EmailService,
      private _route: ActivatedRoute,
      private _router: Router,
      private formBuilder: FormBuilder,
      private meta: Meta, 
      private title: Title,
      private router: Router
  ) {
      this.account = new Account(0, '', '', '', '', '', '', false);
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

  onSubmit(){

      if (this.form.valid) {

          this.account = new Account(0, 
                    $('#type_account_value').val(), 
                    this.form.get('type_services').value, 
                    this.form.get('first_name').value, 
                    this.form.get('last_name').value, 
                    this.form.get('email').value, 
                    this.form.get('city').value, 
                    true
                  );

          this._EmailService.addTryifFree(this.account).subscribe(
            (response : any) => {

                  if(response.status){
                    this.account = new Account(0, '', '', '', '', '', '', false);
                    $('#form-try .set-response').html('<div class="message success">'+response.message+'</div>');
                  } else {
                    $('#form-try .set-response').html('<div class="message error">'+response.message+'</div>');
                    console.log(response);
                  }
                  $('html, body').stop().animate({ scrollTop: $('#form-try .set-response').offset().top - $('#myNavbar').height() + 64 }, 1000);
              },
              error => {
                  console.log('Error Exception:');
                  console.log(<any>error);
              }
          );

      } else {
          $('html, body').stop().animate({ scrollTop: $('#form-try').offset().top - $('#myNavbar').height() + 64 }, 1000);
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

  ngOnInit() {
      this.initTop();
      this.setMeta();
      this.InitValidForm();
  }
  
  ngAfterViewInit() {
	this.accountTypeParamHandler();
  }
  
  accountTypeParamHandler(){
		let _accountType = "";
		this._route.params.forEach((params: Params) => {
			if (_accountType == "") // Only set once
			{
				_accountType = params['type'];
			}
		});
		if (_accountType == "Professional")
		{	
			// Prevent ExpressionChangedAfterItHasBeenCheckedError		
			window.setTimeout(() =>
			{
				this.type_account_value = "Professional";
		
				this.updateFields();
			});
		}
		else
		{
			// Prevent ExpressionChangedAfterItHasBeenCheckedError		
			window.setTimeout(() =>
			{
				this.type_account_value = "Client";
		
				this.updateFields();
			});
		}
		
	}

  setMeta(){
    this.title.setTitle( this.titlePage );
    this.meta.updateTag({ property: 'og:title', content: this.titlePage });
    this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });  
  }

  InitValidForm(){
      this.form = this.formBuilder.group({
        first_name: [null, Validators.required],
        type_services: ['', null],
        last_name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        city: ['', Validators.required]
      });
  }
  
  onSelectionChange(evt)
  {
	this.type_account_value = evt.target.value;
	this.updateFields();
  }
  
  updateFields()
  {
      if (this.type_account_value == "Professional") {
        $('.display_control_professional').css({'display': 'block'});
        $('#type_account_value').val('Professional');		
		$("#content-photo-beta-pro").css("background-image", "url(assets/images/banner-image-try-salon-home.jpg)");
      } else {
        $('.display_control_professional').css({'display': 'none'});
        $('#type_account_value').val('Client');
		$("#content-photo-beta-pro").css("background-image", "url(assets/images/banner-image-try-salon-home-2.jpg)"); 
      }
  }

  initTop(){
    if (!this.navigationSubscription)
	{
		this.navigationSubscription = this.router.events.subscribe((evt) => {
				if (!(evt instanceof NavigationEnd)) {
					return;
				}
				window.scrollTo(0, 0);			
				this.accountTypeParamHandler();
			});
	}
	this.router.onSameUrlNavigation = "reload";
  }
 
 ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

}