if (Hls.isSupported()) {
  const video = document.getElementById("video");
  const hls = new Hls();
  hls.attachMedia(video);

  hls.on(Hls.Events.MEDIA_ATTACHED, function() {
    console.log("video and hls.js are now bound together !");
    hls.loadSource(
	  "https://4gtvfreemobile-mozai.4gtv.tv/0df68Gf2eZZfeig9vWfaKfrjsVCG-GW-OCbyLHhoW0M%3d/stream2.m3u8?token=kZe4eLTn9CRCt4byOtfzpQ&expires=1628316954&refer=ZDRjZGQzODAtOTUyMi00ZDAxLTgyMzktZTMyMzFiZWUwZGIz&token1=kHxHRFjqciiDO5a-uaorqw&expires1=1628345754&y=0&vt="
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