const repeatString = function(string, num) {
    if (num >= 0) {
        let strings = [] 
        for (let i = 0; i < num; i++) {
            strings.push(string)
        }
        return strings.join('')
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
