function permutation(str: string, prefix: string = "") {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; ++i) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i));
    }
  }
}

permutation("ABC")
