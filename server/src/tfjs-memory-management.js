import * as tf from "@tensorflow/tfjs";

// Config
const fps = 60;
const interval = 1000 / fps;

/*
    In this example, we create a recursive function that runs every 16ms, 
    equivalent to 60 frames per second. We use tf.tidy() to free up memory 
    once the tensor with values [1, 2, 3] is no longer needed. We also use 
    tf.memory().numTensors to validate if the memory is being properly freed 
    and check for memory leaks.
*/
function update() {
  tf.tidy(() => {
    tf.tensor([1, 2, 3], null, "int32");
  });
  console.log(tf.memory().numTensors);

  setTimeout(update, interval);
}

// Start Timeout
update();
