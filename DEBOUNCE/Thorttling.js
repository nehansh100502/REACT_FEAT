//TODO: debouncing : it is execute after a some delay and reset again after 5 seconds
//!throttling : disabled for a perticular time when we click on or perform an action

function throttling(fn, delay = 3000) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn(...args);
      flag = false;
    }
    setTimout(() => {
      flag = true;
    }, delay);
  };
}
function sendMsg(message) {
  console.log(`sending...`, message);
}
const msgWithSlowMode = throttling(sendMsg, 5000);
msgWithSlowMode("hi");
msgWithSlowMode("Big Fan ");
msgWithSlowMode("Real App");
msgWithSlowMode("hihihi hihi hi hi hi•••••••😀😀😀😀😀😀😀😀😀");
