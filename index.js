#!/usr/bin/env node

const simpleGit = require('simple-git');
const moment = require('moment');
const path = require('path');
const fs = require('fs');

const [,, targetRepo] = process.argv;
if (!targetRepo) {
  console.log("Please provide a path to the Git repo.\nExample: gityear ~/my-repo");
  process.exit(1);
}

const fullPath = path.resolve(targetRepo);
const git = simpleGit(fullPath);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(async () => {
  if (!fs.existsSync(path.join(fullPath, '.git'))) {
    console.log("This is not a valid git repo. Please initialize it first.");
    return;
  }

  console.log("Starting fake commits to", fullPath);

  const totalDays = 365;
  for (let i = 0; i < totalDays; i++) {
    const commitCount = randomInt(0, 5); // 0 to 5 commits per day
    const date = moment().subtract(i, 'days').format();

    for (let j = 0; j < commitCount; j++) {
      const time = moment(date).add(randomInt(0, 23), 'hours').add(randomInt(0, 59), 'minutes').format();
      const msg = `Commit on ${time}`;
      const filePath = path.join(fullPath, 'data.json');

      fs.writeFileSync(filePath, JSON.stringify({ date: time }));

      try {
        await git.add(filePath);
        await git.commit(msg, filePath, { '--date': time });
        console.log("Committed:", msg);
      } catch (err) {
        console.log("Commit failed:", err.message);
      }
    }
  }

  try {
    await git.push();
    console.log("Push successful!");
  } catch (err) {
    console.log("Push failed:", err.message);
  }
})();
