import { Message } from "../models/message";
import { observable, action } from "mobx";

class MessageStore {
  // @observable messages: Message[];
  // @observable message: Message;


  // constructor(){
  //   this.messages = observable([]);
  //   this.addMessage(new Message('new message 1' ,'sfsfs' ));
  //   this.addMessage(new Message('new message 2' , 'sfsfs'));
  //   this.addMessage(new Message('new message 3' , 'sfsfs'));
  // }
  
  // @action
  // addMessage = (message: Message): void => {
  //   this.message = message;
  // }
}

const messageStore: MessageStore = new MessageStore();
export default MessageStore;