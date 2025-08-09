---
title: "Git Workflows That Save My Sanity"
description: "Automation scripts and Git hooks that eliminate repetitive tasks and prevent common mistakes."
pubDate: "Jan 22 2024"
image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&auto=format&fit=crop&q=60"
authorImage: "/avatar/avatar1.png"
authorName: "Neeldhara"
---

# Git Workflows That Save My Sanity

After years of Git mishaps, I've built workflows that prevent disasters and save hours weekly.

## The Pre-commit Hook That Saves Embarrassment

```bash
#!/bin/bash
# Check for debugging statements
if grep -r "console.log\|debugger\|TODO" --include="*.js" .; then
  echo "⚠️  Debugging statements found!"
  exit 1
fi
```

## Automatic Branch Naming

```bash
alias feature='git checkout -b feature/$(date +%Y%m%d)-$1'
```

Now `feature "user-auth"` creates `feature/20240122-user-auth`.

## The Commit Message Template

```
[TYPE] Brief description

Why:
- Context for this change

What:
- Specific changes made

Testing:
- How to verify it works
```

## The Weekly Cleanup Script

Deletes merged branches, prunes remotes, and garbage collects. Keeps the repo clean and fast.

## ROI

These automations save ~5 hours per week and countless prevented mistakes. The time invested in setting them up paid back in days.
