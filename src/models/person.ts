import { observable, action } from "mobx";
import { Conversation } from "./conversation";
import { Message } from "./message";

export class Person {
  @observable name:string;
  @observable age:number;
  @observable conversation: Conversation;
  constructor(name: string, age: number) {
    this.setName(name);
    this.setAge(age);
    this.setConversation(new Conversation());
  }
  copy(): Person {
    return new Person(this.name, this.age);
  } 
  @action
  setName(name: string): void {
    this.name = name;
  }
  @action
  setAge(age: number): void {
    this.age = age;
  }
  @action
  setConversation(con: Conversation): void {
    this.conversation = con;
  }
  sendMessage(message: Message): void {
    this.conversation.addMessage(message);
  }
}