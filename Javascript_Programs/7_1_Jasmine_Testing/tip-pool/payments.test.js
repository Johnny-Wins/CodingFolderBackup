describe("submitPaymentInfo Test", function () {

    beforeEach(function() {
    });

    it("should reset bill amount and tip amount", function() {
        billAmtInput.value = 23;
        tipAmtInput.value = 2;

        submitPaymentInfo();

        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    });


    afterEach(function() {
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }

        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';

        allPayments = {};
    });
});

describe("test for the submitPaymentInfo function, which adds a payment to the list of payments", function () {

    beforeEach(function() {
        billAmtInput.value = 20;
        tipAmtInput.value = 2;
    });

    it("should add an item to the list of payments when run once", function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1)
    });

    it("should add two items to the list of payments when run twice", function() {
        submitPaymentInfo();

        billAmtInput.value = 20;
        tipAmtInput.value = 2;
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(2)
    });

    it("should clear the inputs for Bill Amouont and Tip amount", function() {
        submitPaymentInfo();

        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    });

    afterEach(function() {

        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};

        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }

        while (allPayments.length > 0) {
            allPayments = {};
        }

        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});

describe("tests for the createCurPayment function, which will verify that the inputted values for bill amount and tip amount", function () {
    it("will return undefined if the values given are both blank", function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        

        expect(createCurPayment()).toEqual(undefined)
    });

    it("will not return a meaningful value if billAmt is 0", function() {
        billAmtInput.value = 0;
        tipAmtInput.value = 50;

        expect(createCurPayment()).toEqual(undefined)
    });

    it("will return correct numbers given correct inputs", function() {
        billAmtInput.value = 12;
        tipAmtInput.value = 6;

        expect(createCurPayment()).toEqual({
            billAmt: '12',
            tipAmt: '6',
            tipPercent: 50
        })
    });

    afterEach(function() {
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = ''  ;

        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }
    });
});

describe("tests for the appendPaymentTable function, which creates a row based on verified user data and passes it to appendTd", function () {

    beforeEach(function() {
        
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }
    });

    it("should append an element to paymentTbody", function() {
        appendPaymentTable({
            billAmt: '12',
            tipAmt: '6',
            tipPercent: 50
        });

        expect(paymentTbody.hasChildNodes()).toEqual(true)
    });

    it("Should create an element with characteristics based on the function's input", function() {
        appendPaymentTable({
            billAmt: '12',
            tipAmt: '6',
            tipPercent: 50
        });

        expectedFirstColumn = paymentTbody.firstChild.firstChild;

        expect(expectedFirstColumn.innerText).toEqual("$12");
    });

    afterEach(function() {
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = ''  ;

        while (paymentTbody.hasChildNodes()) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }

        allPayments = {};
    });
});


describe("tests for the updateSummary function, which creates a table row element and passes it to appendTd, while adding its totals to an overall sum", function () {

    beforeEach(function() {
        allPayments = {
            payment1: {billAmt: '2343', tipAmt: '2', tipPercent: 0},
            payment2: {billAmt: '13', tipAmt: '1', tipPercent: 8},
            payment3: {billAmt: '234', tipAmt: '5', tipPercent: 2}
        };
    });

    it("should add the contents of sumPaymentTotal together and add them to the table", function() {
        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual("$2590");
        
        expect(summaryTds[1].innerHTML).toEqual("$8");

        expect(summaryTds[2].innerHTML).toEqual("3%");
    });

    afterEach(function() {
        allPayments = {};

        /*while (document.querySelectorAll('tbody')[1].hasChildNodes) {

            document.querySelector('#summaryTable').removeChild(document.querySelectorAll('tbody')[1].firstChild);
        
        }*/

        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});