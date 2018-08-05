import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Thumbnail, Text } from "native-base";

export default class Albums extends Component {
  render() {
    let AlbumsList = [];
    for (let i = 0; i < 10; i++) {
      AlbumsList.push(
        <View key={i} style={{ alignItems: "center", width: "32%", padding: 5 }}>
          <Thumbnail
            square
            large
            style={{ borderRadius: 5 }}
            source={require("../../../../assets/artist.jpg")}
          />
          <Text numberOfLines={1} style={{ color: "#FFF", flex: 1, fontFamily: "helvetica" }}>
            Beautiful Imperfection
          </Text>
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <View style={{ alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>{AlbumsList}</View>
        </Content>
      </Container>
    );
  }
}
