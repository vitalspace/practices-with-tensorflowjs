import * as tf from "@tensorflow/tfjs";

// This example uses "matMul" to multiply 2 bidirectional tensors
const tfa = tf.tensor2d([
  [1, 2, -3],
  [4, 0, -2],
]);
const tfb = tf.tensor2d([
  [3, 1],
  [2, 4],
  [-1, 5],
]);
const result = tf.matMul(tfa, tfb);

result.print();
