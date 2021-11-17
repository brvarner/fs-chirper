export interface IChirp {
  map(arg0: (chirp: any, index: any) => JSX.Element): import("react").ReactNode;
	id: number;
	userid: number;
	content: string;
	_created: Date;
	username: string;
}

export interface IUser {
	id: number;
	username: string;
}