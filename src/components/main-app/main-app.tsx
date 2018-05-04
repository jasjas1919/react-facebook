import * as React from "react";
import { observer } from "mobx-react";
import './main-app.css';
import { FriendsProfile } from "../friends/friends-profile";
import { observable } from "mobx";
import { Profile } from "../user/profile";
import { Messages } from "../messages/messages";
import appStore from "../../stores/app-store";
import { AppState } from "../../models/app-state";
import { Navigation } from "../navigation/navigation";
export interface MainAppProps {
}

@observer
export class MainApp extends React.Component<MainAppProps, {}> {

  render() {
    return (
      <div>
        <Navigation />
        {appStore.appState == AppState.LOGIN &&
          <div>
            <div>Log In</div>
            <div><input type='email'></input></div>
            <div><input type='password'></input></div>
            <div>{'Invalid Email or Password.'}</div>
            <div><button>Submit</button><button>Register</button></div>
          </div>
        }
        {appStore.appState == AppState.PROFILE &&
          <Profile />
        }
        {appStore.appState == AppState.FRIENDS &&
          <FriendsProfile />
        }
        {appStore.appState == AppState.MESSAGES &&
          <Messages openMessage={true} />
        }
      </div>
    );
  }
}