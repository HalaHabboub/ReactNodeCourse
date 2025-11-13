# Git Basics - Part 2

## Markdown (.md) and README.md

### What is Markdown?

**Markdown** is a lightweight markup language that uses plain text formatting syntax to create structured documents.

**Example:**
```markdown
# Heading
**bold text**
- List item
[Link](https://example.com)
```

Renders as formatted text with headings, bold, lists, and links.

### Why README.md?

- **First impression** of your repository
- **Documentation** for users and contributors
- **Instructions** on how to install, use, and contribute
- GitHub automatically displays it on the repository homepage
- Uses `.md` extension so it's rendered with proper formatting

**Without README:** People won't know what your project does or how to use it.

---

## Best Practices for Commit Messages

Good commit messages help you and others understand project history.

### Structure:
```
Short summary (50 chars or less)

Optional detailed explanation of what and why.
```

### Guidelines:

| Do ✓ | Don't ✗ |
|------|---------|
| `Add user authentication feature` | `update` |
| `Fix login button alignment` | `changes` |
| `Refactor database connection logic` | `stuff` |
| `Update README with installation steps` | `asdfgh` |

### Best Practices:
1. **Use imperative mood** - "Add feature" not "Added feature"
2. **Be specific** - Explain what you did
3. **Keep it concise** - One line summary is enough for small changes
4. **Start with a verb** - Add, Fix, Update, Remove, Refactor
5. **Don't commit unrelated changes together**

### Examples:
```bash
git commit -m "Add password validation to signup form"
git commit -m "Fix navbar responsiveness on mobile devices"
git commit -m "Update dependencies to latest versions"
```

---

## Git Branches

### What is a Branch?

A **branch** is an isolated workspace where you can work on code without affecting the main codebase.

**Think of it as:** A parallel universe where you experiment, and only merge it back when it's ready.

### Why Use Branches?

1. **Isolation** - Work on features without breaking existing code
2. **Parallel development** - Multiple people work simultaneously
3. **Safe experimentation** - Test ideas without risk
4. **Organized workflow** - Each feature/fix has its own space

---

## Branches in Teamwork (Real-World Scenario)

### Typical Team Workflow:

1. **Team lead** structures the repository
2. **Team members** clone the repository
3. Each member is assigned a **task**
4. Each task is done on a **separate branch** (isolated from `main`)
5. Members push their work to **their branch** (NOT to `main`)
6. To merge into `main`, they create a **pull request**
7. **Team lead reviews** and approves the pull request
8. The branch is **merged** into `main`

### Why Not Push Directly to Main?

- **Prevents conflicts** from multiple people editing simultaneously
- **Code review** ensures quality before merging
- **Main branch stays stable** and deployable
- **Easy rollback** if something goes wrong

---

## Working with Branches: Step-by-Step

### Step 1: Create and Switch to a New Branch

```bash
git checkout -b "branchName"
```

**What this does:**
- Creates a new branch called `branchName`
- Switches to that branch immediately

**Example:**
```bash
git checkout -b "add-login-feature"
```

### Step 2: Work on Your Task

Make changes to files, then stage and commit:

```bash
git add .
git commit -m "Add login feature"
```

### Step 3: Push to the New Branch

```bash
git push origin branchName
```

**Example:**
```bash
git push origin add-login-feature
```

This pushes your commits to the **branch** on GitHub, not to `main`.

---

## Creating a Pull Request (PR)

After pushing your branch, you need to request that it be merged into `main`.

### On GitHub:

1. Go to your repository on GitHub
2. Click **"Pull requests"** tab
3. Click **"New pull request"** button
4. **Choose branches:**
   - **Base:** `main` (where you want to merge INTO)
   - **Compare:** `branchName` (your new branch)
5. Click **"Create pull request"**
6. Add a title and description
7. Click **"Create pull request"**

### Visual:
```
branchName  →  [Pull Request]  →  main
```

---

## Accepting the Pull Request (Merge)

**Usually done by the team lead:**

1. Go to **Pull requests** tab
2. Review the changes
3. Click **"Merge pull request"**
4. Click **"Confirm merge"**

**Result:** Your branch's code is now part of `main`!

---

## After Merging: Branch Deletion

After a successful merge, you can delete the branch to keep the repository clean.

```bash
git branch -d branchName
```

Or delete on GitHub by clicking **"Delete branch"** after merging.

### ⚠️ For This Course:
**DO NOT delete your branches!** Keep them so the instructor can see your work and progress.

---

## Quick Branch Workflow Summary

```bash
# 1. Create and switch to new branch
git checkout -b "feature-branch"

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push to the branch
git push origin feature-branch

# 4. Create pull request on GitHub
# 5. Team lead reviews and merges
# 6. Keep the branch (for this course)
```

---

## Checking Your Current Branch

```bash
git branch
```

Shows all branches. The current branch has a `*` next to it.

```bash
git status
```

Also shows your current branch at the top.

---

## Switching Between Branches

```bash
git checkout branchName
```

**Example:**
```bash
git checkout main           # Switch to main
git checkout feature-login  # Switch to feature-login branch
```

---

## Key Takeaways

- **Branches = Isolated workspaces** for different tasks
- **Never push directly to main** in team projects
- **Pull requests = Code review + merge approval**
- **Good commit messages = Clear project history**
- **README.md = Your project's front page**
- **Keep branches** for the course so instructors can review your work
