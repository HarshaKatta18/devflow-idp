# 📦 DevFlow Platform Catalog

## 🎯 Purpose

Defines available deployment templates (golden paths) in DevFlow.

---

## 🧩 Templates Overview

---

### 🚀 1. Node.js API

**Description:**
Deploy backend applications built with Node.js.

**Features:**

* Runs on port 3000
* Uses Nginx reverse proxy
* Installs dependencies using npm

**Requirements:**

* `package.json`
* `index.js` or start script

---

### 🌐 2. Static Website

**Description:**
Deploy static HTML/CSS/JS websites.

**Features:**

* Served using Nginx
* Fast and lightweight

**Requirements:**

* `index.html`

---

### ⚙️ 3. Background Worker

**Description:**
Runs background processes (no UI).

**Features:**

* Runs using Node.js
* Executes continuously

**Requirements:**

* `worker.js`

---

## 🧠 Golden Path Concept

Each template represents a **golden path**:

* Predefined best practices
* No manual setup required
* Fast and consistent deployments

---

## 🔁 Template Selection Logic

Deployment is decided using:

```bash
if [ "$TEMPLATE" = "static" ]; then
elif [ "$TEMPLATE" = "nodejs" ]; then
elif [ "$TEMPLATE" = "worker" ]; then
```

---

## 📊 Observability Support

All templates are integrated with:

* Prometheus
* Grafana

---

## 🏁 Summary

The platform catalog simplifies deployment by providing standardized templates for different application types.

---
