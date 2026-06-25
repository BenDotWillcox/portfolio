const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "src", "assets", "hoopstats");
const target = path.join(root, "dist", "assets", "hoopstats");

if (!fs.existsSync(source)) {
  throw new Error(`HoopStats asset source does not exist: ${source}`);
}

fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.cpSync(source, target, { recursive: true });

console.log(`Copied HoopStats assets to ${path.relative(root, target)}`);
