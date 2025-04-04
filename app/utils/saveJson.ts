import fs from "fs";
import path from "path";

export function saveJson(
  data: unknown,
  filePath: string = "/constants/mocks/youtubeData.json"
) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync(fullPath, json, "utf-8");

    console.log(`✅ JSON saved to ${fullPath}`);
  } catch (error) {
    console.error(`❌ Failed to save JSON:`, error);
  }
}
