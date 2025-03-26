<template>
  <div class="camera-container">
    <video ref="videoElement" autoplay></video>
    <canvas ref="canvasElement" style="display: none"></canvas>
    <button @click="captureImage">Capture</button>
    <img v-if="capturedImage" :src="capturedImage" alt="Captured Image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      capturedImage: null,
    };
  },
  mounted() {
    this.startCamera();
  },
  methods: {
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.videoElement.srcObject = stream;
      } catch (error) {
        console.error("Camera access error:", error);
      }
    },
    captureImage() {
      const video = this.$refs.videoElement;
      const canvas = this.$refs.canvasElement;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      this.capturedImage = canvas.toDataURL("image/png");
    },
  },
};
</script>

<style scoped>
.camera-container {
  text-align: center;
}
video {
  width: 100%;
  max-width: 500px;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
img {
  margin-top: 10px;
  max-width: 100%;
  border: 2px solid #000;
}
</style>
