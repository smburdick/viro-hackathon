'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

var HelloWorldScene = React.createClass({
  getInitialState() {
    return {
      text:"Hello World!",
    };
  },
  render: function() {
    return (
     <ViroScene>
       <Viro360Image source={require('./res/360_park.jpg')} />
       <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
       <ViroBox position={[0, -1, -2]} width={.5} height={.5} length={.5} scale={[1,1,1]} materials={["grid"]} onHover={this._onBoxHover}/>
     </ViroScene>
    );
  },

  _onBoxHover(isHovering) {
    let text = isHovering ? "Hello Box!" : "Hello World!";
    this.setState({
      text
    });
  },

});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldScene;
