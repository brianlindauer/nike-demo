import { Injectable } from '@angular/core';
import { ExtensionMessageHandler } from '../extension-library/extension-message-handler';

@Injectable({
  providedIn: 'root',
})
export class ExtensionManagerService {
  constructor(){
    if (window.addEventListener) {
      window.addEventListener("message", ExtensionMessageHandler.handleMessageFromParentFrame, false);
     } else {
       (<any>window).attachEvent("onmessage", ExtensionMessageHandler.handleMessageFromParentFrame);
    }
  }
}