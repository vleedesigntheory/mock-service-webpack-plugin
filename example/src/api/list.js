const { baseName } = require('../../base.config');
import BaseAxios from '@/utils/http';

const APIList = async params => await BaseAxios.get(`${baseName}/list/columns`, params);

const APINav = async params => await BaseAxios.get(`${baseName}/list/nav`, params);

const APISearch = async params => await BaseAxios.post(`${baseName}/list/search`, params);

export {
    APIList,
    APINav,
    APISearch
}