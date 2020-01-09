import axios from 'axios';
import bcrypt from 'bcryptjs';
import { registerRoute, validateRoute } from '../constants/constants';

export const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    data["password"] = hash;
    return axios.post(registerRoute, data)
        .then(res => res.status);
};

export const UsernameValidation = data => (
    axios.post(validateRoute, data)
    .then(exist => exist.status)
);