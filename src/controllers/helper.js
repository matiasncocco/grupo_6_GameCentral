// <<<<<<< HEAD
// =======
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

    // HOW?? -> PARAM IS NOT DEFINED
    paramFinder: () => {
        param = req.params.id;
        return param;
    },
};

<<<<<<< HEAD
module.exports = help
// >>>>>>> 123470de236c557678226bde1dd7ddd9f806acda
=======
module.exports = helper;
>>>>>>> a89ab22cc00d30a57bdb5e71d2c562e2e4630f4c
