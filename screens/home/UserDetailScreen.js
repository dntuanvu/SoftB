import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as usersAction from '../../store/actions/users';

import ImagePicker from '../../components/place/ImagePicker';

const UserDetailScreen = props => {
  const [nameValue, setNameValue] = useState('');
  const [departmentValue, setDepartmentValue] = useState('');
  const [jobTitleValue, setJobTitleValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loginIdValue, setLoginIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [selectedImage, setSelectedImage] = useState();

  const userId = props.navigation.getParam('userId');
  const selectedUser = useSelector(state =>
    state.users.users.find(user => user.id === userId)
  );

  useEffect(() => {
    if (selectedUser != null) {
      setSelectedImage(selectedUser.imageUrl);
      setNameValue(selectedUser.name);
      setDepartmentValue(selectedUser.department);
      setJobTitleValue(selectedUser.jobTitle);
      setPhoneValue(selectedUser.phone);
      setEmailValue(selectedUser.email);
      setLoginIdValue(selectedUser.loginId);
      setPasswordValue(selectedUser.password);
    }
    
  }, []);

  const dispatch = useDispatch();

  const saveUserHandler = () => {
    dispatch(usersAction.addUser(nameValue, departmentValue, jobTitleValue, phoneValue, emailValue, loginIdValue, passwordValue, selectedImage));
    props.navigation.goBack();
  };

  const imageTakenHandler = imagePath => {
      setSelectedImage(imagePath);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <ImagePicker onImageTaken={imageTakenHandler}/>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setNameValue(text)}}
          value={nameValue}
        />
        <Text style={styles.label}>Department</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setDepartmentValue(text)}}
          value={departmentValue}
        />
        <Text style={styles.label}>Job Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setJobTitleValue(text)}}
          value={jobTitleValue}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setPhoneValue(text)}}
          value={phoneValue}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setEmailValue(text)}}
          value={emailValue}
        />
        <Text style={styles.label}>Login ID</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setLoginIdValue(text)}}
          value={loginIdValue}
        />
        <Text style={styles.label}>Login Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {setPasswordValue(text)}}
          value={passwordValue}
        />
        <Button
          title="Save User"
          color={Colors.primary}
          onPress={saveUserHandler}
        />
      </View>
    </ScrollView>
  );
};

UserDetailScreen.navigationOptions = {
  headerTitle: 'Add User'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default UserDetailScreen;
