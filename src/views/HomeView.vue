<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="grid grid-cols-1 text-center place-content-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">AI ACCESSIBILITY ASSISTANT</h1>
      <p class="text-gray-600 mb-8">
        Helping visually impaired users read and understand images, text, and audio.
      </p>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center w-5/12 mx-auto text-xl"
          @click="startRecognition"
        >
          <span class="mr-2">
            <Mic />
          </span>
          GET STARTED
        </button>
      </div>
      <p>{{ output }}</p>
    </div>
  </div>
</template>

<script setup>
import { Mic } from 'lucide-vue-next';
import { ref } from 'vue';

const output = ref('');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true;

let commands = ['upload', 'summarize', 'compare', 'commands']

recognition.onresult = (event) => {
  recognition.stop();
  const transcript = event.results[0][0].transcript;
  output.value = transcript;
};

recognition.onend = () => {
  console.log("Rec ended")
  if(
    output.value.startsWith('okay') &
    output.value.split(' ').length === 2)
      {
      let command = output.value.split(' ').at(-1);
      if(commands.includes(command)){
        endText();
        speakText((command));
        console.log("HERE")
        confirmCommand();
        console.log("THERE")
      }
      else{
        speakText("Invalid command");
        seeCommands();
        startRecognition();
      }
  }
  else{
    speakText("No command found. Reverting back...");
    startRecognition();
  }
};

recognition.onerror = (event) => {
  console.error('Error occurred:', event.error);
};

const startRecognition = () => {
  startText();
  recognition.start();
};

const startText = () => {
  speakText("c");
};

const seeCommands = () => {
  speakText("To find the commands, say okay commands");
}

const confirmation = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
confirmation.lang = 'en-US';

const confirmCommand = () => {
  speakText("To confirm, say yes. To reject, say no.");
  confirmation.start();

  confirmation.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    output.value = transcript;

    console.log("You said:", transcript);
    confirmation.stop();

    if (transcript === 'yes') {
      speakText("Confirmed.");
    } else if (transcript === 'no') {
      speakText("Rejected.");
    } else {
      speakText("Invalid input. Please say yes or no.");
      setTimeout(confirmCommand, 500); // Retry after a short delay
    }
  };

  confirmation.onerror = (error) => {
    console.error("Error:", error);
    speakText("An error occurred. Please try again.");
  };

  confirmation.onend = () => {
    console.log("Speech recognition ended.");
  };
};

const endText = () => {
  speakText("Your command is: ");
};



const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US'; // Change to 'hi-IN' for Hindi
  window.speechSynthesis.speak(speech);
};

</script>
