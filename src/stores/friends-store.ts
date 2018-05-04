import { Person } from "../models/person";
import { observable, action } from "mobx";

class FreindsStore {
  @observable friends: Person[];
  @observable user: Person;

  constructor(){
    this.friends = observable([]);
    this.setUser(new Person("Jasmin", 26));
    this.addFriend(new Person('Maria', 28));
    this.addFriend(new Person('Moshe', 25));
  }
  
  @action
  setUser = (user: Person): void => {
    this.user = user;
  }

  @action
  addFriend = (newFriend: Person): void => {
    this.friends.push(newFriend);
  }

  @action
  removeFriend = (index: number) => {
    this.friends.splice(index,1);
  }
}

const friendsStore: FreindsStore = new FreindsStore();
export default friendsStore;