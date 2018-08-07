import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { Container, Thumbnail, Text, Content, Button, Tab, Tabs, Icon } from "native-base";
import Icon2 from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";
import Follow from "../../../components/common/Follow";

import Singles from "./tabs/Singles";
import Albums from "./tabs/Albums";
import Bio from "./tabs/Bio";

export default class Show extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#000" }}>
        <View style={{ height: "50%" }}>
          <ImageBackground
            source={require("../../../assets/artist_cover.jpg")}
            style={{ width: "100%", flex: 1 }}>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", padding: 10 }}>
              <Icon2 name="md-arrow-back" size={28} style={{ color: "#da0717" }} onPress={() => Actions.pop()} />

              <Icon name="search" onPress={Actions.search} style={{ color: "#d32f2f" }} />
            </View>
            <View
              style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", padding: 5}}>
              <View
                style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ alignItems: "center" }}>
                  <Thumbnail
                    large
                    source={require("../../../assets/artist2.jpg")}
                    style={{ marginTop: 250 }}
                  />
                  <Text style={{ color: "#fff", marginTop: 20, fontFamily: "helvetica" }}>ASA</Text>
                  <Follow />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: "#da0717", backgroundColor: "#000" }}>
          <Tab
            heading="SINGLES"
            tabStyle={{ backgroundColor: "#000" }}
            textStyle={{ color: "#fff", fontFamily: "helvetica" }}
            activeTabStyle={{ backgroundColor: "#000" }}
            activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
          >
            <Singles />
          </Tab>
          <Tab
            heading="ALBUMS"
            tabStyle={{ backgroundColor: "#000" }}
            textStyle={{ color: "#fff", fontFamily: "helvetica" }}
            activeTabStyle={{ backgroundColor: "#000" }}
            activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
          >
            <Albums />
          </Tab>
          <Tab
            heading="BIO"
            tabStyle={{ backgroundColor: "#000" }}
            textStyle={{ color: "#fff", fontFamily: "helvetica" }}
            activeTabStyle={{ backgroundColor: "#000" }}
            activeTextStyle={{ color: "#da0717", fontWeight: "normal" }}
          >
            <Bio />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
