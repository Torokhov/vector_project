describe("Vector", function() {
  it("Создание объекта Vector", function(){
    var vector = new Vector(1, 4);
    assert.equal(vector.x, 1);
    assert.equal(vector.y, 4);
  });
});
