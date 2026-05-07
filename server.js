const cors = require("cors");
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Trigger GitHub Action
app.post("/deploy", async (req, res) => {
  const { template, repo, appName } = req.body;

  try {
    await axios.post(
      `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/actions/workflows/deploy.yml/dispatches`,
      {
        ref: "main",
        inputs: {
          template: template,
          repo_url: repo,
          app_name: appName
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json"
        }
      }
    );

    res.json({ message: "Deployment triggered successfully!" });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to trigger deployment" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});
