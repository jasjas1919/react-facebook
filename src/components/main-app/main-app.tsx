import * as React from "react";
import { observer } from "mobx-react";
import './main-app.css';
import { ProfileAndFriends } from "../profile-and-friends/profile-and-friends";

@observer
export class MainApp extends React.Component<{}, {}> {
  render(){
    return (
      <ProfileAndFriends/>
    );
  }
}