import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Styles from '../../Styles';

const imagesUris = [require('../assets/5.png'), require('../assets/4.png'), require('../assets/3.png'), require('../assets/2.png'), require('../assets/1.png')];
const valueLabels = ["Very Low", "Low", "Medium", "High", "Very High"];

/**
 * [PyramidWidget displays the pyramid selection view for range]
 * @param  {[function]} onValueChange [returns the selected value ranging from 1 to 5]
 * @return {[React.Component]}      [return Pyramid Widget View]
 */
const PyramidWidget = ({ onValueChange = () => { } }) => {
    const [pyramidValue, setPyramidValue] = useState(1)
    return <View style={Styles.fullFlex} >
        <View style={Styles.alignItemsCenter} >
            <Text style={StyleProps.widgetLabel} >{valueLabels[pyramidValue - 1]}</Text>
            {imagesUris.map((element, index) => <TouchableOpacity onPress={() => { setPyramidValue(5 - index); onValueChange(5 - index); }} key={index} >
                <Image source={element} style={[StyleProps.pyramidStyle, (5 - index) <= pyramidValue ? StyleProps.whiteTint : StyleProps.semiWhiteTint]} />
            </TouchableOpacity>)}
        </View>
    </View>
}

const StyleProps = StyleSheet.create({
    widgetLabel: { marginBottom: 20, fontWeight: 'bold', color: 'white', fontSize: 20 },
    pyramidStyle: { marginBottom: 10 },
    whiteTint: { tintColor: 'white' },
    semiWhiteTint: { tintColor: 'rgba(255, 255, 255, 0.4)' }
})

export default PyramidWidget;