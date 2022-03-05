import fs from "fs/promises";
import path from "path";

export async function getData(category) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const data = await fs.readFile(filePath);
  const destinationData = JSON.parse(data);
  return destinationData[category];
}

export async function findData(category , name ) {
  const data = await getData(category , name ); 

  const findedData = data.find((item) => item.name.toLowerCase() === name);
  return findedData;
}
