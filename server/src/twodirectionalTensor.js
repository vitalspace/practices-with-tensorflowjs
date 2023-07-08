import * as tf from "@tensorflow/tfjs";

// two-dimensional tensor
const tfa = tf.tensor([
  [2, 3],
  [2, 2],
]);

// or
const tfb = tf.tensor2d([
  [2, 3],
  [2, 2],
]);

// To see the content of tensor in a "Pretty" way we can use:
tfa.print();
tfb.print();

// To see the structure of tensor we can use:
console.log(tfa);
console.log(tfb);
