export class Prescription {
    constructor(
   public _id: number=1,
   public clinic:number=1,
   public doctor:number=1,
   public  patient:number=1,
   public  medicine:string="",
   public  notes:string="",
   public date:string="",
   public time:string="",
    ){}
}
