---
slug: /creating-mobile-app-previews-for-main-branch
---

Previews built for your main branch are different from previews built from Pull Requests. Previews from the main branch
let you know what the latest approved app features look like. This kind of preview is needed to create Quill Flows,
which are no-code UI tests for your app.
To create a mobile app Preview for your main branch, you need to follow the steps to
[Create Mobile App Previews](/creating-mobile-app-previews)

Ensure to include the following in your workflow file:

```yaml
# ... previous workflow file configurations
on:
  # This will enable the creation of no-code UI tests for your mobile app.
  # Tests are created against the latest app on the main branch
  push:
    branches:
      - "main" # Change to the name of your main branch as needed

# The rest of the workflow file here ...
```
