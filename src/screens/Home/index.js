import React from 'react';
import { View, Button, Alert, ActivityIndicator } from 'react-native';
import { DocumentPicker } from 'expo';
import { RNS3 } from 'react-native-aws3';
import mime from 'react-native-mime-types';

import styles from './styles';

const ACCESS_KEY_ID = 'your_access_key';
const SECRET_ACCESS_KEY = 'your_secret_key';
// const AWS_UR

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  toggleLoading = () => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    const file = {
      uri: result.uri,
      name: result.name,
      type: mime.lookup(result.uri)
    };
    const options = {
      keyPrefix: 'your_keyPrefix',
      bucket: 'your_bucket',
      region: 'your_region',
      accessKey: ACCESS_KEY_ID,
      secretKey: SECRET_ACCESS_KEY,
      successActionStatus: 201
    };

    if (result.type !== 'cancel') {
      this.toggleLoading();
      RNS3.put(file, options).then(response => {
        if (response.status === 201) {
          this.toggleLoading();
          Alert.alert('upload successfully');
        }
      });
    }
  };

  renderLoadingView = () => (
    <ActivityIndicator size="large" color="#000" style={styles.loading} />
  );

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          this.renderLoadingView()
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              title="Select File"
              onPress={this.pickDocument}
              style={styles.button}
            />
          </View>
        )}
      </View>
    );
  }
}

export default HomeScreen;
