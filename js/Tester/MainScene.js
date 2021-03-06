'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAmbientLight,
  ViroCamera,
  ViroScene,
  Viro3DObject,
  ViroText,
  ViroSkyBox,
  ViroNode,
  ViroMaterials,
  ViroSphere,
  Viro360Image,
  ViroAnimations,
  ViroAnimatedComponent,
  ViroSurface,
} from 'react-viro';

var ml = 'moveLeft';
var mr = 'moveRight';
var f = 'freeze';
var initDelay = 'initDelay';
var exampleTree;
var exampleKey;
var animationsIndex = 0;
//var animationsArray = [ml, f, mr, f, ml, f, mr, f, ml, f, mr, f, ml, f, ml, f, ml];
var animationsArray = [initDelay, ml, f, mr];

var MainScene = React.createClass({
  getInitialState() {
    return {
       'currentAnimation': 'initDelay'
    //   , 'signColor' :  // TODO: switch sign color upon reaching end
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
       <ViroCamera position={[0, 0, 0]} active={true} focalPoint={[0, 0, -3]} />
       <ViroAmbientLight color="#aaaaaa"/>
       {this._buildTree()}
       <ViroSurface
        position={[-1, 0, -3]}
        height={0.5}
        width={0.5}
        materials={["surfaceMaterial"]} />
       <ViroAnimatedComponent animation={this.state.currentAnimation} run={true} onFinish={this._switchAnimation}>
        <ViroNode>
         <Viro3DObject
           source={require("./res/btns_3D/btn_sphere.obj")}
           materials='traverseSphere'
           highAccuracyGaze={true}
           position={[0, 0, -3]}
           scale={[0.07, 0.07, 0.07]}/>
        </ViroNode>
       </ViroAnimatedComponent>
     </ViroScene>
    );
  },
  _switchAnimation() {
  //  viroanimations.registeranimation(animation+animationIndex: )
    if(++animationsIndex >= animationsArray.length) { // show the result
      ViroMaterials.createMaterials({
        surfaceMaterial: {
          lightingModel: "Blinn",
          diffuseColor: "rgb(0,255,0)"
        }
      });
      return;
    }
  //  this.setState({'currentAnimation': animationsArray[animationsIndex]});
    var moveStr = animationsArray[animationsIndex];
    if(moveStr == 'moveLeft') {
      this.setState({'currentAnimation': 'moveLeft'})
    } else if(moveStr == 'moveRight') {
      this.setState({'currentAnimation': 'moveRight'})
    } else if (moveStr == 'freeze') { // temporary halt
      this.setState({'currentAnimation': 'freeze'})
    } else if(moveStr == 'initDelay') {
      this.setState({'currentAnimation': 'initDelay'})
    }
  },
  _buildTree() {
    return(<ViroNode position={[0,0,-3]}>
      <Viro3DObject
        source={require("./res/btns_3D/btn_sphere.obj")}
        highAccuracyGaze={true}
        position={[0, 0, 0]}
        scale={[0.05, 0.05, 0.05]}
        />
      <ViroText text="5" position={[0,0,0]} scale={[0.5, 0.5, 0.5]} style={styles.numberTextStyle} />
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
            scale={[0.05, 0.05, 0.05]}
            materials='blueSphere'
            />
          <ViroText text="3" position={[0,0,0]} scale={[0.5, 0.5, 0.5]} style={styles.numberTextStyle} />
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
/*
function generateAnimationArray() {
  animationsArray = {};
  var pathString = binarySearch(exampleTree, exampleKey);
  for(var i = 0; i < pathString.length; i++) {
    if(pathString[i] == "L") {
      animationsArray.push({});
    } else if(pathString[i] == "R") {
      animationsArray.push({});
    }
  }
}*/
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
  traverseSphere: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(255,0,0)"
  },
  blueSphere: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(0,0,255)"
  },
  greenSphere: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(0,255,0)"
  },
  blackSphere: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(0,0,0)"
  },
  whiteSphere: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(255,255,255)"
  },
  surfaceMaterial: {
    lightingModel: "Blinn",
    diffuseColor: "rgb(255,255,255)"
  }
});

var xShift = 1;
var yShift = 1;
var shiftDuration = 2200;
var freezeDuration = 100;

// the two movement actions the sphere can take down the binary tree
ViroAnimations.registerAnimations({
  moveRight:{properties:{positionX: "+="+xShift, positionY: "-="+yShift}, duration: shiftDuration},
  moveLeft:{properties:{positionX: "-="+xShift, positionY: "-="+yShift}, duration: shiftDuration},
  freeze:{properties:{positionX: "+=0"}, duration: freezeDuration},
  initDelay:{properties:{positionX: "+=0"}, duration: freezeDuration*16}
}); // need to generate this array on the fly


var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

module.exports = MainScene;
/*
function binarySearch(tree, key) {
  if(tree.left != null && key < tree.left.val) {
    return "L" + binarySearch(tree.left, key);
  } else if (tree.right != null && key > tree.right.val) {
    return "R" + binarySearch(tree.right, key);
  } else {
    return "";
  }
}*/

var styles = StyleSheet.create({
  numberTextStyle: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 40,
    color: '#000000',
  },
})
