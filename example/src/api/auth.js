const { baseName, mockName } = require('../../base.config');
import BaseAxios from '@/utils/http';

const APILogin = async params => await BaseAxios.post(`${process.env.VUE_APP_MOCK ? mockName : baseName}/auth/login`, params);

export {
    APILogin,
}