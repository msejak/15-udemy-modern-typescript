"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electricityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};
const waterUserData = {
    readings: 3,
    units: 'm3',
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = (elData, wData, elRate, wRate) => {
    if (elData.mode === 'double' && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice = ([el, water], electricityUserData, waterUserData) => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€

    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;
    return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
