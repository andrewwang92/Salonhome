export class Professional{
	constructor(
		public id: number,
		public business_name: string,
		public service: string,
		public street: string,
		public zipcode: string,
		public city: string,
		public first_name: string,
		public last_name: string,
		public email: string,
		public phone: string,
		public send_submit_professional: boolean 
	){}
}