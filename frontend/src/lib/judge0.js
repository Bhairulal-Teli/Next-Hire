// FREE Judge0 COMMUNITY ENDPOINT
const JUDGE0_API = "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";

// Map languages to Judge0 language IDs
const LANGUAGE_IDS = {
  javascript: 63, // Node.js 18
  python: 71,     // Python 3.10
  java: 62,       // Java 15
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 */
export async function executeCode(language, code) {
  const languageId = LANGUAGE_IDS[language];
  if (!languageId) {
    return { success: false, error: `Unsupported language: ${language}` };
  }

  try {
    const response = await fetch(JUDGE0_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: code,
        stdin: "",
      }),
    });

    if (!response.ok) {
      return { success: false, error: `HTTP error! status: ${response.status}` };
    }

    const data = await response.json();
    const output = data.stdout || "";
    const stderr = data.stderr || "";

    if (stderr) {
      return { success: false, output, error: stderr };
    }

    return { success: true, output: output || "No output" };
  } catch (err) {
    return { success: false, error: `HTTP error: ${err.message}` };
  }
}