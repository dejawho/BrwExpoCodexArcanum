/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, SafeAreaView, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import RoomEntry from './RoomEntry';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { AndroidBackHandler } from 'react-navigation-backhandler';

class RoomContent extends Component {

    onBack = () => {
        this.props.navigation.navigate('RoomsEffects');
        return true;
    }

    render() {
        return (
            <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
                <AndroidBackHandler onBackPress={this.onBack}>
                    <View style={{ flex: 1 }}>
                        <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
                            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.onBack()}>
                                <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
                            </TouchableWithoutFeedback>
                        </SafeAreaView>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <View style={{ backgroundColor: 'lightgray' }}>
                                <RoomEntry room={this.props.roomInfo} />
                            </View>
                        </View>
                    </View>
                </AndroidBackHandler>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomInfo: state.mainReducer.roomInfo,
    };
};

export default withNavigation(connect(mapStateToProps)(RoomContent));
