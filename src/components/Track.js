import React, { Component } from "react";
import { Text , View } from "react-native";

export default class Track extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
      <View style={{ color: "white", marginTop: 150  }}>
      
      {          
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              // {text: data},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }
        <Text>{this.props.key}</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.album}</Text>
        <Text>{this.props.artist}</Text>
        <Text>{this.props.genre}</Text>
        <Text>{this.props.source}</Text>
      </View>
    );
  }
}
