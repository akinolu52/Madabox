import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Tab, Tabs, Text, Icon } from "native-base";
import SideDrawer from "../../../components/common/SideDrawer";
// import Player from "../../../components/common/Player";
import Playlist from "./tabs/Playlist";
import Song from "./tabs/Song";
import Album from "./tabs/Album";

export default class Index extends Component {
  render() {
    return (
      <SideDrawer>
        <Container style={{ backgroundColor: "#000", paddingTop: 30}}>
          <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", padding: 10 }}>
            <Text style={{ color: "#d32f2f", fontSize: 21, fontWeight: "500", fontFamily: "helvetica" }}>
              Home
            </Text>

            <Icon ios="ios-search" android="md-search" onPress={Actions.search} style={{ color: "#d32f2f" }} />
          </View>
          <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: "#da0717", backgroundColor: "#000" }}>
            <Tab
              heading="PLAYLIST"
              tabStyle={{ backgroundColor: "#000" }}
              textStyle={{ color: "#fff", fontFamily: "helvetica" }}
              activeTabStyle={{ backgroundColor: "#000" }}
              activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
            >
              <Playlist />
            </Tab>
            <Tab
              heading="SONGS"
              tabStyle={{ backgroundColor: "#000", borderColor: "#000" }}
              textStyle={{ color: "#fff", fontFamily: "helvetica" }}
              activeTabStyle={{ backgroundColor: "#000" }}
              activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
            >
              <Song />
            </Tab>
            <Tab
              heading="ALBUMS"
              tabStyle={{ backgroundColor: "#000" }}
              textStyle={{ color: "#fff", fontFamily: "helvetica" }}
              activeTabStyle={{ backgroundColor: "#000" }}
              activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
            >
              <Album />
            </Tab>
          </Tabs>
        </Container>
      </SideDrawer>
    );
  }
}
