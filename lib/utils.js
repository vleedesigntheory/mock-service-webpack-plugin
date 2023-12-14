const fs = require("fs");
const path = require("path");

const METHODS_MAP = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
};

const createRoutes = (router, p) => {
  const stats = fs.statSync(p);

  const handleResult = (router, result) => {
    const { path, methods, data } = result;
    if (!methods)
      console.error(
        `Methods did not exist. Please make sure your method is one of ${Object.keys(
          METHODS_MAP
        ).join(" ")}`
      );

    if (!data)
      console.error(
        `Data did not exists. Please make sure your data is correct`
      );

    router[METHODS_MAP[`${methods}`]](path, (req, res) => {
      res.json(data);
    });
  };

  if (stats.isDirectory()) {
    fs.readdirSync(p).forEach((item) => {
      createRoutes(router, `${p}/${item}`);
    });
  } else if (stats.isFile()) {
    const results = require(`${p}`);
    if (Object.prototype.toString.call(results) === "[object Object]") {
        handleResult(router, results)
    } else if (Object.prototype.toString.call(results) === "[object Array]") {
        results.forEach(result => {
            handleResult(router, result)
        })
    } else {
        throw new Error(`Mock File Content Error...`)
    }
  }
};

module.exports = {
  createRoutes,
};
