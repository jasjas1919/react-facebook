import * as React from "react";
import { observer } from "mobx-react";
import './navigation.css';
import appStore from "../../stores/app-store";
import { AppState } from "../../models/app-state";

export class Navigation extends React.Component<{}, {}>{
  render(){
    return (
      <div>
        <button onClick={this.logInPopPressed}>Login</button>
        <button onClick={this.profilePopPressed}>My Profile</button>
        <button onClick={this.friendsPopPressed}>My Friends</button>
        <button onClick={this.messagePopPressed}>messages</button>
      </div>
    );
  }
  logInPopPressed = (): void => {
    appStore.setAppState(AppState.LOGIN);
  }
  profilePopPressed = (): void => {
    appStore.setAppState(AppState.PROFILE);
  }
  friendsPopPressed = (): void => {
    appStore.setAppState(AppState.FRIENDS);
  }
  messagePopPressed = (): void => {
    appStore.setAppState(AppState.MESSAGES);
  }
} 