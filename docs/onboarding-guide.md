# 👨‍💻 Developer Onboarding Guide – DevFlow

## 🎯 Purpose

This guide helps developers use the DevFlow platform to deploy applications quickly.

---

## 🧩 Prerequisites

* GitHub repository
* Basic knowledge of Node.js / HTML
* Internet access

---

## 🚀 Steps to Deploy

### Step 1: Open Platform UI

Open:

```
platform-ui/index.html
```

---

### Step 2: Fill Details

1. Select Template:

   * Node.js API
   * Static Website
   * Background Worker

2. Enter:

   * GitHub Repository URL
   * Application Name

---

### Step 3: Deploy

Click:

```
Deploy
```

---

### Step 4: What Happens Internally

* Backend receives request
* GitHub Actions workflow is triggered
* Repo is cloned into EC2
* App is deployed automatically

---

### Step 5: Access Application

Visit:

```
http://<EC2_PUBLIC_IP>
```

---

## 📊 Monitoring

* Open Grafana:

```
http://<EC2_PUBLIC_IP>:4000
```

* View:

  * CPU usage
  * Alerts

---

## 🚨 Alerts

* Alerts trigger when CPU > 80%
* Email notification is sent

---

## 🧪 Testing Alerts

Run:

```bash
yes > /dev/null &
```

Stop:

```bash
pkill yes
```

---

## 🛠️ Troubleshooting

| Issue             | Solution                  |
| ----------------- | ------------------------- |
| Deployment failed | Check GitHub Actions logs |
| App not loading   | Restart Nginx             |
| No alerts         | Check SMTP config         |
| Backend error     | Restart server.js         |

---

## 🏁 Summary

DevFlow enables developers to deploy apps easily without worrying about infrastructure.

---
