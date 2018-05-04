import { observable, action } from "mobx";
import { Message } from "./message";

export class Conversation {
  @observable messages: Message[];
  constructor() {
    this.init();
  }
  @action init() {
    this.messages = [];
  }
  addMessage(message: Message): void {
    this.messages.push(message);
  }
}