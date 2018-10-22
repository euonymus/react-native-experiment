// MEMO: three works only on iOS on this source.
//       - expo-three seems not working.
//       - Once arSession is activated, render stops and nothing comes out.
//       - react-devtools-core seems to remain High Valnerabilities

import * as THREE from 'three'
import ExpoTHREE from 'expo-three'
import Expo from 'expo';

import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as OrbitControls from 'three-orbitcontrols';

// MEMO: According to this: http://bit.ly/2EAhzEv
console.disableYellowBox = true;

export default class ThreeSample extends Component {
    static navigationOptions = {
	tabBarLabel: 'Screen 1',
	drawerIcon: ({tintColor}) => {
	    return (
		<MaterialIcons
		name="card-membership"
		size={24}
		style={{color: tintColor}}
		>
		</MaterialIcons>
	    );
	}
    }

    _onGLContextCreate = async gl => {
	// const arSession = await this._glView.startARSessionAsync();
	const scene = new THREE.Scene();
	// const camera = ExpoTHREE.createARCamera(
	//     arSession,
	//     gl.drawingBufferWidth,
	//     gl.drawingBufferHeight,
	//     0.01,
	//     1000
	// );
	const camera = new THREE.PerspectiveCamera(
            75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

	const renderer = ExpoTHREE.createRenderer({ gl });
	renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
	// scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);

	const geometry = new THREE.BoxGeometry(0.07, 0.07, 0.07);
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);

	camera.position.z = 0.4;
	scene.add(cube);

	const animate = () => {
	    requestAnimationFrame(animate);
	    cube.rotation.x += 0.07;
	    cube.rotation.y += 0.04;

	    renderer.render(scene, camera);
	    gl.endFrameEXP();
	}
	animate();
    };

    render() {
	return (
      <Expo.GLView
        ref={(ref) => this._glView = ref}
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
        )
    }
}
