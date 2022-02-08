/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @author Venkata Chaithanya
 */

import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, Text,
  TouchableOpacity, View
} from 'react-native';
import CircularWidget from './src/components/CircularWidget';
import PyramidWidget from './src/components/PyramidWidget';
import Styles from './Styles';

const App = () => {
  const [widgetType, setWidgetType] = useState('circular');
  return (
    <SafeAreaView style={[Styles.fullFlex, Styles.themeBackground]}>
      <StatusBar backgroundColor={Styles.themeBackground} />
      <View style={[Styles.fullFlex, Styles.themeBackground, Styles.padding15]} >
        <View style={Styles.homeStoryContainer} >
          <StoryBar isActive={true} />
          <StoryBar />
          <StoryBar />
          <StoryBar />
          <StoryBar />
        </View>
        <View style={Styles.flexRowDirection} >
          <Text style={Styles.homeHeader} >RESCUE SESSION: ANGER &amp; FRUSTRATION</Text>
          <Text style={Styles.homeHeaderClose} >&times;</Text>
        </View>
        <Text style={Styles.homeSubHeader} >Pick the level your anger &amp; frustration right now</Text>
        <View style={Styles.homeWidgetContainer} >
          {widgetType == 'circular' ? <CircularWidget onValueChange={value => console.log('Circular Value', value)} /> : <PyramidWidget onValueChange={value => console.log('Pyramid Value', value)} />}
        </View>
        <View style={[Styles.flexRowDirection, Styles.marginBottom20]} >
          <ToggleButton isActive={widgetType == 'circular'} title="Circular" onPress={() => { setWidgetType('circular') }} />
          <View style={{ width: 20 }} />
          <ToggleButton isActive={widgetType == 'pyramid'} title="Pyramid" onPress={() => { setWidgetType('pyramid') }} />
        </View>
        <TouchableOpacity style={Styles.homeButtonContainer} >
          <Text style={Styles.homeButtonText} >Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/**
 * [ToggleButton displays the button to toggle]
 * @param  {[boolean]} isActive [isActive takes the input true or false to highlight the view]
 * @param  {[String]} title [title is used for button text]
 * @param  {[function]} onPress [callabacks when the button is clicked]
 * @return {[React.Component]}      [return ToggleButton View]
 */
const ToggleButton = ({ isActive, title, onPress = () => { } }) => {
  return <TouchableOpacity onPress={onPress} style={[Styles.toggleButtonStyle, isActive ? Styles.whiteBackground : Styles.transparentBackground]} >
    <Text style={[Styles.toggleButtonTextStyle, isActive ? Styles.colorBlack : Styles.colorWhite]} >{title}</Text>
  </TouchableOpacity>
}

/**
 * [StoryBar displays the story view indicator]
 * @param  {[boolean]} isActive [isActive takes the input true or false to highlight the view]
 * @return {[React.Component]}      [return Story view indicator]
 */
const StoryBar = ({ isActive }) => {
  return <View style={[Styles.storyBarStyle, isActive ? Styles.whiteBackground : Styles.semiWhiteBackground]} />
}

export default App;
