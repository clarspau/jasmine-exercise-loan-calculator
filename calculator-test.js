
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 3, rate: 2 };
  expect(calculateMonthlyPayment(values)).toEqual('286.43');
  const values1 = { amount: 15000, years: 8, rate: 3 };
  expect(calculateMonthlyPayment(values1)).toEqual('175.94');
});


it('should return a result with 2 decimal places', function() {
  const values = { amount: 10000, years: 3, rate: 2 };
  expect(calculateMonthlyPayment(values)).toEqual('286.43');
  const values1 = { amount: 15000, years: 8, rate: 3 };
  expect(calculateMonthlyPayment(values1)).toEqual('175.94');
});

it('should take minimum values and still work', function() {
  const values = { amount: 1, years: 1, rate: 1 };
  expect(calculateMonthlyPayment(values)).toEqual('0.08');
});


