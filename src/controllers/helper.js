let helper = {
    storeBool: (value) => {
        if (value == 'true') {
            return true;
        } else {
            return false;
        };
    },

    numberOrNull: (value) => {
        if (value != null) {
            return parseInt(value);
        } else {
            return null;
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