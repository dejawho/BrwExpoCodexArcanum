/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AndroidBackHandler } from 'react-navigation-backhandler';


const REFERENCE_1 = require('../assets/magicstructure.png');

class Reference extends React.Component {

  state = {
    imageContainerWidth: 0,
    imageContainerHeight: 0,
  }

  onBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  imageContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (this.state.imageContainerWidth !== width || this.state.imageContainerHeight !== height) {
      this.setState({ imageContainerHeight: height, imageContainerWidth: width });
    }
  }

  render() {
    const imageData = {width: 998, height: 4048};
    const height = (this.state.imageContainerWidth * imageData.height) / imageData.width;
    return (
      <AndroidBackHandler onBackPress={this.onBack}>
        <View style={{ flex: 1, backgroundColor: 'black' }} onLayout={this.imageContainerLayout}>
          <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView>
                <View style={{width: this.state.imageContainerWidth, height: height}}><Image style={{ width: this.state.imageContainerWidth, height: height, resizeMode:'contain'}} source={REFERENCE_1}/></View>
              </ScrollView>
            </SafeAreaView>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default Reference;
