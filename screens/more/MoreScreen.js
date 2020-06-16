import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const MoreScreen = props => {
  return (
    <View stype={styles.screen}>
        <Button style={styles.logoutBtn} title="Sign Out" onPress={() => {props.navigation.navigate('Auth')}} />
    </View>
  );
};

MoreScreen.navigationOptions = navData => {
  return {
    headerTitle: 'More Options'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutBtn: {
      flex:1,
    width: '100%',
    height: 40,
    padding: 20
  }
});

export default MoreScreen;
