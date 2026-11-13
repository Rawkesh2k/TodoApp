<div align="center">

# ✨ TodoApp

### Make every task count. ✅

A full-stack Todo app with an Angular interface and a Java REST API, built to help you keep track of what needs doing.

[🚀 Get started](#-get-started) · [🧭 Explore features](#-what-you-can-do) · [🛠️ Troubleshooting](#-quick-help)

<br />

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Java API](https://img.shields.io/badge/API-Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![License](https://img.shields.io/badge/License-check%20repository-8B5CF6?style=for-the-badge)

</div>

---

## 🌈 Your day, a little more organized

TodoApp lets you view, add, update, and delete tasks from a simple web interface. Each todo includes a description, target date, and completion status. The Angular frontend communicates with a Java REST API running locally.

## 🧭 What you can do

| | Feature | Make it happen |
|:--:|---|---|
| 📋 | **See your todos** | View task descriptions, target dates, and completion status. |
| ➕ | **Add a task** | Create a todo and give your next task a place to live. |
| ✏️ | **Update a task** | Edit an existing todo. |
| 🗑️ | **Delete a task** | Remove a todo when it’s no longer needed. |
| 🔐 | **Sign in** | Use the app’s login flow to reach the todo experience. |

<details>
<summary><strong>🧩 How the pieces fit together</strong></summary>

- **Frontend:** Angular 17, TypeScript, and RxJS.
- **API:** The frontend calls a Java REST API at `http://localhost:8080`.
- **Server rendering:** Angular SSR is configured with Express.

The API routes used by the app follow the pattern `/users/{username}/todos` and support listing, creating, updating, and deleting todos.

</details>

## 🚀 Get started

### 1. What you’ll need

- [Node.js](https://nodejs.org/) and npm
- A Java Todo REST API running at `http://localhost:8080`

> 💡 The frontend expects the Java API to be available locally on port **8080**. Start that API before trying todo operations. The Angular frontend and its Express SSR server are in this repository.

### 2. Install and start the frontend

```bash
git clone https://github.com/Rawkesh2k/TodoApp.git
cd TodoApp
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) and start organizing. The Angular development server reloads when you change source files.

### 3. Build or test

```bash
npm run build   # Build the Angular app
npm test        # Run unit tests
```

To serve the SSR build after building:

```bash
npm run serve:ssr:todo
```

## 🗂️ Project map

```text
src/app/
├── list-todos/   # Todo list and task actions
├── login/        # Login screen and flow
├── service/      # Authentication and API services
├── todo/         # Todo editing
└── welcome/      # Welcome screen
server.ts         # Express server for Angular SSR
```

## 🎨 Want to help make it better?

1. ⭐ Star the project if it’s useful to you.
2. 🍴 Fork it and create a feature branch.
3. 🧪 Run the app and tests before opening a pull request.
4. 💬 Describe what changed and how you tried it.

## 🆘 Quick help

<details>
<summary><strong>The app loads, but my todos don’t</strong></summary>

Check that the Java API is running and reachable at `http://localhost:8080`. The app requests todos from `/users/{username}/todos`.

</details>

<details>
<summary><strong>How do I run the Angular dev server?</strong></summary>

From the repository directory, run `npm install` once and then `npm start`. Visit [http://localhost:4200](http://localhost:4200).

</details>

---

<div align="center">

**One small task at a time. You’ve got this.** 🌱

Made with ☕ and a checklist.

</div>
