export class User { 
    constructor(
    public idUser?:Number,
    public prenom?:String,
    public nom?:String,
    public dateOfBirth?:Date,
    public phone?: String,
    public  email?: String,
	public  cin?: String,
	public  adresse?: String,
	public  ville?: String,
    public  photo?: String,
    public  status?: String,
    public  cnss?: String,
    public  departement? : String,
    public  fonction?: String,
    public  typeContrat? : String,
    public  dateEntree? : Date,
    public  coutHeuresSup? : String,
    public  dureeConges?: Number,
    public  soldeConges? :Number,
    public joursConges? :Number,
    public  salary? : String,
    public password?: String,
    public budget?: Number,
    ){}
}
