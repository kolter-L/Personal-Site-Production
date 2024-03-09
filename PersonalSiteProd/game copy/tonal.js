
function playTone() {

    // Create an audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create an oscillator node
    const oscillator = audioContext.createOscillator();

    // Connect the oscillator to the audio context's destination (speakers)
    oscillator.connect(audioContext.destination);

    // Set the type of the oscillator (sine, square, sawtooth, triangle)
    oscillator.type = 'sine'; // You can experiment with other types

    // Set the frequency of the oscillator (in Hz)
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime); // A4 note (440 Hz)

    // Start the oscillator
    oscillator.start();

    // Stop the oscillator after a certain duration (in milliseconds)
    setTimeout(() => {
        oscillator.stop();
    }, 50); // Stop the oscillator after 500 milliseconds (0.5 seconds)
}
