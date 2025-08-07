document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput").value.toLowerCase();
  const bot = document.getElementById("bot");

  let reply = "Hmm... I don't understand that.";

  if (input.includes("hello")) reply = "Hello there! 👋";
  else if (input.includes("how are you")) reply = "I'm doing great!";
  else if (input.includes("bye")) reply = "Goodbye!";

  bot.innerText = reply;
  document.getElementById("userInput").value = "";
});
