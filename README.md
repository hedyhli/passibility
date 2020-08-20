# Passibility Action ;)

You can choose to make this action fail all the time, pass all the time, and anything in between!

### Example workflow

```yaml
name: "Will I Pass..."
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: hedythedev/passibility@main
        with:
          percentage: 50
```

This workflow will run every time a commit is pushed, and will have a 50/50 chance of passing.

Or, you can use it in your existing workflow to try your luck:

```yaml
      - uses: hedythedev/passibility@main
        with:
          percentage: 50
```

### Inputs

**`percentage`**

The controlled percentage probability of this action from passing.

If you put it to anything equal or higher than 100, the action will always pass.
