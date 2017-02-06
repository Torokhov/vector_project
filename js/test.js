describe("Vector", function() {
  it("Создание объекта Vector", function(){
    var vector = new Vector(1, 4);
    assert.equal(vector.x, 1);
    assert.equal(vector.y, 4);
  });
  
  it("Сложение векторов", function() {
    var vector = new Vector(1, 4);
    vector = vector.plus(new Vector(1, 1))
    assert.equal(vector.x, 2);
    assert.equal(vector.y, 5);
  });
});
