'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAmbientLight,
  ViroOrbitCamera,
  ViroScene,
  Viro3DObject,
  ViroText,
  ViroSkyBox,
  ViroNode,
  ViroMaterials,
  ViroSphere,
  Viro360Image,
} from 'react-viro';

var MainScene = React.createClass({
  getInitialState() {
    return {

    };
  },
  render: function() {
    return (
      <ViroScene style={styles.container}>
       <ViroSkyBox source={{nx:require('./res/grid_bg.jpg'),
                              px:require('./res/grid_bg.jpg'),
                              ny:require('./res/grid_bg.jpg'),
                              py:require('./res/grid_bg.jpg'),
                              nz:require('./res/grid_bg.jpg'),
                              pz:require('./res/grid_bg.jpg')}} />
       <ViroOrbitCamera position={[0, 0, 0]} active={true} focalPoint={[0, 0, -3]} />
       <ViroAmbientLight color="#aaaaaa"/>
       {this._buildTree()}
     </ViroScene>
    );
  },
  _buildTree() {
    return(<ViroNode position={[0,0,-3]}>
      <Viro3DObject
        source={require("./res/btns_3D/btn_sphere.obj")}
        highAccuracyGaze={true}
        position={[0, 0, 0]}
        scale={[0.05, 0.05, 0.05]}/>
      <Viro3DObject
        source={require("./res/btns_3D/btn_capsule.obj")}
        position={[-0.5, -0.5, 0]}
        scale={[0.1, 0.02, 0.02]}
        rotation={[0, 0, 45]}/>
      <Viro3DObject
        source={require("./res/btns_3D/btn_capsule.obj")}
        position={[0.5, -0.5, 0]}
        scale={[0.1, 0.02, 0.02]}
        rotation={[0, 0, -45]}/>
        <ViroNode position={[-1,-1,0]}>
          <Viro3DObject
            source={require("./res/btns_3D/btn_sphere.obj")}
            highAccuracyGaze={true}
            position={[0, 0, 0]}
            scale={[0.05, 0.05, 0.05]}/>
          <Viro3DObject
            source={require("./res/btns_3D/btn_capsule.obj")}
            position={[-0.5, -0.5, 0]}
            scale={[0.1, 0.02, 0.02]}
            rotation={[0, 0, 45]}/>
          <Viro3DObject
            source={require("./res/btns_3D/btn_capsule.obj")}
            position={[0.5, -0.5, 0]}
            scale={[0.1, 0.02, 0.02]}
            rotation={[0, 0, -45]}/>
        </ViroNode>
      </ViroNode>);
  },
});

function parseTree() {

}

/*
var tree = {
  val = 0,
  color = "blue",
  left = {

  },
  right = {

  }
}*/

ViroMaterials.createMaterials({
  sphere: {
    lightingModel: "Blinn",
  }
})

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

module.exports = MainScene;
