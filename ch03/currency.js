/**
 * Created by Eunseok on 2015-10-28.
 */

var canadianDollar = 0.91;

var Currency = function(canadianDollar) {
    this.canadianDollar = canadianDollar;
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.canadianToUS = function(canadian) {
    return roundTwoDecimals(canadian * canadianDollar);
};

exports.UStoCanadian = function(us) {
    return roundTwoDecimals(us / canadianDollar);
};

