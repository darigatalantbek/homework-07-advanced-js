function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));


let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);
  // Будет выведено 1. Будет выполнен первый resolve/reject, последующие не выполняются.


  promise.then(f1).catch(f2); //эти две строчки кода не эквивалентны друг другу. 
                              //Метод then выполняется если будет resolve, 
                              //метод catch выполняется если будет reject

  promise.then(f1, f2); // здесь f1 и f2 выполнятся если будет resolve. Чтобы then сделать 
                        //эквивалентом catch можно использовать .then(null, (error) => {обрабатываем ошибку})