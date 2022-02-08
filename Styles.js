import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    fullFlex: {
        flex: 1
    },
    themeBackground: {
        backgroundColor: '#315d6e'
    },
    padding15: {
        padding: 15
    },
    marginBottom20: {
        marginBottom: 20
    },
    homeStoryContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingVertical: 10,
        marginHorizontal: -5
    },
    flexRowDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    alignItemsCenter: { alignItems: 'center' },
    homeHeader: { color: 'white', fontWeight: '600', flex: 1 },
    homeHeaderClose: { fontSize: 30, color: 'white' },
    homeSubHeader: { color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 40, marginTop: 20 },
    homeWidgetContainer: { flex: 1, padding: 20, marginVertical: 20 },
    homeButtonContainer: { backgroundColor: 'white', alignItems: 'center', paddingVertical: 12, borderRadius: 40 },
    homeButtonText: { color: 'black', fontWeight: 'bold', fontSize: 16 },
    toggleButtonStyle: { flex: 1, borderWidth: 2, borderColor: 'white', alignItems: 'center', paddingVertical: 12, borderRadius: 40 },
    whiteBackground: { backgroundColor: 'white' },
    semiWhiteBackground: { backgroundColor: 'rgba(255, 255, 255, 0.6)' },
    transparentBackground: { backgroundColor: 'transparent' },
    toggleButtonTextStyle: { fontWeight: 'bold', fontSize: 16 },
    colorBlack: { color: 'black' },
    colorWhite: { color: 'white' },
    storyBarStyle: { height: 4, flex: 1, borderRadius: 4, marginHorizontal: 5 },
})

export default Styles;