import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useDispatch } from 'react-redux';

import AuthScreen from '../screens/user/AuthScreen';
import HomeScreen from '../screens/home/HomeScreen';
import FeedScreen from '../screens/feed/FeedScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import MoreScreen from '../screens/more/MoreScreen';
import HomeDetailScreen from '../screens/home/HomeDetailScreen';
import AddPlaceScreen from '../screens/places/AddPlaceScreen';

import UserListScreen from '../screens/home/UserListScreen'; 
import UserDetailScreen from '../screens/home/UserDetailScreen';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      UserList: {
        screen: UserListScreen
      },
      UserDetail: {
        screen: UserDetailScreen
      }
    },
    {
      defaultNavigationOptions: defaultStackNavOptions
    }
);

const FeedNavigator = createStackNavigator(
    {
      Feed: {
        screen: FeedScreen
      }
    },
    {
      defaultNavigationOptions: defaultStackNavOptions
    }
);

const NotificationNavigator = createStackNavigator(
    {
      Notification: {
        screen: NotificationScreen
      }
    },
    {
      defaultNavigationOptions: defaultStackNavOptions
    }
);

const MoreNavigator = createStackNavigator(
    {
      More: {
        screen: MoreScreen
      }
    },
    {
      defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{ fontFamily: 'open-sans-bold' }}>Home</Text>
          ) : (
            'Home'
          )
      }
    },
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="logo-rss" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{ fontFamily: 'open-sans-bold' }}>Feed</Text>
          ) : (
            'Feed'
          )
      }
    },
    Notification: {
        screen: NotificationNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-alert" size={25} color={tabInfo.tintColor} />;
          },
          tabBarColor: Colors.accentColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Notification</Text>
            ) : (
              'Notification'
            )
        }
    },
    More: {
        screen: MoreNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-more" size={25} color={tabInfo.tintColor} />;
          },
          tabBarColor: Colors.accentColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>More</Text>
            ) : (
              'More'
            )
        }
    }
};

const MainTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans'
          },
          activeTintColor: Colors.accentColor
        }
});

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: MainTabNavigator,
});

export default createAppContainer(MainNavigator);