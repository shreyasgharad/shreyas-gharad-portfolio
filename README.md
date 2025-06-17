
# Shreyas Gharad Portfolio - Performance Marketing Website

## Project info

**URL**: https://lovable.dev/projects/3b155233-3e7f-47bd-94e5-ac628fda2097

## Environment Variables

### Required for Production:
- `VERCEL_TOKEN` - Vercel deployment token for automated deployments
- `MAILCHIMP_KEY` - Mailchimp API key for newsletter subscriptions
- `GTM_ID` - Google Tag Manager container ID (currently set to GTM-XXXX)

### GitHub Secrets Setup:
1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `LHCI_GITHUB_APP_TOKEN`: Lighthouse CI GitHub app token (optional)

### Local Development:
No environment variables are required for local development. The app will work with placeholder values.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3b155233-3e7f-47bd-94e5-ac628fda2097) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- MDX for content management

## CI/CD Pipeline

### GitHub Actions Workflows:

1. **Deploy** (`.github/workflows/deploy.yml`)
   - Triggers on push to main branch
   - Builds and deploys to Vercel

2. **Lighthouse CI** (`.github/workflows/lighthouse.yml`)
   - Performance budgets: <200KB JS, <1.5s LCP
   - Minimum scores: 90 for all categories

3. **Accessibility** (`.github/workflows/accessibility.yml`)
   - Uses axe-core for accessibility testing
   - Fails build if >5 critical issues found

### Performance Budgets:
- JavaScript bundle size: <200KB
- Largest Contentful Paint: <1.5s
- Lighthouse scores: ≥90 for all categories

## How can I deploy this project?

### Automatic Deployment:
Push to the `main` branch triggers automatic deployment via GitHub Actions.

### Manual Deployment:
Simply open [Lovable](https://lovable.dev/projects/3b155233-3e7f-47bd-94e5-ac628fda2097) and click on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Final Acceptance Checklist

- [ ] All GitHub Actions workflows pass
- [ ] Lighthouse score ≥90 for all categories
- [ ] Accessibility audit passes with <5 critical issues
- [ ] Performance budgets met (<200KB JS, <1.5s LCP)
- [ ] Google Tag Manager properly configured
- [ ] Environment variables documented
- [ ] Demo URL accessible and functional
