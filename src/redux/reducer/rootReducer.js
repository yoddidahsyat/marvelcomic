import { REGISTER } from '../type';


const rootReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER:
            const { username, email, gender, phoneNumber } = payload;
            return {
                ...state,
                isLogin: true,
                user: {
                    username,
                    email,
                    gender,
                    phoneNumber
                },
            };
        default:
            return state;
        }
}

export default rootReducer;