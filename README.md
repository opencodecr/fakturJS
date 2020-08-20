# Faktur (Javascript)
Faktur for javascript is a package for accounting and billing purposes. Support for different uses will be added.

[![GitHub license](https://img.shields.io/github/license/opencodecr/fakturJS)](https://github.com/opencodecr/fakturJS/blob/master/LICENSE)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/opencodecr/fakturJS/Build%20on%20Push)
[![GitHub issues](https://img.shields.io/github/issues/opencodecr/fakturJS)](https://github.com/opencodecr/fakturJS/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/opencodecr/fakturJS)


## Installation
    npm install @opencodecr/faktur --save

## Use
Faktur have a series of methods that facilitate some basic operations when is necessary make some accounting calculations. For this moment the API is very basic, but we are working to make more robust and stable. 

The methods names are acronyms that representing the API functionality, in the documentations we details a little more this.

## Faktur API

**RVTF** (`rvtf`): **R**aw **v**alue **f**rom a **t**otal. Receive like params the percentage and the value total of the percentage applied. This method will break down the total value, will return the value without percentage applied and the percentage value applied:

```javascript
const Faktur = require('faktur');

let percentage = 13;
let value = 11718.83;

let rawValueFromTotal = Faktur.rvft(percentage, value);

console.log(rawValueFromTotal);
```

The `console.log(rawValueFromTotal)` send the follow result
```javascript
{
    baseValue: 10370.68, 
    percentageValue: 1348.19 
}
```


**PVC** (`pvc`): **P**ercentage **v**alue **c**alculation. Receive like params the percentage and a value. Will return the percentage value applied to value send as param:

```javascript
const Faktur = require('faktur');

let percentage = 13;
let value = 11718.83;

let percentageValueCalculation = Faktur.pvc(percentage, value);

console.log(percentageValueCalculation);
```

The `console.log(percentageValueCalculation)` send the follow result
```javascript
1523.45
```