const multiplier = {
    multiplyBy : 9,
    numbers : [6, 7, 8],
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());