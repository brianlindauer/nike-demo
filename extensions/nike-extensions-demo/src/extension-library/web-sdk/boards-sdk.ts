import { DocumentElement } from "@contrail/documents";
import { WebSDK } from "./web-sdk";

export class BoardsSDK {

  public static addElements(elements: Array<DocumentElement>){
    WebSDK.sendMessage({
      command: 'board:add_elements',
      data: elements,
    })
  }

  public static addElement(element: DocumentElement){
    this.addElements([element]);
  }

}