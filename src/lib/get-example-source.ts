import fs from "fs";
import path from "path";

const EXAMPLES_DIR = path.join(
  process.cwd(),
  "src/app/docs/_components/examples"
);

export function getExampleSource(filename: string): string {
  const filePath = path.join(EXAMPLES_DIR, filename);
  const source = fs.readFileSync(filePath, "utf-8");

  // Clean up the source for display:
  // 1. Remove "use client" directive
  // 2. Replace registry imports with user-facing imports
  return source
    .replace(/"use client";\n\n?/, "")
    .replace(/@\/registry\/map/g, "@/components/map");
}
