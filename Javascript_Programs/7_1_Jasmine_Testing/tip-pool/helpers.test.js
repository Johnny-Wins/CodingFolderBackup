describe("tests for the sumPaymentTotal function, which accepts a type as input and then ouputs that type of data's sum total from the allPayments table", function () {

    beforeEach(function() {
        allPayments = {
            payment1: {billAmt: '2343', tipAmt: '2', tipPercent: 0},
            payment2: {billAmt: '13', tipAmt: '1', tipPercent: 8},
            payment3: {billAmt: '234', tipAmt: '5', tipPercent: 2}
        };
    });

    it("can return a summed tipAmt value", function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(8);
    });

    it("can return a summed billAmt value", function() {
        expect(sumPaymentTotal('billAmt')).toEqual(2590);
    });

    it("can return a summed tipPercent value", function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(10);
    });

    afterEach(function() {
        allPayments = {};

        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }
    });
});

describe("tests for the appendTd, which, given a table row and a value, will create a new td element, put the value into it, and append the td element onto the tr element.", function () {

    beforeEach(function() {
        
    });

    it("should create a td element, given a row and a value", function() {
        testTr = document.createElement('tr');
        
        appendTd(testTr, "$1000")
        appendTd(testTr, "$1000")
        appendTd(testTr, "100%")

        paymentTbody.append(testTr);

        expect(testTr.firstChild.innerText).toEqual("$1000");
    });

    afterEach(function() {
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }
    });
});

describe("tests for the appendDeleteBtn, which adds a button to row which deletes the row when pressed", function () {

    beforeEach(function() {
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }

        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        let allPayments = {};
        let paymentId = 0;

        submitPaymentInfo();
    });

    it("should create a tD element with innerText 'X', and append it onto the tr it was given", function() {
        appendDeleteBtn(paymentTbody.firstChild);

        console.log(paymentTbody.firstChild.children[3].innerText);

        expect(paymentTbody.firstChild.children[3].innerText).toEqual("X");
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;

        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }

        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});