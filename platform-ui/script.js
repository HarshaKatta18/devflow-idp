async function deploy() {
  const template = document.getElementById("template").value;
  const repo = document.getElementById("repo").value;
  const appname = document.getElementById("appname").value;

  const token = prompt("Enter GitHub Token");

  const response = await fetch(
    "https://api.github.com/repos/HarshaKatta18/devflow-idp/actions/workflows/deploy.yml/dispatches",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,   // 🔥 IMPORTANT (use Bearer)
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          template: template,
          repo_url: repo,
          app_name: appname
        }
      })
    }
  );

  if (response.status === 204) {
    alert("✅ Deployment triggered!");
  } else {
    const err = await response.text();
    console.error(err);   // 🔥 VERY IMPORTANT
    alert("❌ Failed to trigger deployment\nCheck console");
  }
}