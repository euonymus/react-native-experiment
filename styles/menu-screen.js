import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fff',
    },
    eachList: {
	backgroundColor: '#fbfbfb',
	paddingVertical: 20,
	paddingHorizontal: 15,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#ededed',
    },
    titleContainer: {
	paddingHorizontal: 15,
	paddingTop: 15,
	paddingBottom: 15,
	flexDirection: 'row',
    },
    titleIconContainer: {
	marginRight: 15,
	paddingTop: 2,
    },
    sectionHeaderContainer: {
	backgroundColor: '#fbfbfb',
	paddingVertical: 8,
	paddingHorizontal: 15,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#ededed',
    },
    sectionHeaderText: {
	fontSize: 14,
    },
    sectionContentContainer: {
	paddingTop: 8,
	paddingBottom: 12,
	paddingHorizontal: 15,
    },
    sectionContentText: {
	color: '#808080',
	fontSize: 14,
    },
    nameText: {
	fontWeight: '600',
	fontSize: 18,
    },
    slugText: {
	color: '#a39f9f',
	fontSize: 14,
	backgroundColor: 'transparent',
    },
    descriptionText: {
	fontSize: 14,
	marginTop: 6,
	color: '#4d4d4d',
    },
    colorContainer: {
	flexDirection: 'row',
	alignItems: 'center',
    },
    colorPreview: {
	width: 17,
	height: 17,
	borderRadius: 2,
	marginRight: 6,
	borderWidth: StyleSheet.hairlineWidth,
	borderColor: '#ccc',
    },
    colorTextContainer: {
	flex: 1,
    },
});
