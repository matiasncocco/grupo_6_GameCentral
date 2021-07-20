let path = require('path');
let fs = require('fs');

let jsonPath = path.join(__dirname + '/..' + '/data' + '/');

let helper = {
    lastId: (data) => {
        let last = 0;
        data.forEach(item => {
            if (last < item.id) {
                last = item.id;
            };
        });
        return last;
    },

    readJson: (jsonName) => {
        let jsonFile = fs.readFileSync(jsonPath + jsonName,'UTF-8');
        let data = JSON.parse(jsonFile);
        return data;
    },
    
    writeJson: (array,nombre) => {
        array = JSON.stringify(array, null, 4);
        fs.writeFileSync(jsonPath + nombre + '.json', array);
    },

    storeBool: (value) => {
        if (value == 'true') {
            return true;
        } else {
            return false;
        };
    },

    percentageFinder: (price,discount) => {
        let multiplier = (price * discount);
        let divider = (multiplier / 100);
        let result = (price - divider);
        let roundResult = Math.floor(result);
        return roundResult;
    },

    toUpper: (item) => {
        return item.toUpperCase();
    },

};

module.exports = helper;
