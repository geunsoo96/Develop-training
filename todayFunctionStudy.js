const styleSheet = {
  // 객체방식의 함수
  flexSet: function (element, justCon, aliItm) {
    element.style.display = "flex";
    element.style.justifyContent = justCon;
    element.style.alignItems = aliItm;
  },

  flexColumn: function (element, flxColumn, justCon, aliItm) {
    element.style.display = "flex";
    element.style.flexDirection = flxColumn;
    element.style.justifyContent = justCon;
    element.style.alignItems = aliItm;
  },

  colSet: function (element, backCol, col) {
    element.style.backgroundColor = backCol;
    element.style.color = col;
  },
};

let root = document.getElementById("root");

styleSheet.flexColumn(root, "column", "space-around", "center");
