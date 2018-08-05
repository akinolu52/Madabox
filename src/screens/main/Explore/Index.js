import React, { Component } from "react";
import { View, Dimensions, Platform, Image, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Tab, Tabs, Text, Icon, Header, Left, Body, Button, Title, Content, Card,
    CardItem, Thumbnail, Right, Grid, Col, CheckBox, Label, } from "native-base";
import SideDrawer from "../../../components/common/SideDrawer";
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');
const IS_IOS = Platform.OS === 'ios';

export default class Index extends Component {
    state = {
        images: [
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
            "../../../assets/artist2.jpg",
        ]
    };
    renderItem = ({item, index}) => (
        <View style={styles.viewStyle}>
            <Text numberOfLines={1} style={{ color: "#FFF", textAlign: "center", fontSize: 15, fontFamily: "helvetica" }}>
                Asa #{index}
            </Text>
            <Text numberOfLines={1} style={{ color: "#FFF", textAlign: "center", fontSize: 14, fontFamily: "helvetica" }}>
                Beautiful Imperfection
            </Text>
            {/*style={styles.tile} source={{ uri: item }} source={require("../../../assets/artist.jpg")}   */}
            <Image source={require("../../../assets/artist2.jpg")} 
            style={{ borderRadius: 10, width: '100%', height: '100%', flex: 1 }} />
        </View>
    );

    renderItem2 = ({item, index}) => (
        <View style={styles.viewStyle2}>
            <Image source={require("../../../assets/artist2.jpg")} 
            style={{ borderRadius: 10, width: '100%', height: '100%', flex: 1, resizeMode: 'cover',  }} />

            <Text numberOfLines={1} style={{ color: "#FFF", textAlign: "center", fontSize: 13, fontFamily: "helvetica" }}>
                Beautiful Imperfection
            </Text>            
        </View>
    );

  render() {
   const { carousel, container, tile } = styles;
   const viewTop20 = () => Actions.search({ searchText:"Mada Top 20" });
   const viewNewReleases = () => Actions.search({ searchText:"New Releases" });
   const viewThrowback = () => Actions.search({ searchText:"#Throwback" });
   const viewTop7 = () => Actions.search({ searchText:"Our top 7" });
    return (
      <SideDrawer>
        <Container style={{ backgroundColor: "#000", paddingTop: 30 }}>
            <View style={{ marginTop: 20, alignSelf: "center", }}> 
            {/*  fontFamily: "Bunya", */}
                <Text style={{ color: "#d32f2f", fontSize: 27, }}>
                    Explore
                </Text>
            </View>
            <Content>
                <View style={{ marginTop: 10, marginBottom: 10, alignSelf: "center", }}>
                    <Text style={{ color: "#FFF", fontWeight: 'bold', fontSize: 20, fontFamily: "helvetica" }}>
                        Recommended Songs
                    </Text>
                </View>
                <Carousel
                    inactiveSlideOpacity={0.6}
                    inactiveSlideScale={0.65}
                    firstItem={1}
                    sliderWidth={width}
                    itemWidth={width / 3}
                    data={this.state.images}
                    renderItem={this.renderItem}
                    hasParallaxImages={true}
                    loop={true}
                    // loopClonesPerSlide={2}
                />
                <Text onPress={viewTop20} style={{ marginTop: 20, marginLeft: 20, color: "#FFF", fontSize: 12, fontWeight: 'bold', fontFamily: "helvetica" }}>
                    MADA TOP 20
                </Text>
                <Carousel
                    inactiveSlideOpacity={0.6}
                    inactiveSlideScale={0.65}
                    firstItem={2}
                    sliderWidth={width}
                    itemWidth={width / 4}
                    data={this.state.images}
                    renderItem={this.renderItem2}
                    containerCustomStyle={{ flexGrow: 0 }}
                    itemHeight={50}
                />
                <View style={{ width: "95%", height: 40, margin: 20, }}>
                    <Grid>
                      <Col style={{ flexDirection: "column"}}>
                        <Text onPress={viewNewReleases} style={{ fontFamily: "helvetica", marginBottom: 10, color: "#FFF", }}>New Releases</Text>
                        <Text onPress={viewThrowback} style={{ fontFamily: "helvetica", color: "#FFF", }}>#Throwback</Text>
                      </Col>
                      <Col style={{ flexDirection: "column", alignItems: "flex-end", marginRight: 20, }}>
                        <Text style={{ fontFamily: "helvetica", color: "#FFF", marginBottom: 10, }}>Madabox </Text>
                        <Text onPress={viewTop7} style={{ fontFamily: "helvetica", color: "#FFF", }}>Our top 7</Text>
                      </Col>
                    </Grid>
                  </View>
                <View style={{ flex: 1, alignSelf: "center" }}>
                    <Button bordered rounded danger style={{ alignSelf: "center", marginTop: 20, paddingTop: 2, paddingBottom: 2 }}>
                        <Text style={{ color: "#fff", fontFamily: "helvetica" }}>
                            SHUFFLE PLAY MODE
                        </Text>
                    </Button>                    
                </View>
            </Content>          
        </Container>
      </SideDrawer>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        // height: 100,
        // width: width / 3,
    },
    carousel: {
        flex: 1,
    },
    tile: {
        flex: 1,
        backgroundColor: '#000',
        borderRadius: 5,
        // width: width / 3,
        // height: height / 3,
    },
    viewStyle: {
        // borderColor: "red",
        // borderWidth: 1,
        width: width / 3,
        height: 160, 
        padding: 0,
        paddingHorizontal: 0,
        margin: 0,
        // height: height / 3,       
    },
    viewStyle2: {
        // borderColor: "red",
        // borderWidth: 1,
        width: width / 4,
        height: 90, 
        padding: 0,
        paddingHorizontal: 0,
        margin: 0,     
    }
});

