const { baseName } = require('../../base.config');
import BaseAxios from '@/utils/http';

const APILogin = async params => await BaseAxios.post(`${baseName}/auth/login`, params);

export {
    APILogin,
}