import React, { Component } from 'react';
import '../style.scss';
/* jslint white: true */

class Text extends Component {
  constructor(props) {
    // console.log('in here');
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="chatbox">
          <div className="top-bar">
            <div className="avatar"><p>W</p></div>
            <div className="name">Dr. Watson</div>
          </div>
          <div className="chats">
            <div className="outgoing">
              <div className="bubbleOut">Hey, Fathers Day is coming up..</div>
              <div className="bubbleOut">What are you getting.. Oh, oops sorry dude.</div>
            </div>
            <div className="incoming">
              <div className="bubbleIn">Nah, its cool.</div>
              <div className="bubbleIn">Well you should get your Dad a cologne. Here smell it. Oh wait! ...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Text;
