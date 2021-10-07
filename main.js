if (Hls.isSupported()) {
  const video = document.getElementById("video");
  const hls = new Hls();
  hls.attachMedia(video);

  hls.on(Hls.Events.MEDIA_ATTACHED, function() {
    console.log("video and hls.js are now bound together !");
    hls.loadSource(
	  "https://raw.githubusercontent.com/StanleyChen0924/Myself/YTlive/Music24.m3u8"
    );
  });

  
  play.addEventListener("click", () => {
    console.log("play");
    video.play();
  });
  pause.addEventListener("click", () => {
    console.log("play");
    video.pause();
  });
}