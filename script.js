(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++) {

  
       var firstLetter = names[i].charAt(0).toLowerCase();

  
       if (firstLetter === 'j') {
           byeSpeaker.speak(names[i]);
       } 
       else {
           helloSpeaker.speak(names[i]);
       }
   }


})();

(function () {
	var helloSpeaker = {};
	var speakWord1 = "Hello";
	helloSpeaker.speak = function(name) {
    console.log(speakWord1 + " " +names[i]);
    }
  
  })();
  
(function () {
   var byeSpeaker = {};
   var speakWord2 = "Good Bye";
   byeSpeaker.speak = function (name) {
   console.log(speakWord2 + " " +names[i]);
   }

 })();

