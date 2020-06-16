import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';

const FeedScreen = props => {
  return (
    <View>
      <Text>Feed Screen</Text>
    </View>
  );
};

FeedScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Feeds'
  };
};

const styles = StyleSheet.create({});

export default FeedScreen;
