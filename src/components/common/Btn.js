import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Btn = ({ buttonText, onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 13,
    paddingRight: 13,
    textAlign: "center"
  },
  buttonStyle: {
    // justifyContent: 'center',
    // flex: 1,
    // alignSelf: 'stretch',
    // alignItems: 'center',
    width: "100%",
    // height: 30,
    /*marginBottom: 25,*/
    borderWidth: 3,
    borderRadius: 48,
    backgroundColor: "transparent",
    paddingTop: 3,
    paddingBottom: 3,
    // alignSelf: 'flex-start',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    borderColor: "#d9534f"
  }
};

export { Btn };
