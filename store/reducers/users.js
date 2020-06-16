import { ADD_USER } from '../actions/users';
import { SET_USERS } from '../actions/users';
import User from '../../model/user';

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
        return {
            users: action.users.map(
                u => new User(
                    u.id.toString(), 
                    u.name, 
                    u.department, 
                    u.jobTitle, 
                    u.phone, 
                    u.email, 
                    u.loginId, 
                    u.password,
                    u.imageUri)
            )
        };
        case ADD_USER:
            const newUser = new User(
                action.userData.id,
                action.userData.name,
                action.userData.department,
                action.userData.jobTitle,
                action.userData.phone,
                action.userData.email,
                action.userData.loginId,
                action.userData.password,
                action.userData.image
            );

            return {
                users: state.users.concat(newUser)
            }

        default:
            return state;
    }
}