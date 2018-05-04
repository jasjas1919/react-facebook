import * as React from "react";
import { Message } from '../../models/message';
import { observer } from "mobx-react";
import { observable, action } from "mobx";


export interface messageProps {
    openMessage:boolean;
    message?: Message;
}

@observer
export class Messages extends React.Component<messageProps, {}> {
    @observable openMessage:boolean;

    componentWillMount() {
        this.init();
    }

    @action 
    init(){
        this.openMessage = false;
    }
    
    @action 
    openFriendMessage = (openMessage: boolean): void => {
        this.openMessage = openMessage;
    }
        render() {
        return (

            <div className='div'>
                    <div className="message">
                    <p className="name"> {this.props.message.text}. </p>
                    <p className="name"> {this.props.message.title}. </p>
                        <input></input><button>Send</button>
                    </div>
            </div>
        );
    }
    

}
