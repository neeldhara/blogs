---
title: "Academic Writing with Obsidian and Pandoc"
description: "A complete workflow for academic papers - from notes to publication-ready PDFs."
pubDate: "Feb 12 2024"
image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&auto=format&fit=crop&q=60"
authorImage: "/avatar/avatar1.png"
authorName: "Neeldhara"
---

# Academic Writing with Obsidian and Pandoc

Transform your scattered research notes into beautiful academic papers with this workflow.

## The Setup

- **Obsidian**: For note-taking and knowledge management
- **Pandoc**: For document conversion
- **LaTeX**: For typesetting
- **Zotero**: For reference management

## The Magic Command

```bash
pandoc paper.md \
  --filter pandoc-citeproc \
  --bibliography=refs.bib \
  --template=academic.tex \
  -o paper.pdf
```

## Templates for Everything

From conference submissions to journal articles, templates ensure consistency and save time.

## Version Control Integration

Git + Obsidian = perfect history of your thinking process.

## The Result

From messy notes to camera-ready PDF in minutes, not hours.
