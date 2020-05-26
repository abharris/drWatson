import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { wastonAssessment } from '../actions/index';
import Text from './text';

class Conversation extends Component {
  constructor(props) {
    // console.log('in here');
    super(props);
    this.state = {
    };
  }

  // component did mount

  // render messages

  render() {
    // if (this.props.error) {
    //   return (
    //     <div> Oops! {this.props.error} </div>
    //   );
    // } else {
    // if (!this.allPosts) {
    //   return (
    //     <div>loading...</div>
    //   );
    // } else {
    return (
      <div className="fullHolder">
        <Text />
        <div className="anlysis" />
      </div>
    );
  }
  // }
}

function mapStateToProps(reduxState) {
  return {

  };
}

export default connect(mapStateToProps, { wastonAssessment })(Conversation);
