import { Observable, Subject } from 'rxjs';
import { WebSDK } from "./web-sdk/web-sdk";
import { AppContext } from "./app-context";
import { setConfig as setSDKConfig } from '@contrail/sdk';

export class ExtensionState {
  public static isExtensionInitializedSubject: Subject<boolean> = new Subject()
  public static isExtensionInitialized$: Observable<boolean> = this.isExtensionInitializedSubject.asObservable();


  public static initExtensionState(message: any){
    // Ignore messages coming from the local window
    if(('' + window.location).indexOf(message.origin) > -1) {
      return;

    }
    console.log("[ExtensionMessageHandler]: recieved event: ", message, message.type, message.origin);
    let data = message.data;   
    if(!data) {
      return;
    }
    const context = data?.context;
    if(!context) {
      return;
    }
    AppContext.setAppContext(context);
    WebSDK.setConfig(window.parent, message.origin);

    setSDKConfig({ 
      apiUserToken: context.authToken,
      orgSlug: context.authOrg,
      apiGateway: context.apiGateway,
    });  
    this.isExtensionInitializedSubject.next(true);  
  }
}