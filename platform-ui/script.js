document.getElementById("deployBtn").addEventListener("click", async function () {
  const template = document.getElementById("template").value;
  const repo = document.getElementById("repo").value;
  const appName = document.getElementById("appName").value;
  const status = document.getElementById("status");

  // Validation
  if (!repo || !appName) {
    status.innerText = "⚠️ Please fill all fields!";
    status.style.color = "yellow";
    return;
  }

  // Start message
  status.innerText = "🚀 Triggering deployment...";
  status.style.color = "#00e6ff";

  try {
    const response = await fetch("http://localhost:5000/deploy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        template: template,
        repo: repo,
        appName: appName
      })
    });

    const data = await response.json();

    if (response.ok) {
      status.innerText = "✅ Deployment triggered! Check GitHub Actions.";
      status.style.color = "#00ff9f";
    } else {
      status.innerText = "❌ Deployment failed";
      status.style.color = "red";
      console.error(data);
    }

  } catch (error) {
    status.innerText = "❌ Backend not running or CORS issue";
    status.style.color = "red";
    console.error(error);
  }
});