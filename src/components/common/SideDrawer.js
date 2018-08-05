import React, { Component } from "react";
import Drawer from 'react-native-drawer'
import  Sidebar  from "./Sidebar";

export default class SideDrawer extends Component {
  closeDrawer () {
    this.drawer.close();
  };
  openDrawer () {
    this.drawer.open();
  };
  render() {
    return (
      <Drawer
        // open={true}
        // type="displace"
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        openDrawerOffset={0.3} 
        onClose={() => this.closeDrawer()}
        onOpen={() => this.openDrawer()}
        panOpenMask={.25}
        relativeDrag={false}
        style={{ flex: 1 }}
      >
        {this.props.children}
       </Drawer>
    );
  }
}