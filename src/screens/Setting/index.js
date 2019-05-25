import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen</Text>
      </View>
    );
  }
}
