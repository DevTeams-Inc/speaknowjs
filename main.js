/**
 * @class
 * @public
 * Class for to Speech
 */

export const Speech = {
  /**
   * This methods read the text sent as a parameter
   * @method
   * @public
   * @param {String} text Text to speech
   * @param {String} voiceOption Type voice
   */
  readText: (text = "Hi people", voiceOption = "en-US") => {
    const synth = window.speechSynthesis;

    const voices = synth.getVoices();
    const textToRead = new SpeechSynthesisUtterance(text.toLowerCase());

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceOption) {
        textToRead.voice = voices[i];
      }
    }
    synth.speak(textToRead);
  }
};
