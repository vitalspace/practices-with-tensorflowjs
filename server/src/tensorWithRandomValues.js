import * as tf from "@tensorflow/tfjs";

// intialize the array 
let arr = [];

// Create 30 random values between 0 100
for(let i = 0; i < 30; i++ ) {
    arr[i] = Math.random(0, 100) * 100;
}

// We are gone to create a three-dimentional tensor with the information form array
// this tensor will have 5 matrices, 3 row and 2 colums.
// We also specify the type of data that each of the tensor values will have.
// in this case int32
tf.tensor(arr,[5, 3, 2], "int32").print();