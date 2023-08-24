const { averageHeightCandidate, passedCandidate } = require('../heightCalculateCandidate');
 
describe('height calculate', () => {
    test('average height candidate', () => {
        const listHeightCandidate = [192, 180, 193, 183];
        expect(averageHeightCandidate(listHeightCandidate)).toEqual(187);
    });
 
    /**
     * Integration Testing
     */
    test('candidate passed status', () => {
        const listHeightCandidate = [187, 192, 190, 195];
        expect(passedCandidate(listHeightCandidate, 'Angkasha')).toEqual(true);
    })
 
    test('candidate fail status', () => {
        const listHeightCandidate = [171, 166, 167, 170];
        expect(passedCandidate(listHeightCandidate, 'Renjana')).toEqual(false);
    })

    test('non-number values status', () => {
        const listHeightCandidate = [173, 'a', '192', 182];
        expect(() => averageHeightCandidate(listHeightCandidate)).toThrow();
    })
})
