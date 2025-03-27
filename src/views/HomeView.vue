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

let commands = ['upload', 'summarize', 'compare', 'news', 'commands', ]

recognition.onresult = (event) => {
  recognition.stop();
  const transcript = event.results[0][0].transcript;
  output.value = transcript;
};

let command;

recognition.onend = () => {
  if(
    output.value.startsWith('okay') &&
    output.value.split(' ').length === 2)
      {
      command = output.value.split(' ').at(-1);
      if(commands.includes(command)){
        speakText("Your command is: " + command);
        confirmCommand();
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
  speakText("To say a command, say okay followed by the command");
  recognition.start();
};

const seeCommands = () => {
  speakText("To find the commands, say okay commands");
}

const confirmation = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
confirmation.lang = 'en-US';
confirmation.interimResults = false; // do not store results in between
confirmation.continuous = true; // do not stop at a single output

const confirmCommand = () => {
  speakText("To confirm, say yes. To reject, say no.");
  confirmation.start();

  confirmation.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    output.value = transcript;

    confirmation.stop();

    if (transcript === 'yes') {
      speakText("Confirmed.");
      performAction(); // Perform the action based on the command
    } else if (transcript === 'no') {
      speakText("Rejected. Reverting back");
      startRecognition();
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
    console.log("Speech confirmation ended.");
  };
};

const news = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
news.lang = 'en-US';
news.interimResults = false;
news.continuous = true;

const news_list = [
  "NVIDIA announces new AI-pow",
  "Intel reveals next-gen processors",
  "Microsoft intro",
  "Apple plans to laun",
  "Dell unveils ultra",
  "AMD reports record s",
  "Lenovo introduces AI-enha",
  "Google partners with Acer f",
  "ASUS announces new gaming",
  "HP launches eco-friendly laptops made from recycled materials."
];


// Function to perform actions based on the command
const performAction = () => {
  switch (command) {
    case 'upload':
      speakText("Camera started");
      
      break;
    case 'summarize':
      speakText("Summarizing the content...");
      break;
    case 'compare':
      speakText("Comparing the files...");
      break;
    case 'commands':
      speakText("Showing available commands...");
      break;
    case 'news':
      speakText("What news would you like to hear?");

      news.start();
      news.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        output.value = transcript;

        news.stop();
        speakText("Searching for:" + transcript + "news");
      }

      for(const news_item of news_list){
        speakText("The next news is: ")
        speakText(news_item);
      }
      break;
    default:
      speakText("Unknown command.");
  }
};

const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US'; // Change to 'hi-IN' for Hindi
  window.speechSynthesis.speak(speech);
};

</script>
