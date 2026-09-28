(function (window) {

  var byeSpeaker = {};

  var speakWord = "Goodbye";

  byeSpeaker.sayGoodbye = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
