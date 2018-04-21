import React = require("react");
import { Person } from "../../models/person";
import friendsStore from "../../stores/friends-store";
import { PersonPrint } from "../person/person";
import { observer } from "mobx-react";
import './main.css';
import { observable, action } from "mobx";
import { AddEditUser } from "../edit-profile/add-edit-user";

@observer
export class MainApp extends React.Component<{}, {}> {
    @observable isEditingUser: boolean;
    @observable hideShowFriends:boolean;
    @observable deletePressed:boolean;
    @observable isAddingFriend:boolean;
    @observable hideFriend:boolean;
   
    componentWillMount() {
        this.init();
    }

    @action 
    init(){
        this.deletePressed = false;        
        this.hideShowFriends = false;
        this.isEditingUser = false;
    }

    @action 
    setIsEditing = (isEditing: boolean): void => {
        this.isEditingUser = isEditing;
    }
    
    @action 
    setIsAdding = (isAdding: boolean): void => {
        this.isAddingFriend = isAdding;
    }

    @action 
    toggleHideFriend = (hideShowFriends: boolean): void => {
        this.hideShowFriends = hideShowFriends;
    }
    @action
    setDeletePressed = (deletePressed: boolean): void => {
        this.deletePressed = deletePressed;
    }

    render() {
        return (
            <div>
                <div className='div'>
                    {"Hello, My Profile:"}
                    <PersonPrint person={friendsStore.user} isUpdatable={true} isDeleteable={false} 
                                    onUpdate={this.onUpdateUser}/>
                    <button onClick={this.buttonClicked}>change my name</button>
                </div>
                {this.isEditingUser && 
                    <AddEditUser user={friendsStore.user.copy()} isEdit={true} isUser={true} onSave={this.onSaveEditingUser}/>
                }
                <div className='div'> 
                    <div className='hideShowBtn'><button onClick={ this.toggleHideShowFriends }>{ this.hideShowFriends ? "Hide" : "Show" }</button></div> 
                    <div>{'I have '}{friendsStore.friends.length}{' friends.'}</div> 
                    {'and my friends are:' }
                    {this.hideShowFriends &&
                        friendsStore.friends.map((p: Person, index: number) => {
                        return <PersonPrint key={"person" + index} person={p} isUpdatable={false} isDeleteable={true} onDelete={() => {this.onDeleteFriend(index);}} /> })
                    }
                </div>
                <div>
                    <button onClick={() =>{this.addingFriend()}}>Add Friend</button>
                </div>
                {this.isAddingFriend && 
                    <AddEditUser user={new Person("", 0, "")} isEdit={false} isUser={false} onSave={this.onSaveAddingFriend}/>
                }
            </div>
        );
    }

    onSaveEditingUser = (user: Person): void => {
        friendsStore.setUser(user);
        this.setIsEditing(false);
    }

    onSaveAddingFriend = (friend: Person): void => {
        friendsStore.addFriend(friend);
        this.setIsAdding(false);
    }
    
    addingFriend = () =>{
        this.setIsAdding(true);
    }
    // hideShow = (hideShowFriends:boolean) =>{
       
    //     if(hideShowFriends == true){  
    //         this.toggleHideFriend(false);

    //     }else{
    //         this.toggleHideFriend(true);
    //     }

    // }

    toggleHideShowFriends = (): void => {
        this.hideShowFriends = !this.hideShowFriends;
    }

    onUpdateUser = (): void => {
       
        this.setIsEditing(true);
    }

    onDeleteFriend = (index: number): void => {
        friendsStore.removeFriend(index);
    }

    newFriendAdded = (friend: Person): void => {
        friendsStore.addFriend(friend);
    }
    buttonClicked = () => {
        friendsStore.user.setName("Maria");
    }
    
}