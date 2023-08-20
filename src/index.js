const fs = require('fs');

const {
    HOME,
    GITHUB_WORKSPACE
} = process.env;

const run = () => {
    console.log("----------------------------------------------------------------");
    console.log(`🚀 Readme-Wiki builder (by Kislorod4ik)`);
    console.log("----------------------------------------------------------------");
    fs.readdirSync('.').forEach(console.log)
}

run();