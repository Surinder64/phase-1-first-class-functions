function receivesAFunction(callback) {
    return callback();
  }  
  function returnsANamedFunction() {
    return function myh() {

    }
  }
  function returnsAnAnonymousFunction() {
    return function() {

    }
  }