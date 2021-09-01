export class Event{
	constructor(
		public id: number,
		public title: string,
		public experts: string,
		public venue: string,
		public location: string,
		public start_date_time: Date,
		public end_date_time: Date,
		public created_at: string,
		public description: string,
		public slug: string,
		public tags: string
	){}
}