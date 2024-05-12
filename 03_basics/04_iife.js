// immediately Invoked function Expressions (IIFs)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // globe scope se polution se proble hoti hai kayi bar to us globle scope ke jo variable hai uske polution us


((name) => {
    console.log(`DB CONNECTED TWO  ${name}`);
}  )("Akbar");