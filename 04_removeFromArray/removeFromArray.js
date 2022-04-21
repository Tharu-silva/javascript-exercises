const removeFromArray = function() {
    let newArray = [];
    let args = Array.from(arguments);
    let main = args.shift();
    for (const argument of args) {
        if (!main.includes(argument)) {
             newArray.push()
        } else {
             continue;
        }
    }
    return main;
};

// Do not edit below this line
module.exports = removeFromArray;
