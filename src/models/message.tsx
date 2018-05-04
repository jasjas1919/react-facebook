import { observable, action } from "mobx";

export class Message {
  @observable text:string;
  @observable title:string;
 

  constructor(text: string , title:string) {
    this.text = text;
    this.title = title;
  
  }

  
  @action
  satMessageText(text: string): void {
    this.text = text;
  }

  @action
  satMessageTitle(title: string): void {
    this.title = title;
  }

 
}