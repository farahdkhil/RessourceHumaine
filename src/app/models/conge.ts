import { User } from "./user";

export class Conge {
	constructor(
   public   id?:Number,
	public  typeConge?:String,
	public  debutConge?:Date,
	public  finConge?:Date,
	public  createdAt?:Date,
	public  description?:String,
	public  duree?: String,
	public  soldeConge?: Number,
	public  statusOfDemand?: Boolean,
	public  idUser?:Number,
	public  user?: User,
	){}
}
