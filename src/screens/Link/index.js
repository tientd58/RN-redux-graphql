import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Link screen</Text>
      </View>
    );
  }
}
