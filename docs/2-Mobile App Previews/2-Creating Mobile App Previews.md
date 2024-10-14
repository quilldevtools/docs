---
slug: /creating-mobile-app-previews
---

To create a mobile app Preview, follow these steps:

### 1. Set Up Quill GitHub Action

You need to add the Quill GitHub Action to your repository’s GitHub workflow file. This will automate the generation of PR previews.

### 2. Modify Your Workflow File

Add the following to your `.github/workflows/your-workflow-file.yml`:

```yaml
name: Build and Deploy APK to Quill

on:
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up JDK
        uses: actions/setup-java@v1
        with:
          java-version: "11"

      # Sample step to build your APK. This depends on the framework you are uusing eg.flutter
      - name: Build APK
        run: ./gradlew assembleDebug

      - name: Upload APK to Quill
        uses: quilldevtools/preview@v2
        with:
          api_key: ${{ secrets.QUILL_API_KEY }}
          pkg-name: "com.example"
          apk_path: "./app/build/outputs/apk/debug/app-debug.apk"
```

### PR Details View:

- **Screenshots & Annotations:**  
  Capture screenshots, annotate them, and post comments directly from the emulator.

- **Network Logs:**  
  Developers can access network logs to debug API requests during the PR review.
