const reverseString = function(string) {
    let revString = []
    for (let i = string.length - 1; i > -1; i--){
        revString.push(string[i])
    }
    return revString.join('')
};

// Do not edit below this line
module.exports = reverseString;
