export class Position{
	constructor(
		public id: number,
		public position: string,
		public full_name: string,
		public phone: string,
		public email: string,
		public linkedin: string,
		public file: any[],
		public message: string,
		public send_submit_careers: boolean
	){}
}