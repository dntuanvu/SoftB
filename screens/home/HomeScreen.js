import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.personalContainer}>
                <TouchableOpacity style={styles.personalImage} onPress={() => {props.navigation.navigate("UserList")}}>
                    <Image style={styles.image} source={{uri: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} />
                </TouchableOpacity>
                <View style={styles.personalView}>
                    <Text style={styles.personalText}>HOME</Text>
                </View>
            </View>
            
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
        </View>
    );
  };

HomeScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Home'
    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    personalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    personalImage: {
        flex: 1
    },
    personalView: {
        flex: 1
    },  
    personalText:{
        fontSize: 25,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },  
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: 10
    },
    view2: {
        width: '90%',
        height: '30%',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10
    }, 
    view3: {
        width: '90%',
        height: '30%',
        backgroundColor: Colors.accent,
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10
    }
});

export default HomeScreen;
