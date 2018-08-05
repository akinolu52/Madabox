import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { Container,  Content,  List,  Thumbnail,  Text,  Icon,  Fab } from "native-base";
import { DynamicCollage, StaticCollage, LayoutData } from "react-native-images-collage";


export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      photos: [
        "https://source.unsplash.com/random", 
        "https://picsum.photos/200/300/?random",
        "https://placeimg.com/640/480/any", 
        "https://loremflickr.com/320/240"
      ] 
    };
  }
  loading(){
    
  }
  render() {
    let SinglesList = [];
    for (let i = 0; i < 5; i++) {
      SinglesList.push(
        <View key={i} style={{ alignItems: "center", width: "33%", padding: 5 }}>
        <DynamicCollage
          width={100}
          height={100}
          images={this.state.photos}
          borders={0}          
          matrix={ LayoutData[4][i].matrix }
          // direction={ "column" }
          direction={ LayoutData[4][i].direction }
          containerStyle={{ borderRadius: 5 }}
          />
          {/* <Thumbnail
            square
            style={{ borderRadius: 5, width: "95%", height: 100 }}
            source={require("../../../../assets/artist.jpg")}
          /> */}
          <Text numberOfLines={1} style={{ color: "#FFF", textAlign: "center", flex: 1, fontFamily: "helvetica", marginTop: 5, }}>
            Throwback
          </Text>
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <List style={{ flexWrap: "wrap", display: "flex", flexDirection: "row", alignContent: "space-between" }}>
            {SinglesList}
          </List>
        </Content>
        <Fab direction="up" containerStyle={{}} style={{ backgroundColor: "#d32f2f" }} position="bottomRight">
          <Icon ios="ios-add" android="md-add" style={{ fontSize: 25 }} />
        </Fab>
      </Container>
    );
  }
}
