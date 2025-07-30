const path = require("path");

// 1. Directory Name
console.log(`Directory name: ${path.dirname(__filename)}`);

// 2. File Name
console.log(`File name: ${path.basename(__filename)}`);

// 3. File Extension
console.log("file extension", path.extname(__filename));

// 4. Joining Paths
const joinPath = path.join("/user", "documents", "projects", "node");
console.log(`Joined Path: ${joinPath}`);

// 5. Resolving Paths
const resolvePath = path.join("/user", "documents", "projects", "node");
console.log(`Resolved Path: ${resolvePath}`);

// 6. Normalizing Paths
const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);
