const { baseName, mockName } = require('../../base.config');
import BaseAxios from '@/utils/http';

// 直接使用环境变量替换实现mock与真实接口的无缝切换
const APIList = async params => await BaseAxios.get(`${process.env.VUE_APP_MOCK ? mockName : baseName}/list/columns`, params);

const APINav = async params => await BaseAxios.get(`${baseName}/list/nav`, params);

const APISearch = async params => await BaseAxios.post(`${process.env.VUE_APP_MOCK ? mockName : baseName}/list/search`, params);

// 也可使用mock地址实现mock与真实接口的共存
const MockSearch = async params => await BaseAxios.post(`${process.env.VUE_APP_MOCK ? mockName : baseName}/list/search`, params);

export {
    APIList,
    APINav,
    APISearch,
    MockSearch,
}