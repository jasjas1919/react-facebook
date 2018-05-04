import * as React from "react";
import { Message } from '../../models/message';
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Person } from "../../models/person";
import friendsStore from "../../stores/friends-store";

export interface MessageProps {
  user?: Person;
}

@observer
export class Messages extends React.Component<MessageProps, {}> {
  @observable inputText: string;
  componentWillMount() {
    this.init();
  }
  @action
  init() {
    this.inputText = "";
  }

  @action
  openFriendMessage = (openMessage: boolean): void => {
  }
  render() {
    return (
      <div className='div'>
        <div className='friends-list'>
          {'friends list:'}
          {friendsStore.friends.map((friend: Person) => {
            <div onClick={() => this.friendClicked(friend)}> {friend.name} </div>
          })
          }
        </div>
        <div className="converstion">
          <p className="name"> messages: </p>
          { this.props.user && 
            this.props.user.conversation.messages.map((message: Message) => {
              <div> {message.text} </div>
            })
          }
          <input value={this.inputText} onChange={this.input}></input><button onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
  @action
  sendMessage = (): void => {
    this.props.user.sendMessage(new Message(this.inputText, friendsStore.user));
  }
  @action
  friendClicked = (friend: Person): void => {
    this.props.user = friend;
  }
}
