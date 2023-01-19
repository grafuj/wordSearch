const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    // console.log('l:', l);
    if (l.includes(word)) return true;
  }
  //vertical
  for (let row = 0; row < letters[0].length; row++) {
    let vertical = [];
    for (let column = 0; column < letters.length; column++) {
      vertical.push(letters[column][row]);
    }
    // console.log("vertical:", vertical);
    if (vertical.includes(word)) return true;
  }
  //backwards
  for (let row = 0; row < letters.length; row++) {
    let backwards = [];
    for (let column = letters[0].length - 1; column > -1; column--) {
      backwards.push(letters[row][column]);
    }
    //console.log("backwards:", backwards);
    if (backwards.includes(word)) return true;
  }
  //diagonal
  for (let row = 0; row < letters.length; row++) {
    let diagonal = [];
    for (let column = 0; column < letters[0].length; column++) {
      diagonal.push(letters[row][column]);
      row++;
    }
    console.log("diagonal:", diagonal);
    if (diagonal.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;
