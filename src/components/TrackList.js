import React, { Component } from "react";
import {  FlatList, View, StyleSheet, Alert } from "react-native";
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

import Track from "./Track";

import getData from "../data";

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: []
    };
  }
  componentDidMount() {
    getData().then(
      data => { 
        if (data === undefined) {
          this.setState({ trackList: [] });
        } else {
          this.setState({ trackList: data });
        }
      },
      error => {
        this.setState({ trackList: [] });
      }
    );  
  }
  _renderItem = ({ item }) => {
    return (
      // <Track
      //   title={item.title}
      //   album={item.album}
      //   artist={item.artist}
      //   genre={item.genre}
      //   source={item.source}
      // />
      <View style={{ color: "white", marginTop: 150  }}>
        {/* <Text>{item.key}</Text> */}
        <Text style={{ color: "white" }}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.album}</Text>
        <Text style={{ color: "white" }}>{item.artist}</Text>
        <Text style={{ color: "white" }}>{item.genre}</Text>
        <Text style={{ color: "white" }}>{item.source}</Text>
      </View>
    );
  };
  _keyExtractor = (item, index) => {
    return item.title;
  };

  render() {
    let tracks = this.state.trackList;
    if (tracks == undefined) {
      return <Text style={styles.white}>No Internet connection</Text>;
    }
    return (
      <View>
        <Text style={{ color: "white", marginTop: 80 }}> Internet connection</Text>
        {   
          tracks,       
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }
        <FlatList
          data={tracks}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        {/* <Content>
          { tracks }
          <List dataArray={tracks}
            renderRow={(track) =>
              <ListItem>
                <Text style={{ color: "white" }}>{track}</Text>
                <Text style={{ color: "white" }}>{item.title}</Text>
                <Text style={{ color: "white" }}>{item.album}</Text>
                <Text style={{ color: "white" }}>{item.artist}</Text>
                <Text style={{ color: "white" }}>{item.genre}</Text>
                <Text style={{ color: "white" }}>{item.source}</Text>
              </ListItem>  
            }>
          </List>   
        </Content> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  white: {
    color: "white",
    borderWidth: 1,
    borderColor: 'red'
  }
});
