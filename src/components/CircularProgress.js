import React from 'react';
import { View, StyleSheet } from 'react-native';

propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  };
}

renderThirdLayer = (percent) => {
  if (percent > 50) {
    return <View style={[styles.secondProgressLayer, propStyle((percent - 50), 45)]}></View>
  } else {
    return <View style={styles.offsetLayer}></View>
  }
}

/**
 * [Circular Progress displays the circular view of progress bar]
 * @param  {[number]} percent [must input the number ranging from 1 to 100 which declares the percentage of progress]
 * @return {[React.Component]}      [return Circular Progress View]
 */
const CircularProgress = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 6,
    borderRadius: 300,
    borderColor: '#315d6e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    width: '100%', height: '100%',
    borderWidth: 6,
    borderRadius: 300,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'white',
    borderTopColor: 'white',
    transform: [{ rotateZ: '-135deg' }]
  },
  secondProgressLayer: {
    width: '100%', height: '100%',
    position: 'absolute',
    borderWidth: 6,
    borderRadius: 300,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'white',
    borderTopColor: 'white',
    transform: [{ rotateZ: '45deg' }]
  },
  offsetLayer: {
    width: '100%', height: '100%',
    position: 'absolute',
    borderWidth: 6,
    borderRadius: 300,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#315d6e',
    borderTopColor: '#315d6e',
    transform: [{ rotateZ: '-135deg' }]
  }
});

export default CircularProgress;