import React, { Component } from "react";
import { Container, View, Content, Thumbnail, Text } from "native-base";

export default class Album extends Component {
  render() {
    let AlbumsList = [];
    for (let i = 0; i < 12; i++) {
      AlbumsList.push(
        <View key={i} style={{ alignItems: "center", width: "33%", padding: 5 }}>
          <Thumbnail
            square
            large
            style={{ borderRadius: 5 }}
            source={require("../../../../assets/artist.jpg")}
          />
          <Text numberOfLines={2} style={{ color: "#FFF", textAlign: "center", flex: 1, fontFamily: "helvetica" }}>
            Beautiful Imperfection
          </Text>
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <View style={{ flexWrap: "wrap", display: "flex", flexDirection: "row", alignContent: "space-between" }}>
            {AlbumsList}
          </View>
        </Content>
      </Container>
    );
  }
}
