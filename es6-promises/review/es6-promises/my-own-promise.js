function randomPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(`the random promise is high ${name}`)
        : reject(new Error(`the random promise is low ${name}`));
    }, 2000);
  });
}

const randomPromiseResult = randomPromise('Frank');

randomPromiseResult.then(value => {
  console.log(value);
});
randomPromiseResult.catch(error => {
  const errorMessage = error.message;
  console.log(errorMessage);
});
