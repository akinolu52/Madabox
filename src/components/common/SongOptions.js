import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import ModalDropdown from 'react-native-modal-dropdown';
import { Text } from "native-base";

const SongOptions = () => {
  const { dropdownStyle, dropdownTextStyle, dropdownTextHighlightStyle } =  styles;
  return (
    <ModalDropdown  
    dropdownStyle={ dropdownStyle }
    dropdownTextStyle={ dropdownTextStyle }
    dropdownTextHighlightStyle={ dropdownTextHighlightStyle }
    showsVerticalScrollIndicator={false}
    options={['Play next', 'Add to playlist', 'Go to artist profile', 'Go to album', 'Share']}>
        <Text note>
            <Icon name="options-vertical" size={20} color="#FFF" />
        </Text>
    </ModalDropdown>
  );
};

const styles = {
    dropdownStyle: {
        flex: 1,
        width: 140,
        height: 190
    },
    dropdownTextStyle: {
        borderBottomColor: "red",
        borderColor: "red",
    },
    dropdownTextHighlightStyle: {
        color: "#da0717",
        fontWeight: 'bold'
    }
};

export { SongOptions };
