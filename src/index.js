const FakturErr = require('./helpers/Error');

class Faktur {

    /**
     *  Return [P]ercentage [V]alue [F]rom [T]otal
     *  @param percentage value
     * @throws if any value is invalid
     */
    static pvft(porcentage, value, round = 2) {
        if (!porcentage || !value) throw new FakturErr("The porcentage and value are required");

        let base = value - (value * porcentage);
        let subTotal = 0;
        let correctionFactor = 0.1;

        while(subTotal != value) {
            subTotal = (base * porcentage) + base;
            if (subTotal >= value) 
                return {
                    baseValue: parseFloat(base.toFixed(round)),
                    percentageValue: parseFloat((base * porcentage).toFixed(round))
                }
            
            base = base + correctionFactor;
        }
    }

}

module.exports = Faktur