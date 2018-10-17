import React from 'react';
import { SectionList, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';
import { Constants } from 'expo';
import { styles } from '../styles/menu-screen';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'home',
  };

  state = {
      selected: (new Map(): Map<string, boolean>)
  };

  render() {
    const { manifest } = Constants;
    const data = [
      { key:'1', data: [{ value: manifest.sdkVersion }], title: 'sdkVersion' },
      { key:'2', data: [{ value: manifest.privacy }], title: 'privacy' },
      { key:'3', data: [{ value: manifest.version }], title: 'version' },
      { key:'4', data: [{ value: manifest.orientation }], title: 'orientation' },
    ];

    return (
	<FlatList
          style={styles.container}
          renderItem={this._renderItem}
          data={data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={ListHeader}
        />
    );
  }

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => {

return (
    <MyListItem
      id={item.key}
      onPressItem={this._onPressItem}
      title={item.title}
      selected={!!this.state.selected.get(item.key)}
    />
  );
}

}

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
          // renderItem={({item}) => <Text>{item.key}</Text>}
    return (
      <TouchableOpacity style={styles.eachList} onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <AppIconPreview iconUrl={manifest.iconUrl} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {manifest.name}
        </Text>

        <Text style={styles.slugText} numberOfLines={1}>
          {manifest.slug}
        </Text>

        <Text style={styles.descriptionText}>
          {manifest.description}
        </Text>
      </View>
    </View>
  );
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl = 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  }

  return (
    <Image
      source={{ uri: iconUrl }}
      style={{ width: 64, height: 64 }}
      resizeMode="cover"
    />
  );
};

