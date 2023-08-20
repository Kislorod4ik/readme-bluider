const fs = require('fs');

const {
    HOME,
    GITHUB_WORKSPACE
} = process.env;

const importRegex = /<import>(.*?)<\/import>/g;


const run = () => {
    console.log("----------------------------------------------------------------");
    console.log(`🚀 Readme-Wiki builder (by Kislorod4ik)`);
    console.log("----------------------------------------------------------------");
    const source = getSource("./README_SOURCE.md");
    fs.writeFileSync("./README.md", build(source));
}

const build = (source) => {
    const imports = new Set(source.match(importRegex));
    for (const import_ of imports) {
        const [, path] = importRegex.exec(import_);
        source = source.replaceAll(import_, build(getSource(path)));
    }
    return source;
}

const getSource = (path) => {
    if (fs.existsSync(path)) {
        const stats = fs.statSync(path);
        if (stats.isFile()) {
            return fs.readFileSync(path, {encoding: "utf8"});
        }
        else  {
            return `ReadmeBuilder("${path}" is not a file)`;
        }
    }
    else {
        return `ReadmeBuilder(File "${path}" not found)`;
    }
}

run();