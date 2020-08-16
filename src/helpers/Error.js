class FakturErr extends Error {

    constructor(msg = 'Unknown error') {
        super();

        /**
         * Error name
         * @type {string}
         */
        this.name = 'Faktur';

        /**
         * Error message
         * @type {string}
         */
        this.message = msg;
    }

}

module.exports = FakturErr;