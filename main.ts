import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I asked the universe for a sign, got a 'wet floor' sign, and still slipped.";

function validateEntry(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
  }
  if (trimmed !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  return trimmed;
}

const validated = validateEntry(entry);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", validated, "utf8");
