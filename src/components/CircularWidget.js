import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import Styles from '../../Styles';
import CircularProgress from './CircularProgress';

const circleBackgroundColor = '#b7eef4';

/**
 * [CircularWidget displays the circular selection view for range]
 * @param  {[function]} onValueChange [returns the selected value ranging from 1 to 10]
 * @return {[React.Component]}      [return Circular Widget View]
 */
const CircularWidget = ({ onValueChange = () => { } }) => {
    const [sliderValue, setSliderValue] = useState(1)
    return <View style={Styles.fullFlex} >
        <View style={Styles.fullFlex} >
            <View style={StyleProps.circularContainer} >
                <View style={StyleProps.circularWrapper} >
                    <View style={StyleProps.circleCenterContainer} >
                        <View style={StyleProps.circleCenterImageContainer} >
                            <Image source={require('../assets/shape.png')} style={StyleProps.circleCenterImageStyle} />
                        </View>
                        <View style={StyleProps.circleCenterImageContainer} >
                            <Image source={require('../assets/shape.png')} style={[StyleProps.circleCenterImageStyle, StyleProps.transform180]} />
                        </View>
                    </View>
                    <Text style={StyleProps.circleCenterTextStyle} >{sliderValue}</Text>
                </View>
                <View style={StyleProps.circleProgressContainer} >
                    <CircularProgress percent={sliderValue * 10} />
                </View>
            </View>
        </View>
        <Slider
            onValueChange={value => { if (value != sliderValue) { setSliderValue(value); onValueChange(value); } }}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#6edbe6"
            thumbStyle={StyleProps.sliderThumbStyle}
            trackStyle={StyleProps.sliderTrackStyle} />
    </View>
}

const StyleProps = StyleSheet.create({
    circularContainer: { borderWidth: 4, borderColor: 'rgba(255, 255, 255, 0.6)', borderStyle: 'dashed', borderRadius: 300, aspectRatio: 1, padding: 20 },
    circularWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 300, backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: 10, padding: 30 },
    circleCenterContainer: { position: 'absolute', top: 40, right: 40, left: 40, bottom: 40, backgroundColor: circleBackgroundColor, borderRadius: 300 },
    circleCenterImageContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 300, overflow: 'hidden' },
    circleCenterImageStyle: { flex: 1, tintColor: '#6edbe6', opacity: 0.4 },
    transform180: { transform: [{ rotateZ: '180deg' }] },
    circleCenterTextStyle: { color: 'white', fontWeight: 'bold', fontSize: 50 },
    circleProgressContainer: { position: 'absolute', top: 18, right: 18, left: 18, bottom: 18 },
    sliderThumbStyle: { width: 30, height: 30, borderRadius: 40, borderWidth: 6, borderColor: 'white', backgroundColor: '#6edbe6' },
    sliderTrackStyle: { height: 15, borderRadius: 10, backgroundColor: 'white' }
})

export default CircularWidget;