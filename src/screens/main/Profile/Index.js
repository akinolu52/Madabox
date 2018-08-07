import React, {Component} from "react";
import {StyleSheet, ImageBackground} from "react-native";
import { Container, View, Text, Icon, Tabs, Tab, Button, Thumbnail } from "native-base";
import {Actions} from "react-native-router-flux";
import {Btn} from "../../../components/common";

import Following from "./tabs/Following";
import Playlist from "./tabs/Playlist";
import SideDrawer from "../../../components/common/SideDrawer";

class Index extends Component {
    render() {
        const {iconStyle, centerItems, logoStyle} = styles;
        return (
            <SideDrawer>
                <Container style={{backgroundColor: "#000"}}>
                    <View style={{height: "50%"}}>
                        <ImageBackground source={require("../../../assets/profile_bg.jpg")} style={{width: "100%", flex: 1, paddingTop: 30}}>
                            <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 10 }}>
                                <Icon type="Ionicons" name="md-arrow-back" size={28} style={{color: "#da0717"}} onPress={() => Actions.pop()} />

                                <View style={{justifyContent: "space-between", flexDirection: "row"}}>
                                    <Icon name="search" onPress={Actions.search} style={{color: "#d32f2f", marginRight: 20}}/>
                                    <Icon name="options-vertical" type="SimpleLineIcons" style={{color: "#d32f2f", fontSize: 20}}/>
                                </View>
                            </View>
                        
                            <View style={{ flex:1, justifyContent: "flex-end", alignItems: "center", padding: 5}}>
                                <View
                                    style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", 
                                    flexDirection: 'column', alignItems: "center" }}>
                                    <View style={{alignItems: "center" }}>
                                        <Text style={{color: "#fff", marginBottom: 20, fontWeight: "400", 
                                        fontSize: 20, fontFamily: "helvetica"}}>
                                            Adegoke
                                        </Text>
                                        <View style={{width: "50%", height: 40, marginBottom: 50, alignItems: 'center', margin: 'auto'}}>
                                            <Button rounded style={{paddingTop: 2, paddingBottom: 2, 
                                                borderWidth: 2, borderColor: "#da0717", alignItems: 'center', backgroundColor: 'transparent' }} >
                                                <Text note style={{fontSize: 13, fontFamily: "helvetica", color: '#fff'}}>
                                                    SHARE PLAYLIST
                                                </Text>
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                        {/* </View> */}
                    </View>
                    <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: "#da0717", backgroundColor: "#000" }}>
                        <Tab
                            heading="Playlist"
                            tabStyle={{backgroundColor: "#000"}}
                            textStyle={{color: "#fff", fontFamily: "helvetica"}}
                            activeTabStyle={{backgroundColor: "#000", borderColor: "#da0717"}}
                            activeTextStyle={{color: "#da0717", fontWeight: "normal"}}
                        >
                            <Playlist />
                        </Tab>
                        <Tab
                            heading="Following"
                            tabStyle={{backgroundColor: "#000"}}
                            textStyle={{color: "#fff", fontFamily: "helvetica"}}
                            activeTabStyle={{backgroundColor: "#000", borderColor: "#da0717"}}
                            activeTextStyle={{color: "#da0717", fontWeight: "normal"}}
                        >
                            <Following />
                        </Tab>
                    </Tabs>
                </Container>
            </SideDrawer>
        );
    }
}

const styles = StyleSheet.create({
    centerItems: {
        justifyContent: "center",
        alignItems: "center"
    },
    logoStyle: {
        width: 250,
        height: 80
    },
    iconStyle: {
        fontSize: 30,
        fontWeight: "600",
        color: "#FFF"
    }
});

export default Index;
