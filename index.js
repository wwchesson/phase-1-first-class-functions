function receivesAFunction(spy) {
    console.log(spy());
}

function returnsANamedFunction() {
    return function randomFunction(){
    }
}

function randomFunction(){
}

function returnsAnAnonymousFunction(){
    return function() {
    }
}