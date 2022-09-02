
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment(10,10,10)).toEqual('0.13')
  expect(calculateMonthlyPayment(100,5,2)).toEqual('1.75')
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment(234.1234,920.222,12.999)).toEqual('2.54')
});

/// etc
