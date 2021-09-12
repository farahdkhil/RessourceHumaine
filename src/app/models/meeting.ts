export class Meeting {
   constructor(
   public id ?: Number,
   public titre?:String,
   public type?:String,
   public meetingDay?:Date,
   public meetingTime?:Date,
   public canceled?:Boolean,
   ){}
}
