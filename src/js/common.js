const log = console.log
const error = console.error

log('common start')

//----------------------------------------------------------------
// speakText(speak)
function speakText(txt) {
  try {
    let speech = new window.SpeechSynthesisUtterance(); speech.text = txt;
    window.speechSynthesis.speak(speech);
  } catch (e) { console.error("speakText", e) }
}
//  пока не используются
// function loadVoices() {
//   let voices = speechSynthesis.getVoices();
//   console.log("voices:", voices)
// }
// function speakPH(el) {
//   let placeholder = el.getAttribute("placeholder")
//   if (!placeholder)
//     return;
//   speakText(placeholder);
// }
