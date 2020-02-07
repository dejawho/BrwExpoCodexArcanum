/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import MainNavigation from './MainNavigation';

const store = configureStore();

class EntryPoint extends React.Component {

    state = {
        componentWidth: 0,
        componentHeight: 0,
    }

    mainContainerLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        if (this.state.componentWidth !== width || this.state.componentHeight !== height) {
            this.setState({ componentHeight: height, componentWidth: width });
        }
    }

    render(){
        const containerStyle = this.state.componentWidth > 1000 ? {alignItems: 'center'} : {}
        return (
            <Provider store={store}>
                <View style={[{flex: 1, backgroundColor: 'black'}, containerStyle]} onLayout={this.mainContainerLayout}>
                   {this.state.componentWidth > 1000 ? 
                    <View style={{flex: 1, width: 1000, backgroundColor: 'black'}}>
                    <MainNavigation/>
                    </View>
                    :
                    <MainNavigation/>
                   }
                </View>
        </Provider>
        );
    }
}

export default EntryPoint;
