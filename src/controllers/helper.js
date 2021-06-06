// <<<<<<< HEAD
// =======
let path = require('path');
let fs = require('fs');

let jsonPath = path.join(__dirname + '/..' + '/data' + '/');

let help = {
    lastId: (data) => {
        let last = 0;
        data.forEach(item => {
            if (last < item.id) {
                last = item.id;
            };
        });
        return last;
    },
        // lee array
        // devuelve numero + grande

    readJson: (jsonName) => {
        let jsonFile = fs.readFileSync(jsonPath + jsonName,'UTF-8');
        let data = JSON.parse(jsonFile);
        return data;
    },
    
    writeJson: (array,nombre) => {
        array = JSON.stringify(array, null, 4);
        fs.writeFileSync(jsonPath + nombre + '.json', array);
    },

    // llega req.params.id
    // devuelve número
};

module.exports = help
// >>>>>>> 123470de236c557678226bde1dd7ddd9f806acda
