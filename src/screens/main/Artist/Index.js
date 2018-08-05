import React, { Component } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Content, List, ListItem, Thumbnail, Left, Text, Body, Icon, Right } from "native-base";
import SideDrawer from "../../../components/common/SideDrawer";
import Follow from "../../../components/common/Follow";
import AlphabetListView from 'react-native-alphabetlistview';

class SectionHeader extends Component {
    render() {
        // inline styles used for brevity, use a stylesheet when possible
        var textStyle = {
            textAlign: 'left',
            color: '#fff',
            fontWeight: '700',
            borderBottom: 2,
            borderColor: '#fff',
            fontSize: 16
        };
        // hello

        var viewStyle = {
            // color: '#F00'
            // textAlign: 'left'
        };
        return ( 
            <View style={viewStyle}>
                <Text style={textStyle}> 
                    {this.props.title} 
                </Text> 
            </View>
        );
    }
}
class SectionItem extends Component {
    render() {
        return ( 
            <Text style={{color: '#f00'}}> 
                {this.props.title}
            </Text>
        );
    }
}
class Cell extends Component {
    render() {
        return ( 
            <View style={{height: 30}}>
                <Text style={{color: '#fff'}}>
                    {this.props.item}
                </Text> 
            </View>
        );
    }
}
export default class Index extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {
                A: ['some', 'entries', 'are here'],
                B: ['some', 'entries', 'are here'],
                C: ['some', 'entries', 'are here'],
                D: ['some', 'entries', 'are here'],
                E: ['some', 'entries', 'are here'],
                F: ['some', 'entries', 'are here'],
                G: ['some', 'entries', 'are here'],
                H: ['some', 'entries', 'are here'],
                I: ['some', 'entries', 'are here'],
                J: ['some', 'entries', 'are here'],
                K: ['some', 'entries', 'are here'],
                L: ['some', 'entries', 'are here'],
                M: ['some', 'entries', 'are here'],
                N: ['some', 'entries', 'are here'],
                O: ['some', 'entries', 'are here'],
                P: ['some', 'entries', 'are here'],
                Q: ['some', 'entries', 'are here'],
                R: ['some', 'entries', 'are here'],
                S: ['some', 'entries', 'are here'],
                T: ['some', 'entries', 'are here'],
                U: ['some', 'entries', 'are here'],
                V: ['some', 'entries', 'are here'],
                W: ['some', 'entries', 'are here'],
                X: ['some', 'entries', 'are here'],
                Y: ['some', 'entries', 'are here'],
                Z: ['some', 'entries', 'are here'],
            }
        };
    }

    render() {
        let ArtistList = [];
        for (let i = 0; i < 10; i++) {
            ArtistList.push(
                // <View key={i} >
                <ListItem key={i}
                avatar style = {{borderColor: "#000"}}
                onPress = {Actions.show}>
                    <Left>
                    <Thumbnail size={80}
                        source = {
                        require("../../../assets/artist2.jpg")
                    }/> 
                    </Left> 
                    <Body style={{borderColor: "#000"}}>
                        <Text style={{color: "#fff", fontWeight: "bold", fontFamily: "helvetica", fontSize: 13}} onPress = { Actions.show}>
                            Asa 
                        </Text> 
                        <Text style={{ color: "#fff", fontFamily: "helvetica", fontSize: 11 }} onPress = { Actions.show}>
                            3 albums 45 tracks 
                        </Text> 
                    </Body> 
                    <Right style={{ borderColor: "#000" }}>
                    <Follow />
                    </Right> 
                </ListItem >
                // </View>
            );
        }
        return ( 
            <SideDrawer>
                <Container style={{ backgroundColor: "#000", borderColor: "#000", paddingTop: 30 }}>
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", padding: 10}}>
                        <Text style={{ color: "#d32f2f", fontSize: 20, fontFamily: "helvetica"}}> Artists </Text>
                        <Icon name = "search" onPress={ Actions.search } style = {{ color: "#d32f2f" }}/>
                    </View > 
                    <Content style={{ backgroundColor: "#000",borderColor: "#000" }} > 
                        { /* <List>{ArtistList}</List> */ } 
                        <AlphabetListView 
                            data={ this.state.data } 
                            cell={ Cell } 
                            cellHeight={ 30 }
                            sectionListItem={ SectionItem }
                            // sectionHeader={SectionHeader} 
                            sectionHeaderHeight={ 5 }
                        /> 
                    </Content>
                </Container> 
            </SideDrawer>
        );
    }
}