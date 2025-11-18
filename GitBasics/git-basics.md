# Git Basics Guide

## What is Git?

**Git** is a version control system that tracks changes to your files over time. It allows you to:
- Save snapshots (commits) of your project
- Revert to previous versions
- Collaborate with others without overwriting each other's work

Think of it as a time machine for your code.

---

## What is GitHub?

**GitHub** is a cloud hosting service for Git repositories. It:
- Stores your Git repositories online
- Enables collaboration with others
- Provides a web interface to view code and history
- Acts as a backup for your local repositories

**Git** = Version control tool (local)
**GitHub** = Online platform (remote)

---

## SSH (Secure Shell)

**SSH** is a secure way to connect to GitHub without typing your password every time.

### How it works:
1. You generate a pair of keys (public and private) on your computer
2. You add the public key to your GitHub account
3. Git uses these keys to authenticate you automatically

**Setup:**
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Then add the generated public key (`~/.ssh/id_ed25519.pub`) to GitHub Settings → SSH Keys.

---

## Clone

**Cloning** creates a local copy of a remote repository on your computer.

```bash
git clone <repository-url>
```

This downloads all files, commits, and history to your machine.

---

## License: No License vs MIT License

### No License (Default)
- **All rights reserved** by the creator
- Others cannot legally use, modify, or distribute your code
- GitHub displays: "No license"

### MIT License
- **Open source** and permissive
- Others can use, modify, and distribute your code
- Only requirement: include the original license in copies
- Popular and simple

**Add a license** by creating a `LICENSE` file in your repository root.

---

## .gitignore

A **`.gitignore`** file tells Git which files or folders to ignore (not track).

### Common examples:
```
node_modules/
.env
*.log
.DS_Store
```

**Why use it?**
- Avoid committing sensitive data (passwords, API keys)
- Exclude large files or dependencies
- Keep repository clean

---

## `code .`

Opens the current directory in **Visual Studio Code**.

```bash
code .
```

The `.` means "current directory."

---

## Git Bash

**Git Bash** is a terminal application for Windows that provides:
- A Unix-like command line interface
- Git commands
- Common Unix tools (ls, cd, mkdir, etc.)

It's the recommended way to use Git on Windows.

---

## Core Git Commands

### `git add`
Moves changes from the **working area** to the **staging area**.

```bash
git add <file>          # Add specific file
git add .               # Add all changes
```

### `git commit`
Saves staged changes as a snapshot in the repository history.

```bash
git commit -m "Describe your changes"
```

### `git push`
Uploads your local commits to the remote repository (GitHub).

```bash
git push origin main
```

**Breaking it down:**
- **`origin`** = The name of your remote repository (default name when you clone)
- **`main`** = The branch you're pushing
- Together: "Push the `main` branch to the `origin` remote repository"

**Check your remote:**
```bash
git remote -v
```
This shows the URL of your remote repository (where `origin` points to).

Example output:
```
origin  https://github.com/username/repo.git (fetch)
origin  https://github.com/username/repo.git (push)
```

---

## README

A **README.md** file is the front page of your repository. It typically includes:
- Project description
- Installation instructions
- Usage examples
- Credits

Written in Markdown (`.md`) format.

---

## Working Area vs Staging Area

### Working Area (Working Directory)
- Where you edit files
- Contains **untracked** or **modified** files
- Not yet committed

### Staging Area (Index)
- A "waiting room" for changes before commit
- Files added with `git add` go here
- Lets you choose which changes to include in the next commit

### Visual Flow:
```
Working Area  →  [git add]  →  Staging Area  →  [git commit]  →  Local Repository  →  [git push]  →  Remote Repository
```

---

## Quick Workflow Summary

```bash
# 1. Make changes to files
# 2. Check status
git status

# 3. Stage changes
git add .

# 4. Commit changes
git commit -m "Description of changes"

# 5. Push to GitHub
git push origin main
```

---

## Helpful Commands

| Command | Purpose |
|---------|---------|
| `git status` | Check current state of repository |
| `git log` | View commit history |
| `git diff` | See changes before staging |
| `git pull` | Download changes from remote repository |
| `git branch` | List or create branches |

---

**Remember:** Git tracks changes, not files. Every commit is a snapshot of your entire project at that moment.
