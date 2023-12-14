module.exports = {
    title: `管理系统${process.env.VUE_APP_MOCK ? 'Mock' : ''}`,
    baseName: 'api',
    mockName: 'mock',
    proxyUrl: 'http://localhost:4000',
    mockUrl: 'http://localhost:9009'
}