import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-services-body',
  templateUrl: './services-body.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesBodyComponent implements OnInit {

	public titlePage = 'Spa Services | Salon Home';
	
	constructor(private meta: Meta, private title: Title, private router: Router) { }

	ngOnInit() {
		this.initTop();
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

}
