import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.PureComponent {
  render() {
    const { name, focused } = this.props;
    return (
      <Icon.Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? '#2f95dc' : '#ccc'}
      />
    );
  }
}
