document.getElementById("deployBtn").addEventListener("click", async function () {

  // Get selected template
  let template = document.getElementById("template").value;

  // 🔥 Map UI values → workflow values
  if (template === "Node.js API") template = "nodejs";
  if (template === "Static Website") template = "static";
  if (template === "Background Worker") template = "worker";

  const repo = document.getElementById("repo").value.trim();
  const appName = document.getElementById("appName").value.trim();
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

    let data = {};
    try {
      data = await response.json();
    } catch {}

    if (response.ok) {
      status.innerText = "✅ Deployment triggered successfully!";
      status.style.color = "#00ff9f";

      setTimeout(() => {
        status.innerText += "\n👉 Check GitHub Actions for progress";
      }, 1500);

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