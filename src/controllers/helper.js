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

    percentageFinder: (price,discountRate) => {
        let multiplier = price * discountRate;
        let divider = multiplier / 100;
        let roundResult = Math.floor(divider);
        return roundResult;
    },

    // HOW?? -> PARAM IS NOT DEFINED
    paramFinder: () => {
        param = req.params.id;
        return param;
    },
};

module.exports = helper;