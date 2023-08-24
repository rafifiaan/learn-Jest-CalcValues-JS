/*
    a simple test using a variety of conditions for a pool of police recruits' heights
*/
const averageHeightCandidate = (valuesHeight) => {
    const numberValidation = valuesHeight.every(height => typeof height === 'number');
    if (!numberValidation) throw Error('Please Input Height Values!');
 
    const sumValuesHeight = valuesHeight.reduce((accumulator,currentHeigt) => accumulator + currentHeigt, 0);
    return sumValuesHeight / valuesHeight.length;
};
 
const passedCandidate = (valuesHeight, candidateName) => {
    const minHeight = 175;
    const average = averageHeightCandidate(valuesHeight);
    
    if (average > minHeight) {
        console.log(`${candidateName} pass the criteria!`);
        return true;
    } else {
        console.log(`${candidateName} fail, try again next year!`);
        return false;
    }
};
 
module.exports = { averageHeightCandidate, passedCandidate };