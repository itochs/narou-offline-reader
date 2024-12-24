import fs from "fs";

function saveJson(jsonifyitem, name) {
  const data = JSON.stringify(jsonifyitem);
  fs.writeFileSync(`assets/${name}.json`, data);
}

export { saveJson };
