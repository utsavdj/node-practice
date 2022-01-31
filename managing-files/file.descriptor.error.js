const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  // console.log(fd);
  // fs.closeSync(fd);
  // fs.close(fd, () => {});

  // Anytime we use file descriptor we are responsible to close it, if not we are risk at opening too
  // many files and crashing our application
}
