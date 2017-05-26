function drawTree(rows) {
  var star;
  for (var i = 0; i <= rows; i++){
    var star = '';
    for (var j = 0; j < i; j++){
      star += '*';
      // star = star + '*';
    }
    console.log(star)
  }
}

//drawTree(16)

function drawStraightTree(rows) {
  var star = '';
  for (var i = 0; i <= rows; i++){
    star = '';
    // spacje
    for (var j = 0; j < rows - i; j++){
      star += ' ';
    }
    // gwiazdki
    for (var k = 0; k < 2 * i - 1; k++){
      star += '*';
    }
    console.log(star);
  }
}


drawStraightTree(13)
