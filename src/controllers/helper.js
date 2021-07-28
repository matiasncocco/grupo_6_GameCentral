let helper = {
    storeBool: (value) => {
        if (value == 'true') {
            return true;
        } else {
            return false;
        };
    },

    stringOrNull: (value) => {
        if (value == '') {
            return null;
        } else {
            return value;
        }
    },

    addOne: (n) => {
        n++;
        return n;
    },

    giveNumber: (s) => {
        n = parseInt(s);
        return n;
    },

};

module.exports = helper;