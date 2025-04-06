
# gityear
Randomly generate git commits across the past year to make your GitHub contribution graph look active.

---

## Installation

```bash
npm i -g gityear
```

---

## Usage
- First create your repo on github with README.md
- Clone it into your device.
- Then run below command.

```bash
gityear /your_clone_repo
```

This will:
- Randomly commit 1–10 times on random days from the past year to today
- Push to your remote GitHub repo
- Show progress for each commit and final push

---

## How it works?

- It writes a temporary value to your repo (e.g., date/time)
- Commits using that date via the `--date` flag
- Pushes all commits to GitHub

> No extra files. Clean and simple.

---

## Why?

- Make your GitHub contribution graph look more "active"
- Helpful for testing GitHub visualizations or contribution heatmaps

---

## Important Notes

- The target directory **must be a valid Git repository**
- Make sure your GitHub remote (`origin`) is set and authenticated
- Contributions will only show for dates when:
  - Commit email matches your GitHub email
  - Commits are pushed to GitHub

---

## Author

Made with love by [@mukhtaransarii](https://github.com/mukhtaransarii)

**Thanks to [Mr. Mukhtar Alam](https://instagram.com/ii.bbs) for this simple & useful tool.**

---

## License

MIT
```