// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    var result = new Object();
    var h = Math.floor(currency / 50);
    if (h > 0) {
        result.H = h;
    }
    var q = Math.floor(currency % 50 / 25);
    if (q > 0) {
        result.Q = q;
    }
    var d = Math.floor(currency % 25 / 10);
    if (d > 0) {
        result.D = d;
    }
    var n = Math.floor(currency % 25 % 10 / 5);
    if (n > 0) {
        result.N = n;
    }
    var p = currency % 5;
    if (p > 0) {
        result.P = p;
    }
    return result;
}
