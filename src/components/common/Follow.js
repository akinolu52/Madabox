import React, { Component } from "react";
import { Text, Button } from "native-base";

export default class Follow extends Component {
    constructor() {
      super();
      this.state = {
          isFollow: true,
      };
      this.toggleFollow = this.toggleFollow.bind(this);
    }
    toggleFollow () {
        this.setState({
            isFollow: !this.state.isFollow
        })
    }

    render() {
        return (
            <Button bordered rounded danger onPress={ this.toggleFollow } style={{ alignSelf: "center", marginTop: 20, paddingTop: 2, paddingBottom: 2 }}>
                <Text style={{ color: "#fff", fontFamily: "helvetica" }}>
                    { this.state.isFollow ? 'FOLLOW' : 'UNFOLLOW' }
                </Text>
            </Button>
        );
    }
};

export { Follow };
