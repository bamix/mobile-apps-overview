import React from 'react';
import {WebView} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Test',
  };

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: "https://chill-dedication.glitch.me/" }}
      />
    );
  }
}
