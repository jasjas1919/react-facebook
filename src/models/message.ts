import { observable, action } from "mobx";
import { Person } from "./person";

export class Message {
  @observable text: string;
  @observable sendingUser: Person;
  receivingUser: Person;
  constructor(text: string, sendingUser: Person) {
    this.setText(text);
    this.setSendingUser(sendingUser);
  }
  @action
  setText(text: string): void {
    this.text = text;
  }
  @action
  setSendingUser(user: Person): void {
    this.sendingUser = user;
  }
}