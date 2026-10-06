# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic homepage for Zehong Wang, deployed to GitHub Pages at https://zehong-wang.github.io. Built on the [luost26/academic-homepage](https://github.com/luost26/academic-homepage) template.

## Development Commands

```bash
bundle install              # Install Ruby dependencies
bundle exec jekyll serve    # Local dev server (auto-rebuilds on changes, but NOT on _config.yml changes)
```

Note: Changes to `_config.yml` require restarting the server.

## Architecture

### Data-Driven Content System

All site content is managed through YAML data files and Markdown front matter — no hardcoded content in templates.

- `_data/profile.yml` — Bio, positions, education, experience, awards, social links
- `_data/display.yml` — Toggle visibility of homepage sections, news item count, footer text
- `_data/navigation.yml` — Top navbar pages
- `_data/authors.yml` — Author database mapping shortnames to full name/URL/boldface styling

### Collections (in `_config.yml`)

- `_publications/` — One Markdown file per paper, organized by year subdirectories (2023–2026). Content is purely front matter (no body needed).
- `_news/` — Announcement Markdown files with title and date front matter.
- `_showcase/` — Portfolio items organized by group subdirectories.

### Publication Front Matter Schema

```yaml
title: "Paper Title"
date: 2025-01-01          # Used for sorting
selected: true             # Show on homepage
type: "preprint"           # "preprint", "survey", "tutorial", or omit for regular
pub: "Venue Name"
pub_date: "2025"
cover: /assets/images/covers/filename.png
authors:
  - First Author*          # * = equal contribution
  - <b>Highlighted Author</b>#  # <b> = bold, # = corresponding author
links:
  Paper: https://...
  Code: https://...
tldr: "One-line summary"
abstract: "Full abstract"
semantic_scholar_id: "id"  # Enables citation count badge
```

### Template Structure

- `_layouts/default.html` — Main page layout wrapping all pages
- `_includes/widgets/` — Reusable Liquid components:
  - `profile_card.html` — Hero section with bio and social links
  - `publication_card.html` / `publication_item.html` — Publication list and individual entries
  - `news_card.html` — News timeline
  - `experience_card.html` — Education, experience, awards sections
  - `author_list.html` — Parses author annotations (*, #, `<b>`) and links to `authors.yml`

### Frontend Stack

All dependencies loaded via CDN (no npm/node): Bootstrap 4.6, Font Awesome 6.5, jQuery 3.5, KaTeX, Masonry.

Key JS files in `assets/js/`:
- `common.js` — Lazy loading, tooltips, masonry init, abstract toggle
- `semantic_scholar_citation_count.js` — Fetches/caches citation counts from Semantic Scholar API (localStorage, 1-hour TTL)
- `bubble_visual_hash.js` — Generates MD5-based visual avatars for publications without cover images

### Pages

- `index.html` — Homepage (profile, selected publications, news, experience)
- `publications.html` — Full publication list grouped by year, preprints separate
- `showcase.html` — Portfolio grid with masonry layout

## Deployment

Automatic via GitHub Pages (pages-build-deployment action). Push to `main` triggers a rebuild.
