// import React, { Component } from "react";
// import {
//   TouchableOpacity,
//   Alert,
//   Text,
//   Image,
//   View,
//   StyleSheet
// } from "react-native";

// import TrackPlayer from "react-native-track-player";

// import playIcon from "./../assets/icons/play.png";
// import pauseIcon from "./../assets/icons/pause.png";
// import nextIcon from "./../assets/icons/next.png";
// import previousIcon from "./../assets/icons/previous.png";

// export default class MiniPlayer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   _previousPress = () => {
//     TrackPlayer.skipToPrevious();
//   };
//   _playPress = () => {
//     TrackPlayer.play();
//     console.log("Play One Track");
//   };
//   _pausePress = () => {
//     TrackPlayer.pause();
//     console.log("Pause Current Track");
//   };

//   _nextPress = () => {
//     TrackPlayer.skipToNext();
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this._previousPress}>
//           <Image source={previousIcon} style={styles.imgSize} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this._playPress}>
//           <Image source={playIcon} style={styles.imgSize} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this._pausePress}>
//           <Image source={pauseIcon} style={styles.imgSize} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this._nextPress}>
//           <Image source={nextIcon} style={styles.imgSize} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     elevation: 5,
//     marginBottom: 100
//   },
//   imgSize: {
//     width: 40,
//     height: 40,
//     marginRight: 20
//   }
// });
