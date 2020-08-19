# Faktur (Javascript)
Faktur for javascript is a package for accounting and billing purposes. Support for different uses will be added.

[![GitHub license](https://img.shields.io/github/license/opencodecr/fakturJS)](https://github.com/opencodecr/fakturJS/blob/master/LICENSE)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/opencodecr/fakturJS/Build%20on%20Push)
[![GitHub issues](https://img.shields.io/github/issues/opencodecr/fakturJS)](https://github.com/opencodecr/fakturJS/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/opencodecr/fakturJS)


## Installation
    npm install @opencodecr/faktur --save

## Use
Faktur have implemented a static method called rvft ([R]aw [V]alue [F]rom [T]otal). This method return the raw value without the percentage applied and the percentage value calculated of percentage.

```javascript
const Faktur = require('Faktur');

let percentage = 13;
let value = 11718.83;

let rawValueFromTotal = Faktur.rvft(percentage, value);

console.log(rawValueFromTotal);
```

The console.log() send the follow result
```javascript
{
    baseValue: 10370.68, 
    percentageValue: 1348.19 
}
```