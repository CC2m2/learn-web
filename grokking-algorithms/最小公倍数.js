function getSCM(left, right) {
  let SCM = right;
  while(SCM <= left * right) {
    if (SCM % left === 0) return SCM
    SCM += right;
  }
}

//test
console.log(getSCM(8, 12)); //24