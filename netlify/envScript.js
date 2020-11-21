const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `APP_TOKEN=${process.env.APP_TOKEN}\n`
);
