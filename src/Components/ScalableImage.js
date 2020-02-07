/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

class ScalableImage extends React.Component {

    render() {
        let width;
        let height;
        if (this.props.height) {
            height = this.props.height;
            width = (this.props.originalWidth * height) / this.props.originalHeight;
        } else {
            width = this.props.width;
            height = (this.props.originalHeight * width) / this.props.originalWidth;
        }
        let component;
        if (this.props.onPress) {
            component = (<TouchableOpacity onPress={this.props.onPress}>
                <Image source={this.props.source} style={[{
                    width: width,
                    height: height
                }, this.props.style ? this.props.style : {}]} />
            </TouchableOpacity>);
        } else {
            component = (<Image source={this.props.source} style={[{
                width: width,
                height: height
            }, this.props.style ? this.props.style : {}]} />);
        }
        return (
            <>
            { component }
            </>
        );
    }
}

export default ScalableImage;
