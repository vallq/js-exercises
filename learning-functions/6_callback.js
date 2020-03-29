// callback functions are just calling another function within when the task is done.

function doSomething(doLater) {
  console.log("doing my things and when I am done I will call do Later");
  doLater();
}

doSomething(function() {
  console.log("do later");
});

doSomething(() => console.log("do something else later"));

// callback are commons to use with events and api calls.
console.log("at 0 seconds");
setTimeout(function() {
  console.log("Hello 1s later");
}, 1000);

// another example with interval
setInterval(function() {
  console.log("1s have pass");
}, 1000);
