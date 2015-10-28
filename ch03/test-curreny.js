/**
 * Created by Eunseok on 2015-10-28.
 */

var currency = require('./currency');

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars');
console.log(currency.UStoCanadian(30));

