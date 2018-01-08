var C = {};                    // C Object simplifies exporting the module
C.getChange = function () {    // enough to satisfy the test
    'use strict';
    return true;               // also passes JSLint
};
module.exports = C;            // export the module with a single method
totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
difference   =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p
C.getChange = function (totalPayable, cashPaid) {
    'use strict';
    return [50, 20, 20];    // just enough to pass :-)
};
totalPayable = 486           // £4.86
cashPaid     = 1000          // £10.00
difference   = 514           // £5.14
change       = [500,10,2,2]  // £5, 10p, 2p, 2p