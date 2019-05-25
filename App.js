import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import configureStore from './src/store';
import client from './src/apollo/client';
import ConnectedRootContainer from './Root';

const store = configureStore();

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // eslint-disable-next-line global-require
        require('./assets/images/robot-dev.png'),
        // eslint-disable-next-line global-require
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // eslint-disable-next-line global-require
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    // eslint-disable-next-line no-console
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRootContainer />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
