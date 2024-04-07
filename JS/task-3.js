function checkForSpam(message) {
  const message0 = message.toUpperCase();
  const message1 = 'spam'.toUpperCase();
  const message2 = 'sale'.toUpperCase();
  const res1 = message0.includes(message1);
  const res2 = message0.includes(message2);
  if (res1 || res2) {
    return Boolean(true);
  } else {
    return Boolean(false);
  }
  //   return result;
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
