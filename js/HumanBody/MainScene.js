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
        <ViroOrbitCamera position={[0, 0, -0]} active={true} focalPoint={[0, 0, -1]} />
        <ViroDirectionalLight direction={[0, 0, -1]} color="#ffffff" />

        <ViroAmbientLight color="#aaaaaa" />


       <ViroNode position={[0,0,-2]} width={.5} height={.5} length={.5} scale={[0.1,0.1,0.1]}>
        <Viro3DObject source={require('./res/sphere.obj')}
          materials={["sphere"]}
          />
        <Viro3DObject position={[0,0,-1]} width={.5} height={.5} length={.5} scale={[0.1,0.1,0.1]} source={require('./res/cylinder.obj')}
          materials={["sphere"]}
        />
        <Viro3DObject position={[0,0,-10]} width={.5} height={.5} length={.5} scale={[0.1,0.1,0.1]} source={require('./res/cylinder.obj')}
          materials={["sphere"]}
        />
       </ViroNode>
       <ViroText text="Sphere" position={[0.0, 0.0, -3]} style={styles.textStyle}
                 transformBehaviors={["billboardY"]}/>
     </ViroScene>
    );
  },
});

var materials = ViroMaterials.createMaterials({
   heart: {
     lightingModel: "Blinn",
     diffuseTexture: require('./res/Heart_D3.jpg'),
     specularTexture: require('./res/Heart_S2.jpg'),
     writesToDepthBuffer: true,
     readsFromDepthBuffer: true,
   },
   sphere: {
     lightingModel: "Blinn",
     writesToDepthBuffer: true,
     readsFromDepthBuffer: true,
   }
});
/*   <ViroNode position={[0, 0, -1]} >
      <Viro3DObject source={require('./res/heart.obj')}
                 materials={["heart"]}
                 />
 </ViroNode>*/
var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

module.exports = MainScene;
