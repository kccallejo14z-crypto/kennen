document.addEventListener("submit", function (event) {
  if (event.target && event.target.id === "contactForm") {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const recipient = "your.email@example.com"; // Replace with your real email
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
    window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  }
});
