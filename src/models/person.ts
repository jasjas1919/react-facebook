import { observable, action } from "mobx";

export class Person {
  @observable name:string;
  @observable age:number;
  @observable eyeColor:string;

  constructor(name: string, age: number, eyeColor: string) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }

  copy(): Person {
    return new Person(this.name, this.age, this.eyeColor);
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
  setEye(eyeColor: string): void {
    this.eyeColor = eyeColor;
  }
}