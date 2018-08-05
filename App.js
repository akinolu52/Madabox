import React, { Component } from "react";
import Router from "./src/Router";

// import TrackPlayer from "react-native-track-player";
// import TrackList from "./src/components/TrackList";
// import MiniPlayer from "./src/components/MiniPlayer";
// import getData from "./src/data";

export default class App extends Component {
  constructor(s) {
    super(s);
    this.state = {
      tracks: []
    };
  }
  
  componentDidMount() {
    // try {
    //   TrackPlayer.setupPlayer({
    //     maxCacheSize: 1024 * 10
    //   }).then(
    //     res => {
    //       console.log("Trackplayer setup successfully", res);
    //       TrackPlayer.updateOptions({
    //         capabilities: [
    //           TrackPlayer.CAPABILITY_PLAY,
    //           TrackPlayer.CAPABILITY_PAUSE,
    //           TrackPlayer.CAPABILITY_SEEK_TO,
    //           TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    //           TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
    //         ]
    //       });
    //     },
    //     err => {
    //       console.log("Error in setting up track player", err);
    //     }
    //   );
    // } catch (error) {
    //   console.log("error in setting up track player", error);
    // }

    // getData().then(
    //   res => {
    //     this.setState({ tracks: res });        
    //     TrackPlayer.add(this.state.tracks).then(
    //       res => {
    //         console.log("Success in adding tracks", res);
    //       },
    //       err => {
    //         console.log("Error in adding tracks", err);
    //       }
    //     );
    //   },
    //   err => {
    //     console.log("error in getting data");
    //   }
    // );
  }
  
  render() {
    return <Router />;
  }
}
