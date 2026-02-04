document.getElementById("downloadBtn").addEventListener("click", function () {

  const link = document.getElementById("spotifyLink").value.trim();
  const result = document.getElementById("result");

  // Check if link is empty
  if (link === "") {
    alert("Please paste a Spotify track link!");
    return;
  }

  // Validate Spotify track link
  if (!link.includes("open.spotify.com/track")) {
    alert("Invalid Spotify track link!");
    return;
  }

  // This confirms the button click works
  alert("Fetching song details...");

  // Simulated successful result
  result.innerHTML = "🎵 Song found! Download will start soon...";

  // Simulated download
    setTimeout(() => {
    const blob = new Blob(
        ["This is a simulated Spotify download."],
        { type: "text/plain" }
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "song.txt";
    a.click();
    }, 1000);



});
