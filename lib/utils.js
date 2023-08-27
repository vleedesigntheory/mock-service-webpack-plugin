const fs = require('fs');
const path = require('path');

const METHODS_MAP = {
    POST: 'post',
    GET: 'get',
    DELETE: 'delete',
    PUT: 'put'
}

const createRoutes = (router, p) => {
    const stats = fs.statSync(p);

    if(stats.isDirectory()) {
        fs.readdirSync(p).forEach(item => {
            createRoutes(router, `${p}/${item}`)
        })
    } else if(stats.isFile()) {
        const { path, methods, data } = require(`${p}`);
        if(!methods) console.error(
            `Methods did not exist. Please make sure your method is one of ${Object.keys(METHODS_MAP).join(' ')}`
        );

        if(!data) console.error(
            `Data did not exists. Please make sure your data is correct`
        );
        
        router[METHODS_MAP[`${methods}`]](path, (req, res) => {
            res.json(data)
        })
        
    }
}

module.exports = {
    createRoutes
}