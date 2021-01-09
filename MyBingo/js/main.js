'user strict'

{

  function createColum(col) {
    // const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 + col;
    }
  
    const b = [];
    for (let i = 0; i < 5; i++) {
      b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    console.log(b);
  }

  columns[0] = createColum(0); 
  columns[1] = createColum(1); 
  columns[2] = createColum(2); 
  columns[3] = createColum(3); 
  columns[4] = createColum(4); 

}
