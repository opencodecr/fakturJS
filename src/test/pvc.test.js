const Faktur = require('../index');

test('Return calculation of percentage value', () => {
    expect(Faktur.pvc(13, 11718.83)).toEqual(1523.45);
});