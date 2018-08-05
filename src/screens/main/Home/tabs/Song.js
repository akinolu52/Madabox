import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Left, Right, Picker, Item } from "native-base";
// import Icon from "react-native-vector-icons/SimpleLineIcons";
// import ModalDropdown from 'react-native-modal-dropdown';
import { SongOptions } from "../../../../components/common";


export default class Song extends Component {
  render() {
    let SinglesList = [];
    for (let i = 0; i < 5; i++) {
      SinglesList.push(
        <View key={i}>
          <ListItem style={{ borderColor: "#000", paddingTop: 5, paddingBottom: 5 }}>
            <Thumbnail
              square
              size={80}
              source={require("../../../../assets/artist2.jpg")}
            />
            <Body>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }}>
              Satan be gone</Text>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }} note onPress={ Actions.show }>
                Asa
              </Text>
            </Body>
            <Right>
              <SongOptions />
            </Right>
          </ListItem>
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <List>{SinglesList}</List>
        </Content>
      </Container>
    );
  }
}
