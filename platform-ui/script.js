async function deploy(template) {

  const token = prompt("Enter GitHub Token");
  const repo = "HarshaKatta18/devflow-idp"; // your repo

  alert("Deploying " + template + "...");

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/actions/workflows/deploy.yml/dispatches`,
      {
        method: "POST",
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          ref: "main",
          inputs: {
            template: template
          }
        })
      }
    );

    if (response.status === 204) {
      alert("✅ Deployment triggered! Check GitHub Actions");
    } else {
      const text = await response.text();
      alert("❌ Failed: " + text);
    }

  } catch (err) {
    alert("❌ Error: " + err.message);
  }
}