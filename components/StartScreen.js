import React from 'react';
import { View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';

export default class StartScreen extends React.Component {
  state = {
    isFirstLaunch: false
  };
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isFirstLaunch2');
      if (!value) {
        this.props.navigation.navigate('Onboarding');
      } else {
        this.props.navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.viewOfStart}>
        <ActivityIndicator size="small" color="#28D190" animating={true} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewOfStart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
