const Faktur = require('../index');

test('Return base value and percentage value from total value', () => {
    expect(Faktur.rvft(13, 11718.83)).toStrictEqual({ baseValue: 10370.68, percentageValue: 1348.19 });
});


