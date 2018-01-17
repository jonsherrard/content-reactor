import React, { Component } from 'react'
import firebase from 'firebase' 

class ContentReactor extends Component {
  constuctor(props) {
    super(props) {
      this.firebaseInstance = firebase.initializeApp(props.firebaseAppConfigk 'contentReactor')
    }
  }
  
  componentWillMount() {
  	let messagesRef = fire.database().ref(`reactions/${this.props.contentIdentifier`)
  }
}

export default ContentReactor
