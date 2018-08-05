import React, {Component} from "react";
import {View} from "react-native";
import {Actions} from "react-native-router-flux";
import SideDrawer from "../../../components/common/SideDrawer";
import {Container, Content, List, Fab, ListItem, Thumbnail, Text, Body, Icon} from "native-base";

export default class Index extends Component {
    render() {
        let SinglesList = [];
        for (let i = 0; i < 5; i++) {
            SinglesList.push(
                <View key={i}> 
                    <ListItem  style={{ borderColor: "#000", paddingTop: 5, paddingBottom: 0 }}>
                        <Thumbnail
                            square
                            size={80}
                            source={require("../../../assets/artist2.jpg")}
                        />
                        <Body>
                        <Text style={{color: "#fff", fontFamily: "helvetica"}}>New Single: Artist Name</Text>
                        <Text style={{color: "#fff", fontFamily: "helvetica"}}>Song Name</Text>
                        </Body>
                    </ListItem>
                    <ListItem  style={{ borderColor: "#000", paddingTop: 5, paddingBottom: 0 }}>
                        <Thumbnail
                            square
                            size={80}
                            source={require("../../../assets/artist2.jpg")}
                        />
                        <Body>
                        <Text style={{color: "#fff", fontFamily: "helvetica"}}>New Album: Artist Name</Text>
                        <Text style={{color: "#fff", fontFamily: "helvetica"}}>Album Name</Text>
                        </Body>
                    </ListItem>
                </View>
            );
        }
        return (
            <SideDrawer>
                <Container style={{backgroundColor: "#000", borderColor: "#000", paddingTop: 30}}>
                    <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row", padding: 10}}>
                        <Text style={{color: "#d32f2f", fontSize: 25, fontFamily: "helvetica"}}>Notifications</Text>

                        <Icon name="search" onPress={Actions.search} style={{color: "#d32f2f"}}/>
                    </View>
                    <Content style={{backgroundColor: "#000", borderColor: "#000"}}>
                        <List>{SinglesList}</List>
                    </Content>
                    <Fab direction="up" containerStyle={{}} style={{backgroundColor: "#d32f2f"}} position="bottomRight">
                        <Icon ios="ios-trash" android="md-trash" style={{fontSize: 25}}/>
                    </Fab>
                </Container>
            </SideDrawer>
        );
    }
}
