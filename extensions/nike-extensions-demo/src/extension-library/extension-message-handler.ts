import { ExtensionState } from "./extension-state";


export class ExtensionMessageHandler {

  public static handleMessageFromParentFrame(message: any){
    console.log("handleMessageFromParentFrame: ", message)
    ExtensionState.initExtensionState(message);
  }
}

