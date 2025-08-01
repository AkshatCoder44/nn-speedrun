function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function sigmoidD(x) {
  let s = sigmoid(x);
  return s * (1 - s);
}
//connections and declarations for calculus
let w1 = Math.random();
let w2 = Math.random();
let b1 = Math.random();

let w3 = Math.random();
let w4 = Math.random();
let b2 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let bo = Math.random();

let input1 = 0.1;
let input2 = 0.8;
let target = 1.0;
let lr = 0.1;
let e = 1000000;

for (let i = 0; i < e; i++) {
  let z1 = w1 * input1 + w2 * input2 + b1;
  let h1 = sigmoid(z1);

  let z2 = w3 * input1 + w4 * input2 + b2;
  let h2 = sigmoid(z2);

  let zo = h1 * wo1 + h2 * wo2 + bo;
  let output = sigmoid(zo);

  let error = output - target;
  let dout = error * sigmoidD(zo);

  wo1 -= lr * dout * h1;
  wo2 -= lr * dout * h2;
  bo  -= lr * dout;

  let dH1 = dout * wo1 * sigmoidD(z1);
  w1 -= lr * dH1 * input1;
  w2 -= lr * dH1 * input2;
  b1 -= lr * dH1;

  let dH2 = dout * wo2 * sigmoidD(z2);
  w3 -= lr * dH2 * input1;
  w4 -= lr * dH2 * input2;
  b2 -= lr * dH2;
}

let h1_final = sigmoid(w1 * input1 + w2 * input2 + b1);
let h2_final = sigmoid(w3 * input1 + w4 * input2 + b2);
let finalOutput = sigmoid(h1_final * wo1 + h2_final * wo2 + bo);

console.log("Final Output:", finalOutput.toFixed(4));
