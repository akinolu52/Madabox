import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Dimensions, Animated, PanResponder, ScrollResponderEvent,
    ScrollView, Slider, Image
} from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Player extends Component {
    componentDidMount() {
        this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 80 })
    }

    render() {
        const animatedHeight = {
            // transform: 40
            transform: this.animation.getTranslateTransform()
        }

        return (
            <Animated.View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Animated.View 
                style={[animatedHeight, { position: 'absolute', left: 0, right: 0, zIndex: 10,
                backgroundColor: 'orange', height: SCREEN_HEIGHT}]}>
                    <Animated.View style={{ height: 80, borderTopWidth: 1, borderTopColor: '#ebe5e5',
                    flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                            <Animated.View style={{ height: 32, width: 32, marginLeft: 10 }}>
                                <Image style={{ flex: 1, width: null, height: null}} 
                                    source={require('../../assets/icons/play.png')}/>
                                <Animated.Text style={{ opacity: 1, fontSize: 18, paddingLeft: 10 }}>
                                Olumide (Hip-hop)
                                </Animated.Text>
                            </Animated.View>
                        </View>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        )
    }
}

export default Player;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})