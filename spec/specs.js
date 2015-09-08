describe('factorial', function() {
  it("returns 1 if the input is 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("returns the product of the number times the next lowest positive", function() {
    expect(factorial(2)).to.equal(2);
  });
});
