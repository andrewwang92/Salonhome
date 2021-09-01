export class Account{
	constructor(
		public id: number,
		public type: string,
		public services: string,
		public first_name: string,
		public last_name: string,
		public email: string,
		public city: string,
		public send_submit_try: boolean
	){}
}