import React, { useEffect } from 'react' ;
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; 

import HeaderButton from '../../components/UI/HeaderButton'; 
import UserItem from '../../components/users/UserItem';
import { useSelector, useDispatch } from 'react-redux';

import * as usersActions from '../../store/actions/users'

const UserListScreen = props => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.loadUsers())
    }, [dispatch]);

    console.log("users=" + users)
    return (
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <UserItem
                    image={itemData.item.imageUrl}
                    name={itemData.item.name}
                    department={itemData.item.department}
                    onSelect={() => {
                        props.navigation.navigate('UserDetail', {
                            userId: itemData.item.id
                        });
                    }}
                />
            )}
        />
    )
}

UserListScreen.navigationOptions = navData => {
    return {
        headerTitle: "All Users", 
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Add User"
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                  navData.navigation.navigate('UserDetail');
                }}
              />
            </HeaderButtons>
          )
    }
}

export default UserListScreen; 