import React, {Component} from "react";
import {StyleSheet, Image, Linking, ScrollView} from "react-native";
import { Container, View, Content, Footer, FooterTab, Button, Text, Icon, Grid, Col, } from "native-base";
import SideDrawer from "../../../components/common/SideDrawer";

class Index extends Component {
    render() {
        const {iconStyle, centerItems, logoStyle} = styles;
        return (
            <SideDrawer>
                <Container style={{backgroundColor: "#000", paddingTop: 30}}>
                    <Grid style={centerItems}>
                        <Col>
                            <Content padder>
                                <View style={{ padding: 10, marginBottom: 30, justifyContent: "center", alignItems: "center" }}>
                                    <Image source={require("../../../assets/logo_white.jpg")} style={logoStyle}/>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{color: "#FFF", fontFamily: "helvetica", flex: 1, width: '95%', textAlign: 'justify', alignItems: 'center',}}>
                                        Thank you for downloading Madabox and being a part of the community.
                                        Our community is one of Music lover and artists who we are in collaboration with in
                                        providing the best service in curating and distributing their music and connecting
                                        with you, our listener.{"\n"}{"\n"}

                                        What started as a simple idea in a University dorm room way back in 2013-
                                        The idea of having “an artist with all songs on one platform, well organized
                                        and easily accessible to everyone”- Grew from conception to execution.
                                        Today we are proud to present this idea- Madabox. {"\n"}{"\n"}

                                        This platform aims to improve the publishing and accessibility of Nigerian and
                                        African music. By this we give you music from every artist, from his/her debut
                                        track right up to his latest. Added to this, we have a few more features that’ll
                                        make Madabox worthwhile. {"\n"}{"\n"}

                                        One of the ethoses in developing this platform is ensuring there is always new
                                        unheard music available to you. With this we created the “Explore” Page and plan
                                        on doing more as we grow.{"\n"}{"\n"}

                                        We are growing every day and we want to thank you again for being a part of this
                                        growth. We are going to keep improving the app, developing more features and
                                        making the right moves to propel the “Culture”.{"\n"}{"\n"}

                                        Stay up to date on what we are up to: SOCIAL MEDIA HANDLES HERE
                                        {"\n"}{"\n"}
                                    </Text>
                                </View>
                                
                            </Content>
                            <Footer style={{ borderColor: "#000" }}>
                                <FooterTab style={{backgroundColor: "#000"}}>
                                    <Button
                                        onPress={() => {
                                            Linking.openURL("https://facebook.com");
                                        }}
                                    >
                                        <Icon type="FontAwesome" name="facebook" style={iconStyle}/>
                                    </Button>
                                    <Button
                                        onPress={() => {
                                            Linking.openURL("https://instagram.com/madabox_/");
                                        }}
                                    >
                                        <Icon type="FontAwesome" name="instagram" style={iconStyle}/>
                                    </Button>
                                    <Button
                                        onPress={() => {
                                            Linking.openURL("https://twitter.com/madabox_/");
                                        }}
                                    >
                                        <Icon name="logo-twitter" style={iconStyle}/>
                                    </Button>
                                </FooterTab>
                            </Footer>
                        </Col>
                    </Grid>
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
