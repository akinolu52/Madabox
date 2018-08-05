import React, { Component } from "react";
import { Container,Content, Card, CardItem, Text, Body } from "native-base";

export default class Bio extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#da3043" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <Card style={{ backgroundColor: "#000", borderColor: "#000" }}>
            <CardItem style={{ backgroundColor: "#000", borderColor: "#000" }}>
              <Body style={{ backgroundColor: "#000", borderColor: "#000" }}>
                <Text style={{ color: "#fff", fontFamily: "helvetica" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
