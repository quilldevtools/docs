<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://getquill.dev">
    <img src="https://firebasestorage.googleapis.com/v0/b/quill-landing-page.appspot.com/o/quill%2Flogo.png?alt=media" alt="Logo" width="120">
  </a>

  <h2 align="center">Quill Docs</h3>

  <p align="center">
    Simplify Mobile App Reviews
    <br />
    <a href="https://docs.getquill.dev"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://getquill.dev">View Website</a>
    ·
    <a href="https://github.com/quilldevtools/docs/issues">Report Bug</a>
    ·
    <a href="https://github.com/quilldevtools/docs/issues">Request Feature</a>
  </p>
</p>

---

Quill transforms how teams collaborate on mobile projects by providing a web-based solution for seamless PR reviews,
reducing friction and saving time.

![Screencast](.github/screencast.gif)

# Quill Documentation

Welcome to Quill! This guide will help you get started with Quill, from account creation to integrating your repositories and providing feedback on mobile app Pull Requests (PRs).

---

## Table of Contents

1. [Introduction to Quill](#1-introduction-to-quill)
2. [Creating an Account](#2-creating-an-account)
   - [Step 1: Sign Up](#step-1-sign-up)
   - [Step 2: Set Up Your Workspace](#step-2-set-up-your-workspace)
3. [Connecting Repositories](#3-connecting-repositories)
   - [Step 1: GitHub Integration](#step-1-github-integration)
   - [Step 2: Managing Multiple Git Hosts](#step-2-managing-multiple-git-hosts)
4. [Creating Pull Request Previews](#4-creating-pull-request-previews)
   - [PR Details View](#pr-details-view)
5. [Inviting Team Members](#5-inviting-team-members)
   - [Step 1: Send Invitations](#step-1-send-invitations)
   - [Step 2: Role Management](#step-2-role-management)
6. [Providing Feedback](#6-providing-feedback)
7. [Integrating Slack and JIRA](#7-integrating-slack-and-jira)
8. [Frequently Asked Questions (FAQ)](#8-frequently-asked-questions-faq)
9. [Troubleshooting Guide](#9-troubleshooting-guide)

## Table of Contents

1. [Introduction to Quill](docs/getting-started/introduction.md)
2. [Creating an Account](docs/getting-started/creating-account.md)
   - [Step 1: Sign Up](#step-1-sign-up)
   - [Step 2: Set Up Your Workspace](#step-2-set-up-your-workspace)
3. [Connecting Repositories](docs/getting-started/connecting-repositories.md)
   - [Step 1: GitHub Integration](#step-1-github-integration)
   - [Step 2: Managing Multiple Git Hosts](#step-2-managing-multiple-git-hosts)
4. [Creating Pull Request Previews](docs/pull-request-previews/creating-pr-previews.md)
   - [PR Details View](#pr-details-view)
5. [Inviting Team Members](docs/team-management/inviting-team-members.md)
   - [Step 1: Send Invitations](#step-1-send-invitations)
   - [Step 2: Role Management](#step-2-role-management)
6. [Providing Feedback](docs/providing-feedback.md)
7. [Integrating Slack and JIRA](docs/integrations/integrating-slack-jira.md)
8. [Frequently Asked Questions (FAQ)](docs/help/faq.md)
9. [Troubleshooting Guide](docs/help/troubleshooting-guide.md)

## Table of Contents

1. [Introduction to Quill](#1-introduction-to-quill)
2. [Creating an Account](docs/creating-account.md)
3. [Connecting Repositories](docs/connecting-repositories.md)
4. [Creating Pull Request Previews](docs/creating-pr-previews.md)
5. [Inviting Team Members](docs/inviting-team-members.md)
6. [Providing Feedback](docs/providing-feedback.md)
7. [Integrating Slack and JIRA](docs/integrating-slack-jira.md)
8. [Frequently Asked Questions (FAQ)](docs/faq.md)
9. [Troubleshooting Guide](docs/troubleshooting-guide.md)

---

## 1. Introduction to Quill

Quill is a web-based mobile emulator designed to help development teams review mobile app Pull Requests (PRs) effortlessly. By providing an online emulator with real-time feedback features, Quill eliminates the need for sharing APKs or manually setting up local environments.

### Key Features:

- Preview mobile app PRs directly on the web.
- Capture and annotate screenshots from the emulator.
- Provide feedback, track issues, and integrate with Slack or JIRA (coming soon).
- Network logs to monitor API interactions during reviews.

---

## 2. Creating an Account

### Step 1: Sign Up

Head over to [Quill's website](#) and sign up for a free account. You’ll need to provide a valid email address and set up your workspace.

### Step 2: Set Up Your Workspace

Upon signing in, you will be prompted to create a workspace. Workspaces allow you to organize repositories and invite your team members.

---

## 3. Connecting Repositories

### Step 1: GitHub Integration

Navigate to the _Settings_ page and integrate your GitHub account with Quill. Follow these steps:

1. Click on the **GitHub Integration** tab.
2. Authorize Quill to access your repositories.
3. Select the repositories you want to link to Quill.

### Step 2: Managing Multiple Git Hosts

Quill supports multiple Git host providers. After integrating with GitHub, you can also add connections to GitLab or Bitbucket. Simply:

1. Go to _Settings_ > **Git Providers**.
2. Add the respective Git host and authenticate access.

---

## 4. Creating Pull Request Previews

Once your repository is connected, any open PRs will automatically appear on your dashboard. You can:

1. Click on a PR to load the mobile emulator with the latest build.
2. View the app’s interface and start testing as if you were using a physical device.

### PR Details View:

- **Screenshots & Annotations:**  
  Capture screenshots, annotate them, and post comments directly from the emulator.

- **Network Logs:**  
  Developers can access network logs to debug API requests during the PR review.

---

## 5. Inviting Team Members

### Step 1: Send Invitations

From your workspace, navigate to the _Members_ tab and click **Invite Members**. You can add individual email addresses or bulk invite multiple team members.

### Step 2: Role Management

Assign roles to your team members (e.g., Admin, Developer, Viewer) to manage permissions within your workspace.

---

## 6. Providing Feedback

Once a PR is loaded in the emulator:

1. **Capture & Annotate Screenshots:**  
   Use the annotation tool to highlight issues in the app interface.
2. **Post Comments:**  
   Leave comments directly on the PR using the built-in feedback tool.

3. **Track Issues:**  
   Keep track of all feedback and issues in the PR. Quill will soon allow direct integration with issue management tools like JIRA.

---

## 7. Integrating Slack and JIRA

Quill allows seamless integration with tools your team already uses:

- **Slack:**

  - In the _Settings_ tab, navigate to **Slack Integration**.
  - Follow the OAuth flow to connect your Slack workspace.
  - You’ll be able to receive notifications for PR updates directly in Slack.

- **JIRA:** (Coming Soon)
  - Quill will soon allow you to create and track issues in JIRA without leaving the platform.

---

## 8. Frequently Asked Questions (FAQ)

- **Can I use Quill with private repositories?**  
  Yes, Quill supports private repositories as long as you have authorized access through GitHub, GitLab, or Bitbucket.

- **How does Quill handle security?**  
  Quill uses OAuth and industry-standard encryption to ensure your data is secure.

- **What should I do if my emulator isn’t loading a PR?**
  - Check if the repository is properly linked in your workspace.
  - Ensure the PR has been successfully built.
  - Refer to our [Troubleshooting Guide](#9-troubleshooting-guide).

---

## 9. Troubleshooting Guide

- **PR Preview Not Loading:**

  1. Ensure your repository is linked to Quill.
  2. Check if the Pull Request build completed successfully.
  3. Clear browser cache and try reloading the preview.

- **Slack Integration Issues:**

  - Confirm your OAuth settings are correct in the _Settings_ tab.
  - Verify that Slack has the required permissions.

- **Missing Network Logs:**
  - Check if the PR build included network logging.
  - Ensure your API requests are hitting the proper endpoints during review.

---

### This documentation is built With

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
