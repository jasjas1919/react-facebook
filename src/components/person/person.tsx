import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Person } from '../../models/person';
import './person.css';
import { Messages } from "../messages/messages";

export interface PersonPrintProps {
  person: Person;
  isUpdatable: boolean;
  isDeleteable: boolean;
  deletePressed?: boolean;
  openMessage?: boolean;
  //
  onDelete?: () => void;
  onUpdate?: () => void;
  onClickDelete?: () => void;
  openFriendMessage?: () => void;
}

@observer
export class PersonPrint extends React.Component<PersonPrintProps, {}> {
  @observable deletePressed: boolean;
  @observable openMessage: boolean;

  init() {
    this.deletePressed = false;
    this.openMessage = false;

  }

  @action
  setDeletePressed = (deletePressed: boolean): void => {
    this.deletePressed = deletePressed;
  }

  @action
  openFriendMessage = (openMessage: boolean): void => {
    this.openMessage = openMessage;
  }

  render() {
    return (
      <div className='about'>
        <p className="name"> name: {this.props.person.name}. </p>
        <p className="age"> age: {this.props.person.age} years old. </p>
        {this.getButtons()}
        {this.deletePressed &&
          <div className='popup'>
            <p> Are you sure ?</p>
            <button onClick={this.deleteProfile}>Yes</button>
            <button onClick={() => { this.setDeletePressed(false) }}>No</button>
          </div>
        }

      </div>
    );
  }

  getButtons(): JSX.Element {
    return <div>
      {this.props.isUpdatable &&
        <button className='edit' onClick={this.updateProfile} ></button>
      }
      {this.props.isDeleteable &&
        <div>
          <button className='delete' onClick={this.deleteButtonPressd} ></button>
          <button className='messageBtn' onClick={this.friendMessage} ></button>
        </div>
      }
    </div>;
  }
  updateProfile = (): void => {
    this.props.onUpdate();
  }

  deleteProfile = (): void => {
    this.props.onDelete();
    this.setDeletePressed(false)
  }

  deleteButtonPressd = (): void => {
    this.setDeletePressed(true);


  }

  friendMessage = (): void => {

    this.openFriendMessage(true);
    console.log(this.props.person.name, ' - friend clicked');
  }
};