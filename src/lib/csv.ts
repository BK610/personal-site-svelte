/**
 * Parses a CSV line, handling quoted values that may contain commas.
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      // Handle escaped quotes ("")
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Converts CSV text to a JSON array of objects.
 * Uses the first row as headers; each subsequent row becomes an object with header keys.
 */
export function csvToJson<T = Record<string, string>>(csvText: string): T[] {
  const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];

  const headers = parseCSVLine(lines[0]);
  const data: T[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const obj = {} as Record<string, string>;

    headers.forEach((header, idx) => {
      obj[header] = values[idx] ?? "";
    });

    data.push(obj as T);
  }

  return data;
}
