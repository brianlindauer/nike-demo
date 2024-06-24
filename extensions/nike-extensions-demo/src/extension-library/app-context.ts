import { BehaviorSubject, Observable, Subject } from "rxjs";


export class AppContext {
  public static context: any = {};
  public static context$: Subject<any> = new BehaviorSubject(null);

  public static setAppContext(context: any){
    console.log("setAppContext: ", context)
    this.context = context;
    this.context$.next(this.context);
  }
}