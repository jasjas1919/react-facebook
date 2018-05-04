import * as React from "react";
import { Person } from "../../models/person";
import friendsStore from "../../stores/friends-store";
import { PersonPrint } from "../person/person";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { AddEditUser } from "../edit-profile/add-edit-user";


export interface profileProp {
  
}

@observer
export class Profile extends React.Component<profileProp, {}> {
    @observable isEditingUser: boolean;
  
    componentWillMount() {
        this.init();
    }

    @action 
    init(){ }

    @action 
    setIsEditing = (isEditing: boolean): void => {
        this.isEditingUser = isEditing;
    }
    

    render() {
        return (
                <div>
                    <div className='div'>
                      {"My Profile:"}
                      <PersonPrint person={friendsStore.user} isUpdatable={true} isDeleteable={false} onUpdate={this.onUpdateUser}/>   
                    </div>
                    {this.isEditingUser && 
                      <AddEditUser user={friendsStore.user.copy()} isEdit={true} isUser={true} onSave={this.onSaveEditingUser}/>
                     }
                </div> 
        );
    }

    onSaveEditingUser = (user: Person): void => {
        friendsStore.setUser(user);
        this.setIsEditing(false);
    }

    onUpdateUser = (): void => {
       
        this.setIsEditing(true);
    }
    
}