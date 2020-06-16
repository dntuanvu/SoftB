import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const NotificationScreen = props => {
  return (
    <View><Text>Notification Screen</Text></View>
  );
};

NotificationScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Notification Screen'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NotificationScreen;
