import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { HowitworksProfessionalsComponent } from './components/pages/howitworks/howitworks-professionals.component';
import { HowitworksClientsComponent } from './components/pages/howitworks/howitworks-clients.component';
import { ServicesBodyComponent } from './components/pages/services/services-body.component';
import { ServicesBarbersComponent } from './components/pages/services/services-barbers.component';
import { ServicesAvailablespaceComponent } from './components/pages/services/services-availablespace.component';
import { ServicesHairComponent } from './components/pages/services/services-hair.component';
import { ServicesMassageComponent } from './components/pages/services/services-massage.component';
import { ServicesSkinComponent } from './components/pages/services/services-skin.component';
import { ServicesNailComponent } from './components/pages/services/services-nail.component';
import { ServicesMakeupComponent } from './components/pages/services/services-makeup.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { TryItFreeComponent } from './components/pages/try-it-free/try-it-free.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { JoinOurTeamComponent } from './components/pages/join-our-team/join-our-team.component';
import { HelpComponent } from './components/pages/help/help.component';
import { ApplyCareersComponent } from './components/pages/apply-careers/apply-careers.component';
// import { UniversityComponent } from './components/pages/university/university.component';
// import { UniversityPostComponent } from './components/pages/university/university-post.component';
import { MagazineComponent } from './components/pages/magazine/magazine.component';
import { MagazinePostComponent } from './components/pages/magazine/magazine-post.component';
import { SearchPostComponent } from './components/pages/search/search.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsPostComponent } from './components/pages/events/events-post.component';
import { DownloadComponent } from './components/pages/download/download.component';

const appRoutes: Routes = [
	{ path : '', component: HomeComponent },
	{ path : 'home', component: HomeComponent },
	{ path : 'about-us', component: AboutUsComponent },
	{ path : 'careers', component: CareersComponent },
	{ path : 'how-it-works-professionals', component: HowitworksProfessionalsComponent },
	{ path : 'how-it-works-clients', component: HowitworksClientsComponent },
	{ path : 'services-body', component: ServicesBodyComponent },
	{ path : 'services-available-spaces', component: ServicesAvailablespaceComponent },
	{ path : 'services-hair', component: ServicesHairComponent },
	{ path : 'services-massage', component: ServicesMassageComponent },
	{ path : 'services-barbers', component: ServicesBarbersComponent },
	{ path : 'services-nail', component: ServicesNailComponent },
	{ path : 'services-makeup', component: ServicesMakeupComponent },
	{ path : 'services-skin', component: ServicesSkinComponent },
	{ path : 'privacy-policy', component: PrivacyPolicyComponent },
	{ path : 'contact-us', component: ContactUsComponent },
	{ path : 'try-it-free', component: TryItFreeComponent },
	{ path : 'try-it-free/:type', component: TryItFreeComponent, runGuardsAndResolvers: 'always', },
	{ path : 'terms-and-conditions', component: TermsComponent },
	{ path : 'join-our-team', component: JoinOurTeamComponent },
	{ path : 'help', component: HelpComponent },
	{ path : 'applying-for-position', component: ApplyCareersComponent },
	{ path : 'events', component: EventsComponent },
	{ path : 'events/:slug', component: EventsPostComponent },
	// { path : 'university', component: UniversityComponent },
	// { path : 'university/:slug', component: UniversityPostComponent },
	{ path : 'magazine', component: MagazineComponent },
	{ path : 'magazine/:slug', component: MagazinePostComponent },
	{ path : 'search/:keywords', component: SearchPostComponent },
	{ path : 'download', component: DownloadComponent },
	{ path : '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);