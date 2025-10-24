# 📚 My Special Notes Repository (`special1`)

This repository is set up to manage personal lecture notes and files while simultaneously tracking an external, read-only class material repository (`LectureMaterial`) using a **Git Submodule**.

This workflow ensures:
1.  Your personal notes and commits remain separate from the class material history.
2.  You can easily pull updates from the official class repository without merging conflicts in your notes.
3.  Your main repository tracks the exact version of the class materials you were studying.

---

## ⚙️ Initial Setup Overview

The `LectureMaterial` folder is configured as a Git Submodule pointing to the doctor's repository. This means the folder is its own separate Git repository nested inside this one.

---

## 📝 Daily Workflow: Managing Notes and Updates

### A. Pushing Your Personal Notes (Main Repo: `special1`)

Use the standard Git commands in the root `special1` directory to track all your personal files, notes, and folders (everything *except* the internal details of `LectureMaterial`).

| Action | Command | Rationale |
| :--- | :--- | :--- |
| **1. Stage Changes** | `git add .` | Stages all your new notes and modified personal files. |
| **2. Commit Changes** | `git commit -m "Brief message about my notes"` | Saves your personal work to the local repository history. |
| **3. Push to Remote** | `git push origin main` | Pushes your notes and commits to your remote notes repository. |

---

### B. Pulling Class Material Updates (Using the Submodule) 🔄

When the instructor updates the class materials, you must perform a two-step process: first pull inside the submodule, then register and push that new version to your main notes repo.

#### Step 1: Update the Submodule Files

Navigate into the submodule folder and pull the latest changes directly from the doctor's repository.

```bash
# 1. Go into the submodule folder
cd LectureMaterial

# 2. Pull the changes from the doctor's remote repo
git pull origin <branch-name>

# 3. Return to the main directory
cd ..

```

#### Step 2: Register and Push the New Version

You must now tell the main `special1` repository to commit the reference to the submodule's new version and push this update to your remote.

| Action | Command | Rationale |
| :--- | :--- | :--- |
| **1. Stage Submodule** | `git add LectureMaterial` | Tells the main repo to track the **new version** (commit ID) of the submodule. |
| **2. Commit Update** | `git commit -m "Update class material submodule to latest version"` | Records the change in your notes repository's history. |
| **3. Push to Remote** | `git push origin main` | **Pushes the committed submodule reference** (the link to the new class material version) to your remote repository. |