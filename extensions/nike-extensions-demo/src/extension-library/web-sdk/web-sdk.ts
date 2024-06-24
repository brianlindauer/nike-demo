
export interface WebSDKMessage {
  command: string;
  data: any;
}

export class WebSDK {
  public static VIBEIQ_APP_WINDOW: Window;
  public static VIBEIQ_HOST: string;

  static setConfig(iframeParent: Window, host: string){
    console.log("WebSDK: setConfig");
    this.VIBEIQ_APP_WINDOW = iframeParent;
    this.VIBEIQ_HOST = host;
  }

  public static sendMessage(message: WebSDKMessage){
    console.log("WebSDK: Sending message: ", this.VIBEIQ_APP_WINDOW)
    this.VIBEIQ_APP_WINDOW.postMessage(message, this.VIBEIQ_HOST);
  }



}