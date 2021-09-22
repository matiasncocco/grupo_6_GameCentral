let fs = require('fs');
let path = require('path');

let helper = {
    readJson (fileDotJson) {
        let dataPath = path.resolve(
            __dirname + '/..' + '/data'
        )
        let dataFile = fs.readFileSync(
            dataPath + '/' + fileDotJson,
            'UTF-8'
        );
        let data = JSON.parse(dataFile);
        return data;
    },

    addOne (n) {
        n++;
        return n;
    },

    giveNumber (s) {
        n = parseInt(s);
        return n;
    }
};

module.exports = helper;