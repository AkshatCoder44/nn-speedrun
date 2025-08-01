function si(x) {
  return 1 / (1 + Math.exp(-x));
}

function sid(x) {
  let s = si(x);
  return s * (1 - s);
}

let w1 = Math.random();
let b1 = Math.random();

let w2 = Math.random();
let b2 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let bo = Math.random();

let input1 = 0.1;
let input2 = 0.9;
let target = 1;
let lr = 0.1;
let e = 1000000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input1 + b1;
  let h1 = si(z1);
  
  let z2 = w2 * input2 + b2;
  let h2 = si(z2);
  let zo = h1 * wo1 + h2 * wo2 + bo;
  let output = si(zo);
  let error = output - target;
  let dout = error * sid(zo);
  
  wo1 -= lr * dout * h1;
  wo2 -= lr * dout * h2;
  bo -= lr * dout;
  
  let dh1 = dout * wo1 * sid(z1);
  w1 -= lr * dh1 * input1;
  b1 -= lr * dh1;
  
  let dh2= dout * wo2 * sid(z2);
  w2 -= lr * dh2 * input2;
  b2 -= lr * dh2;
}

let h1_final = si(w1 * input1 + b1);
let h2_final = si(w2 * input2 + b2);
let finalOutput = si(wo1 * h1_final + wo2 * h2_final + bo);

console.log("Final Output:", finalOutput.toFixed(4));
