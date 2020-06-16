import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

import ImagePicker from '../../components/place/ImagePicker';
import Input  from '../../components/UI/Input';

const HomeDetailScreen = props => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const saveHandler = () => {
        console.log("Save Employee Info");
    }
       
    return (
        <View style={styles.screen}>
            <ScrollView>
            <ImagePicker />
                <View style={styles.personalContainer}>
                    <Input
                        id="name"
                        label="Name"
                        keyboardType="default"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setName(text); }}
                        initialValue=""
                    />
                    <Input
                        id="department"
                        label="Department"
                        keyboardType="default"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setDepartment(text); }}
                        initialValue=""
                    />
                    <Input
                        id="title"
                        label="Job Title"
                        keyboardType="default"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setJobTitle(text); }}
                        initialValue=""
                    />
                    <Input
                        id="phone"
                        label="Phone"
                        keyboardType="default"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setPhone(text); }}
                        initialValue=""
                    />
                    <Input
                        id="email"
                        label="Email"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setEmail(text); }}
                        initialValue=""
                    />
                    <Input
                        id="loginId"
                        label="Login ID"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setLoginId(text); }}
                        initialValue=""
                    />
                    <Input
                        id="password"
                        label="Login Password"
                        keyboardType="default"
                        secureTextEntry
                        required
                        email
                        autoCapitalize="none"
                        onInputChange={text => { setPassword(text); }}
                        initialValue=""
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'Save'}
                        color={Colors.primary}
                        onPress={() => {}}
                    />
                </View>
            </ScrollView>
            
        </View>
    );
  };

HomeDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home Detail Screen'
    };
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    personalContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    personalImage: {
        flex: 1
    },
    personalView: {
        flex: 1
    },  
    personalText:{
        fontSize: 25,
        fontFamily: 'open-sans-bold'
    },  
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: 10
    },
    view2: {
        width: '80%',
        height: '30%',
        backgroundColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10
    }, 
    view2: {
        width: '80%',
        height: '30%',
        backgroundColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10
    },
    buttonContainer: {
        marginTop: 10
      }
});

export default HomeDetailScreen;
