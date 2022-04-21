const findTheOldest = function(people) {
    people.reduce(function(prevPerson, currentPerson) {
        prevAge = getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath)
        currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        if (prevPerson.age > currentPerson.age) {
            return prevPerson;
        } else {
            return currentPerson;
        }
    }, 0)
};  

const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
