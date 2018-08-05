import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  List,
  Form,
  Input,
  ListItem,
  Thumbnail,
  Text,
  Icon,
  Body,
  Right
} from "native-base";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  
  renderSwitch () {
    // use this to handle their actions
    switch (this.props.searchText) {
      case 'Most Played':
      return (
        <Input placeholder="Most Played" style={styles.input} />
      );
      case '#Throwback':
      return (
        <Input placeholder="#Throwback" style={styles.input} />
      );
      case 'Mada Top 20':
      return (
        <Input placeholder="Mada Top 20" style={styles.input} />
      );
      case 'Our top 7':
      return (
        <Input placeholder="Our top 7" style={styles.input} />
      );
      case 'New Releases':
      return (
        <Input placeholder="New Releases" style={styles.input} />
      );
      default:
      return (
        <Input placeholder="Search Song..." style={styles.input} />
      );
    }
  }

  render() {
    let SinglesList = [];
    for (let i = 0; i < 10; i++) {
      SinglesList.push(
        <View key={i}>
          <ListItem style={{ paddingTop: 0, borderColor: "#000" }}>
            <Thumbnail
              square
              size={80}
              style={{ margin: 0, padding: 0 }}
              source={require("../../../assets/artist2.jpg")}
            />
            <Body>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }}>Satan be gone</Text>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }} note onPress={ Actions.show }>
                Asa #{i}
              </Text>
            </Body>
            <Right>
              <Icon2 name="options-vertical" size={20} color="#FFF" />
            </Right>
          </ListItem>
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000", paddingTop: 30 }}>
        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginBottom: 10, padding: 10 }}>
          <Icon name="md-arrow-back" size={28} style={{ color: "#da0717" }} onPress={() => Actions.pop()} />

          <Form style={{ width: "80%", padding: 0, margin: 0 }}>
            <Input placeholder={this.props.searchText ? this.props.searchText : 'Search Song...'} style={{ color: "#FFF", padding: 0, marginTop: -5, fontFamily: "helvetica" }} />
          </Form>

          <Icon name="search" style={{ color: "#d32f2f" }} />
        </View>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <List>{SinglesList}</List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    color: "#FFF", 
    padding: 0, 
    marginTop: -5, 
    fontFamily: "helvetica"
  }
});