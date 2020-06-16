import * as FileSystem from 'expo-file-system';

import { insertUser, fetchUsers } from '../../helper/db';

export const ADD_USER = "ADD_USER"
export const SET_USERS = 'SET_USERS';

export const addUser = (name, department, jobTitle, phone, email, loginId, password, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });
            const dbResult = await insertUser(
                name, department, jobTitle, phone, email, loginId, password, newPath
            );
            console.log(dbResult);
            dispatch({
                type: ADD_USER, 
                userData: { 
                    name: name,
                    department: department,
                    jobTitle: jobTitle,
                    phone: phone,
                    email: email,
                    loginId: loginId,
                    password: password,
                    image: image
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const loadUsers = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchUsers();
            console.log(dbResult);
            dispatch({
                type: SET_USERS, 
                users: dbResult.rows._array
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}