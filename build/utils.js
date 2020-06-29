"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString.split('/'); // ['28', '10', '2018']
    var parsedDate = dateParts.map(function (val) {
        return parseInt(val, 10); // [28, 10, 2018]
    });
    // new Date(yyyy, m-1, d)
    return new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
};
