# Nikil — Software Developer & UI Designer Portfolio

A minimalist, high-performance personal portfolio and freelance website inspired by Linear, Apple, Vercel, and Raycast.

## 🚀 How to Launch on GitHub (GitHub Pages)

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name (e.g. `portfolio` or `Nikil95.github.io`).
3. Set visibility to **Public**.
4. Click **Create repository** (do not initialize with a README if you are pushing this existing project).

### Step 2: Push this Project to GitHub
In your project terminal, run:

```bash
# Initialize git if not already initialized
git init

# Stage all files
git add .

# Commit files
git commit -m "feat: initial release of Nikil developer & UI designer portfolio"

# Rename branch to main
git branch -M main

# Link to your new GitHub repository (replace with your repo URL)
git remote add origin https://github.com/Nikil95/portfolio.git

# Push to GitHub
git push -u origin main
```

---

### Step 3: Enable Automatic GitHub Pages Deployment
1. Go to your repository on GitHub: `https://github.com/Nikil95/portfolio`.
2. Click **Settings** (top tab) → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select:
   👉 **GitHub Actions**
4. The included `.github/workflows/deploy.yml` workflow will automatically run, build the site with Vite, and publish it to:
   🌐 **`https://Nikil95.github.io/portfolio/`**

---

### ⚡ Alternative 1-Click Deployments

#### Deploy on Vercel:
1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository (`Nikil95/portfolio`).
3. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.

#### Deploy on Netlify:
1. Go to [app.netlify.com/start](https://app.netlify.com/start).
2. Import from GitHub.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 🛠 Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Motion**: Framer Motion
- **Design System**: Linear / Raycast / Apple aesthetic with dark mode and zero-pill typographic discipline.
