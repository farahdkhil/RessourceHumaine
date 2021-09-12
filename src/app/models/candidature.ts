export class Candidature {
   constructor(
   public id?:Number,
   public firstname?:String,
   public lastname?:String,
   public dateOfBirth?:Date,
   public phone?:Number,
   public email?:String,
   public cin?:Number,
   public adresse?:String,
   public ville?:String,
   public pathCv? :String,
   public pathMotivationLetter?:String,
   public niveauEtud?:Number,
   public titreDiplome?:String,
   public university?:String,
   public niveauExp?:Number,
   public experience?:String,
   public archived? :Boolean,
   ){}
}
