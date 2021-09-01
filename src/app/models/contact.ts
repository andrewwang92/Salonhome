export class Contact{
	constructor(
		public id: number,
		public name: string,
		public email: string,
		public mobile: number,
		public message: string,
		public send_contact: boolean
	){}
}