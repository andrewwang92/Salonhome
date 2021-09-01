import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { FieldErrorDisplayComponent } from './components/error/field-error-display/field-error-display.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { HowitworksProfessionalsComponent } from './components/pages/howitworks/howitworks-professionals.component';
import { HowitworksClientsComponent } from './components/pages/howitworks/howitworks-clients.component';
import { ServicesBodyComponent } from './components/pages/services/services-body.component';
import { ServicesAvailablespaceComponent } from './components/pages/services/services-availablespace.component';
import { ServicesBarbersComponent } from './components/pages/services/services-barbers.component';
import { ServicesHairComponent } from './components/pages/services/services-hair.component';
import { ServicesMassageComponent } from './components/pages/services/services-massage.component';
import { ServicesSkinComponent } from './components/pages/services/services-skin.component';
import { ServicesMakeupComponent } from './components/pages/services/services-makeup.component';
import { ServicesNailComponent } from './components/pages/services/services-nail.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { TryItFreeComponent } from './components/pages/try-it-free/try-it-free.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { JoinOurTeamComponent } from './components/pages/join-our-team/join-our-team.component';
import { HelpComponent } from './components/pages/help/help.component';
import { ApplyCareersComponent } from './components/pages/apply-careers/apply-careers.component';
import { ServicesNavComponent } from './components/layout/services-nav/services-nav.component';
// import { UniversityComponent } from './components/pages/university/university.component';
// import { UniversityPostComponent } from './components/pages/university/university-post.component';
// import { UniversityRecentComponent } from './components/pages/university/university-recent.component';
import { MagazineComponent } from './components/pages/magazine/magazine.component';
import { MagazinePostComponent } from './components/pages/magazine/magazine-post.component';
import { MagazineRecentComponent } from './components/pages/magazine/magazine-recent.component';
import { SearchPostComponent } from './components/pages/search/search.component';
import { LeftNavComponent } from './components/layout/left-nav/left-nav.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsPostComponent } from './components/pages/events/events-post.component';
import { EventsRecentComponent } from './components/pages/events/events-recent.component';
import { DownloadComponent } from './components/pages/download/download.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    FieldErrorDisplayComponent,
    AboutUsComponent,
    CareersComponent,
    HowitworksProfessionalsComponent,
    HowitworksClientsComponent,
    ServicesBodyComponent,
    ServicesAvailablespaceComponent,
    ServicesBarbersComponent,
    ServicesHairComponent,
    ServicesMassageComponent,
    ServicesNailComponent,
    ServicesSkinComponent,
    ServicesMakeupComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TryItFreeComponent,
    TermsComponent,
    JoinOurTeamComponent,
    HelpComponent,
    ApplyCareersComponent,
    ServicesNavComponent,
    // UniversityComponent,
    // UniversityPostComponent,
    // UniversityRecentComponent,
    MagazineComponent,
    MagazinePostComponent,
    MagazineRecentComponent,
    SearchPostComponent,
    LeftNavComponent,
    EventsComponent,
    EventsPostComponent,
    EventsRecentComponent,
	DownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    SwiperModule,
    BrowserAnimationsModule

  ],
  providers: [
    Title,
    appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }