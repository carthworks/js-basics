const arr = ["js", "virtusa", "react", "typescript"];

const longest = arr.reduce((a, b) =>
  a.length < b.length ? a : b
);
console.log(longest);