// MEMO: react-native-arkit requires you to eject project from Expo, so I stopped experimenting
//       https://github.com/react-native-ar/react-native-arkit

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ARKit } from 'react-native-arkit'

export default class App extends Component<Props> {
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

  render() {
    return (
	<View />
    //   <View style={{ flex: 1 }}>
    //     <ARKit
    //       style={{ flex: 1 }}
    //       planeDetection={ARKit.ARPlaneDetection.Horizontal}
    //       lightEstimationEnabled
    //     >
    //       <ARKit.Group position={{ x: 0, y: 0, z: -0.5 }} scale={0.1}>
    //         <ARKit.Model
    //           model={{ file: 'art.scnassets/eames/model.dae' }}
    //           position={{ x: 0, y: -2.0, z: -3.0 }}
    //           eulerAngles={{ x: 0, y: Math.PI * 2.0, z: 0 }}
    //         />
    //         <ARKit.Box
    //           position={{ x: 0, y: 0.4, z: 0.0 }}
    //           material={{
    //             diffuse: { path: 'Brick.diffuse' },
    //           }}
    //           shape={{
    //             width: 0.3,
    //             length: 0.3,
    //             height: 0.3,
    //             chamfer: 0.02,
    //           }}
    //           transition={{ duration: 1 }}
    //         />
    //       </ARKit.Group>
    //       <ARKit.Light
    //         position={{ x: 1, y: 3, z: 2 }}
    //         type={ARKit.LightType.Omni}
    //         color="white"
    //       />
    //       <ARKit.Light
    //         position={{ x: 0, y: 5, z: 0 }}
    //         type={ARKit.LightType.Spot}
    //         eulerAngles={{ x: -Math.PI / 2 }}
    //         spotInnerAngle={45}
    //         spotOuterAngle={45}
    //         color="rgba(255, 240, 240, 1)"
    //       />
    //     </ARKit>
    //   </View>
    )
  }
}
