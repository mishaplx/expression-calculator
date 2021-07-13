function expressionCalculator(expr) {
  if (checkBrackets(expr) !== 0) {
    throw "ExpressionError: Brackets must be paired";
  } else if (checkZiro(expr) == 0) {
    throw "TypeError: Division by zero.";
  } else {
    let result = new Function("return " + expr.replace(/\s/g, ""));
    return result();
  }
}
function checkBrackets(expr) {
  let arrExpr = expr.replace(/\s/g, "");
  let arrExprNew = arrExpr.split("");
  let res = 0;
  for (let i = 0; i < arrExprNew.length; i++) {
    const element = arrExprNew[i];
    if (element == "(") {
      res += 1;
    } else if (element == ")") {
      res -= 1;
    }
  }
  return res;
}
function checkZiro(expr) {
  let arrExpr = expr.replace(/\s/g, "");
  let arrExprNew = arrExpr.split("");
  for (let i = 0; i < arrExprNew.length; i++) {
    if (arrExprNew[i] == "/" && arrExprNew[i + 1] == 0) {
      return 0;
    }
  }
}

module.exports = {
  expressionCalculator,
};
