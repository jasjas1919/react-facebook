import *  as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Person } from '../../models/person';
import { PersonPrint } from '../person/person';
import friendsStore from '../../stores/friends-store';

export interface AddEditUserProps {
  user?: Person;
  isEdit: boolean;
  onSave: (user: Person) => void;
  isUser: boolean;
}

@observer
export class AddEditUser extends React.Component<AddEditUserProps, {}> {
  @observable error: string;

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div>
          {"name:"} <input type='name' onChange={this.nameChanged} value={this.props.user.name}></input>
        </div>
        <div>
          {"age:"} <input type='number' onChange={this.ageChanged} value={this.props.user.age} ></input>
        </div>
        <button onClick={this.onSave}> {this.props.isEdit ? "Edit" : "Add"} </button>
        {this.error &&
          <div className='error'>
            {this.error}
          </div>
        }
      </div>
    );
  }

  @action
  onSave = (): void => {
    this.props.onSave(this.props.user);
  }

  @action
  nameChanged = (name: any): void => {
    this.props.user.name = name.target.value;

  }

  @action
  ageChanged = (age: any): void => {
    this.props.user.age = age.target.value;
  }
  validate = (): void => {
    // validate
    if (this.props.user.name.length > 0 &&
      this.props.user.age > 0) {
      // this.props.onSave(this.props.person);
    }
    else {
      this.error = "the input is not good!";
    }
  }
};