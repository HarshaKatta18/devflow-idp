# 🚀 DevFlow – Mini Internal Developer Platform (IDP)

## 📌 Overview

DevFlow is a simplified Internal Developer Platform (IDP) that enables developers to deploy applications using a self-service UI. It automates infrastructure provisioning, application deployment, and monitoring using GitHub Actions, EC2, Prometheus, and Grafana.

---

## 🎯 Objective

To provide a platform where developers can:

* Deploy applications with **one click**
* Use predefined **golden path templates**
* Avoid manual infrastructure setup
* Monitor applications in real-time

---

## 🏗️ Architecture

### Components:

1. **Frontend (Platform UI)**

   * HTML + JavaScript
   * Collects repo URL, template, and app name

2. **Backend (Node.js)**

   * Handles API requests
   * Triggers GitHub Actions workflow

3. **CI/CD Pipeline (GitHub Actions)**

   * Automates deployment
   * Connects to EC2 via SSH

4. **Execution Layer (AWS EC2)**

   * Runs applications
   * Hosts Nginx, Node apps, workers

5. **Observability Stack**

   * Prometheus → Metrics collection
   * Grafana → Visualization + Alerts

---

## ⚙️ Features

* ✅ One-click deployment
* ✅ Multiple templates:

  * Node.js API
  * Static Website
  * Background Worker
* ✅ Automated CI/CD pipeline
* ✅ Nginx-based routing
* ✅ Real-time monitoring (CPU, memory)
* ✅ Email alerts via Grafana
* ✅ GitHub integration

---

## 🔁 Workflow

1. User enters:

   * Template
   * GitHub repo URL
   * App name

2. UI → sends request to backend

3. Backend → triggers GitHub Actions

4. GitHub Actions:

   * SSH into EC2
   * Clone repo
   * Install dependencies
   * Deploy app based on template

5. Application becomes live on EC2

6. Prometheus collects metrics

7. Grafana:

   * Displays dashboards
   * Sends alerts (email)

---

## 📦 Templates

| Template       | Description                                   |
| -------------- | --------------------------------------------- |
| Node.js API    | Runs backend service with Nginx reverse proxy |
| Static Website | Deploys HTML/CSS/JS via Nginx                 |
| Worker         | Runs background job without UI                |

---

## 📊 Observability

* Prometheus scrapes system metrics
* Grafana dashboards visualize:

  * CPU usage
  * Memory usage
* Alert configured:

  * Trigger when CPU > 80%
* Email notifications enabled via SMTP

---

## 🔐 Security

* GitHub token stored in `.env`
* `.env` excluded via `.gitignore`
* SSH key stored as GitHub secret

---

## 🚀 How to Run

### 1. Start Backend

```bash
node server.js
```

### 2. Open UI

```
platform-ui/index.html
```

### 3. Deploy App

* Select template
* Enter repo URL
* Enter app name
* Click Deploy

---

## 🧪 Demo Steps

1. Deploy Node.js app
2. Deploy static website
3. Run worker
4. Generate CPU load:

   ```bash
   yes > /dev/null &
   ```
5. Observe alert in Grafana
6. Receive email notification

---

## 🏁 Conclusion

DevFlow demonstrates how platform engineering simplifies deployment using automation, standardization, and observability, reducing developer effort and increasing productivity.

---
