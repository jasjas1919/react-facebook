import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Person } from '../../models/person';
import './person.css';

export interface PersonPrintProps {
    person: Person;
    isUpdatable: boolean;
    isDeleteable: boolean;
    deletePressed?: boolean;
    //
    onDelete?: () => void;
    onUpdate?: () => void;
    onClickDelete?: () => void;
}

@observer
export class PersonPrint extends React.Component<PersonPrintProps,{}> {
    @observable deletePressed:boolean;
    init(){
        this.deletePressed = false;
    }

    @action
    setDeletePressed = (deletePressed: boolean): void => {
        this.deletePressed = deletePressed;
    }
    render() {
        return (
            <div className='about'>
                <p className="name"> name: {this.props.person.name}. </p>
                <p className="age"> age: {this.props.person.age} years old. </p>
                <p className="eye-color">eye color: {this.props.person.eyeColor}.</p>
                {this.getButtons()}     
                {this.deletePressed &&
                <div className='popup'>
                    <p> Are you sure ?</p>
                    <button onClick={this.deleteProfile}>Yes</button>
                    <button onClick={()=>{this.setDeletePressed(false)}}>No</button>
                </div>}
            </div>
        );
    }

    getButtons(): JSX.Element {
        return <div>
            {this.props.isUpdatable && <button className='edit' onClick={ this.updateProfile } ></button> }
            {this.props.isDeleteable &&<button className='delete' onClick={ this.deleteButtonPressd } ></button>}
        </div>;
    }
    updateProfile = ():void => {
        this.props.onUpdate();
    }

    deleteProfile = ():void => {
        this.props.onDelete();
        this.setDeletePressed(false)
    }
    
    deleteButtonPressd  = ():void =>{
       this.setDeletePressed(true);
      
    }
};