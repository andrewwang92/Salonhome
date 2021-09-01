import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public titlePage = 'Home | Salon Home';

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

	HairStylist = [
		{
			img: "assets/images/listing/hair-stylist/cherelle-renee.jpg",
			title: "Cherelle Renee",
			reviews: "1",
			stars: "5",
			description: "Cherelle Renee strives to continue to encourage and motivate aspiring artists and stylists in the hair industry. Presenting and providing broad opportunities...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/jennifer-cho.jpg",
			title: "Jennifer Cho",
			reviews: "30",
			stars: "5",
			description: "Everyone knows that Los Angeles's Jennifer Cho Hair Designer is the best hair salon for a professional cut and color. Pamper your locks with a cut and color...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/tanikas-torrice.jpg",
			title: "Tanika’s Torrice",
			reviews: "4",
			stars: "5",
			description: "Tanika Torrice is a Hair Extension Artist/Designer from Toronto, Canada. She currently owns and operates a private hair extension salon, Hair Enhancements ...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/frankie-rosado-orlando.jpg",
			title: "Hair By Frankie Rosado",
			reviews: "9",
			stars: "5",
			description: "Frankie Rosado has been in the cosmetology business for over 10 years and has an incredible passion for hair. He strives to make his clients feel at...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/imanis-essence-of-beauty.jpg",
			title: "Imani’s Essence of...",
			reviews: "5",
			stars: "5",
			description: "Dedicated to the happiness of her clients. Come experience a stylists that promotes inner as well as outer well being by making you look and...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/jessica-portillo-new.jpg",
			title: "Jessica Portillo",
			reviews: "15",
			stars: "5",
			description: "She earned her reputation as a stylist and colorist and balayage technician over 15 years of working at such greats as David and Friends Hair Salon, the late...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/cristophe-salon.jpg",
			title: "Cristophe Salon",
			reviews: "82",
			stars: "4.5",
			description: "Beauty should be simple. From inner to outer beauty, one should always radiate. Our stylists' approach is based on maximizing personal features by gently...",
			price: ""
		},
		{
			img: "assets/images/listing/hair-stylist/jasmine-milsap-hair.jpg",
			title: "Jasmine Milsap Hair",
			reviews: "21",
			stars: "5",
			description: "Stylist Jasmine is a natural hair expert, and specializes in everything from sew-in extensions, to weaves, to relaxer treatments. Jasmine makes...",
			price: ""
		}
	];

	Barbers = [
		{
			img: "assets/images/listing/barbers/romeo-the-barber-smyrna.jpg",
			title: "Romeo The Barber",
			reviews: "5",
			stars: "5",
			description: "Men's, kids, women's, military, seniors haircuts and designs. If you have hair, i can cut it!! Come in and let me improve your look...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/christophers-barber-studio-elkridge.jpg",
			title: "Christopher’s Barber...",
			reviews: "42",
			stars: "4.5",
			description: "For those who haven't heard yet, Chris and Jeff (the Hall brothers) have left Miles Barber shop in Laurel and moved to a brand.",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/rey-barber-shop-bloomfield.jpg",
			title: "Rey Barber Shop",
			reviews: "1",
			stars: "5",
			description: "Everyone knows that Bloomfield's Rey Barber Shop is the best hair salon for a professional cut and color. With services like hair cuts...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/xecutive-cutz-barbershop-jacksonville.jpg",
			title: "Xecutive Cutz Barbershop",
			reviews: "9",
			stars: "4.5",
			description: "At Xecutive Cutz Barbershop, our objective is to focus on great hair and superior customer service. To provide the best...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/leroys-barber-shop-philadelphia.jpg",
			title: "Leroy’s Barber Shop",
			reviews: "3",
			stars: "5",
			description: "Leroy's Barber Shop is operated right here in Philadelphia, PA. Since our shop opened its doors in 2013, we've treated every...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/el-catrin-barbershop-santa-ana.jpg",
			title: "El Catrin Barbershop",
			reviews: "170",
			stars: "4.5",
			description: "We are California licensed Barbers providing proper haircut and shaves. All of our services are cash only. If you have...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/troys-barber-shop-and-sues-hair-styling-baton-rouge.jpg",
			title: "Troy’s Barber Shop...",
			reviews: "13",
			stars: "5",
			description: "Baton Rouge's Troy's Barber Shop & Sue's Hair Styling is a highly-rated hair salon with hairstylist experts available...",
			price: ""
		},
		{
			img: "assets/images/listing/barbers/floyds-99-barbershop-minneapolis.jpg",
			title: "Floyd’s 99 Barbershop",
			reviews: "118",
			stars: "4",
			description: "Floyd’s 99 shops focus on old school satisfaction where customers are every employee's number one priority.",
			price: ""
		}
	];

	MassageTherapist = [
		{
			img: "assets/images/listing/massage-therapist/laura-case-charlotte.jpg",
			title: "Laura Case",
			reviews: "4",
			stars: "5",
			description: "I am trained in Deep Tissue, Neuromuscular, Trigger Point, Swedish & Prenatal massage.  Prices are the same for all types...",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/heather-udomrat-cmt-san-francisco.jpg",
			title: "Heather Udomrat, CMT",
			reviews: "35",
			stars: "5",
			description: "Heather practices Thai Yoga Massage, Deep Tissue, Trigger-Point Release (Myofascial Therapy), NeuroMuscular...",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/spaland-detroit-3.jpg",
			title: "Spaland",
			reviews: "3",
			stars: "5",
			description: "Spaland is a a unique business where I come to you, take the time to recover from a bad injury, or escape from a hectic...",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/mike-case-cmt-denver.jpg",
			title: "Mike Case, CMT",
			reviews: "7",
			stars: "5",
			description: "Best massage studio in Denver Cherry Creek! 30% off 1st Appointment! 11 years in practice, licensed, certified, 5-STAR rated...",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/krista-harris-marietta.jpg",
			title: "Krista Harris",
			reviews: "7",
			stars: "5",
			description: "We specialize in Massage, Private & Group Instruction in Aerial Yoga and Therapeutic Sound (Soundfulness Meditation).",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/julian-turner-lmt-washington.jpg",
			title: "Julian Turner, LMT",
			reviews: "38",
			stars: "4.5",
			description: "We specialize in therapeutic massage, using deep tissue techniques to address aches, pains and stiffness.",
			price: ""
		},
		{
			img: "assets/images/listing/massage-therapist/mobile-massage-by-alicia-mcnair-aloha-breeze-mobile-massage-las-vegas.jpg",
			title: "Aloha Breeze Mobile...",
			reviews: "43",
			stars: "5",
			description: "I am a licensed Massage Therapist from the State of Nevada since 2013, I chose this field because I enjoy...",
			price: ""
		}
	];

	Spas = [
		{
			img: "assets/images/listing/spas/chic-la-vie-med-spa-las-vegas.jpg",
			title: "Chic la Vie Med Spa",
			reviews: "65",
			stars: "5",
			description: "Chic La Vie Med Spa is a world-class medical spa in Las Vegas, Nevada just minutes from the Las Vegas Strip. Chic La Vie is a...",
			price: ""
		},
		{
			img: "assets/images/listing/spas/karine-kazarian-new-york.jpg",
			title: "Karine Kazarian",
			reviews: "12",
			stars: "5",
			description: "Authentic decor brings a classic aesthetic to this quaint little downtown shop, reminiscent of a 19th century French beauty parlor.",
			price: ""
		},
		{
			img: "assets/images/listing/spas/elina-organics-skin-care-chicago.jpg",
			title: "Elina Organics Skin Care",
			reviews: "28",
			stars: "4.5",
			description: "We know that beauty is more than skin deep and that a person is much more than a physical body. Our well being requires mental...",
			price: ""
		},
		{
			img: "assets/images/listing/spas/maddy-jean-permanent-makeup-orlando.jpg",
			title: "Maddy Jean Permanent...",
			reviews: "2",
			stars: "5",
			description: "Fall Sale! - $295 brows by Master Artist- Maddy jean-Expert in microblading, 3d hair strokes, eyebrow pigmentation...",
			price: ""
		},
		{
			img: "assets/images/listing/spas/lush-nail-bar-atlanta.jpg",
			title: "Lush Nail Bar",
			reviews: "25",
			stars: "4.5",
			description: "We also offer highly skilled microblading services so that you can have immaculate eyebrows to shape and frame your face.",
			price: ""
		},
		{
			img: "assets/images/listing/spas/dana-elise-solutions-beverly-hills.jpg",
			title: "Dana Elise Solutions",
			reviews: "41",
			stars: "5",
			description: "Dana Elise Solutions is Beverly Hills premier center for Expert Electrolysis and Advanced Skin Care treatments.",
			price: ""
		},
		{
			img: "assets/images/listing/spas/salon-joa-denver.jpg",
			title: "Salon Joa",
			reviews: "195",
			stars: "4.5",
			description: "Salon Joa is a modern barbershop, salon, nail bar, makeup studio, and wax studio all in one conveniently located haven.",
			price: ""
		},
		{
			img: "assets/images/listing/spas/nails-by-tammy-dickson.jpg",
			title: "Nails by Tammy",
			reviews: "9",
			stars: "3",
			description: "Tired of your nail polish color? Head on over to Dickson's Nails by Tammy for a fresh, colorful new coat. Keep your nails in tip-top...",
			price: ""
		}
	];


	slideConfig = {
		"arrows": true,
		"slidesPerView": 4,
		"loop": true,
		autoplay: {
			delay: 2800,
			disableOnInteraction: false
		},
		"breakpoints": {
			1023: {
				"slidesPerView": 2
			}
		},
		/* 
		// Enable arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},*/
	};

	swiperInit(target) {
	}

    swiperReachEnd(e) {	
	}

    swiperReachBeginning(e) {
	}

    swiperSlideChange(e) {

	}
}