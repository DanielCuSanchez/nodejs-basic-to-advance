//console.log(process.argv);

const [, , arv3] = process.argv;

console.log(arv3);

const [, base] = arv3.split("=");

console.log(base);
