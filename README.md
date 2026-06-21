# JeremyTraini.com

This repository contains the code for my personal website, built to showcase my work, experience, and approach to software engineering.

Access the website at [jeremytraini.com](https://jeremytraini.com).

## Features
- **Responsive portfolio experience**: A polished landing page with project highlights, experience, and contact details.
- **Dynamic project content**: Project and timeline content is driven from structured data files for easy updates.
- **Interactive UI**: Motion, carousels, and polished visual details help the site feel more alive without overwhelming the content.
- **Private repo requests**: Selected private repositories can be requested by email, and the repository includes the API flow used to manage access.

## Tech Stack
- **Next.js 16**
- **React 19**
- **Tailwind CSS**
- **NextUI**
- **YAML content files**

## Running Locally
This project uses Yarn.

```bash
yarn install
yarn dev
```

The app will then be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables
If you want to run the optional private-repository access flow locally, create a `.env` file with:

```bash
REQUEST_ACCESS_CODE=example-code
GITHUB_TOKEN=github-token-with-repo-access
NUM_LINKEDIN_CONNECTIONS=500+
LINKEDIN_HEADLINE=Software Engineer
COPYRIGHT_YEAR=2026
```

Only `REQUEST_ACCESS_CODE` and `GITHUB_TOKEN` are required for the access-request API. The rest support content displayed in the UI.

## Feedback
If you spot an issue or have feedback, feel free to open an issue or reach out directly.

Thanks for checking out my codebase.
