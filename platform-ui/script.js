document.getElementById("deployBtn").addEventListener("click", function () {
  const template = document.getElementById("template").value;
  const repo = document.getElementById("repo").value;
  const appName = document.getElementById("appName").value;
  const status = document.getElementById("status");

  // Basic validation
  if (!repo || !appName) {
    status.innerText = "⚠️ Please fill all fields!";
    status.style.color = "yellow";
    return;
  }

  // Show starting message
  status.innerText = "🚀 Deployment started...";
  status.style.color = "#00e6ff";

  // Simulate deployment delay
  setTimeout(() => {
    status.innerText = `✅ ${template} "${appName}" deployed successfully!`;
    status.style.color = "#00ff9f";
  }, 2000);

  // OPTIONAL: If you connect backend later
  /*
  fetch("http://your-backend/deploy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      template,
      repo,
      appName
    })
  })
  .then(res => res.json())
  .then(data => {
    status.innerText = "✅ Deployment successful!";
  })
  .catch(err => {
    status.innerText = "❌ Deployment failed!";
  });
  */
});