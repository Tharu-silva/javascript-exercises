const fibonacci = function(x) {
//Define two elements then add them together and make the prev element the result of that addition
    if (x < 0) {
        return "OOPS"
    }
    prev = 0
    next = 1
    for (let i = 0; i < (x-1); i++){
        next = prev + next;
        //Since we added next in the line above
        prev = next - prev;
    }
    return next
};

// Do not edit below this line
module.exports = fibonacci;
