import React from 'react';
import {WebView} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: "https://facebook.github.io/react-native/" }}
      />
    );
  }
}
