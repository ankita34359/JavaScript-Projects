let speech = new SpeechSynthesisUtterance();

// Changing the voices

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Add voices to dropdown box

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Select the language

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});



