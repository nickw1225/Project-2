//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = () => {
    let output = "";

    if (input % 3 === 0) {
        output += "Pling";
    }
    if (input % 5 === 0) {
        output +="Plang";
    }
    if (input % 7 === 0) {
        output += "Plong";
    }
    if (!(output)){
        output += input;
    }
    return output;
};
