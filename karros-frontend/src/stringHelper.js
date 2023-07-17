function validateRegexEmail(email) {
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function isEmpty(string) {
  return string === null || string.length === 0;
}

function getAmountFormat(amount) {
  const amountString = String(amount);
  var formattedAmount = amountString;
  if (amountString.length > 3) {
    formattedAmount =
      amountString.substring(0, amountString.length - 3) +
      "." +
      amountString.substring(amountString.length - 3);
  }
  return formattedAmount;
}

export { validateRegexEmail, isEmpty, getAmountFormat };
