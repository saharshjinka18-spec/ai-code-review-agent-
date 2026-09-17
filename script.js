function analyzeCode() {
  const code = document.getElementById("codeInput").value;
  let result = "";

  if (code.includes("password")) {
    result += "🔴 Critical: Hardcoded password detected.<br>";
  }

  if (code.includes("SELECT")) {
    result += "🟠 High: Possible SQL Injection risk.<br>";
  }

  if (code.includes("printf")) {
    result += "🟡 Low: Review input validation.<br>";
  }

  if (result === "") {
    result = "✅ No obvious issues found in demo analysis.";
  }

  document.getElementById("results").innerHTML = result;
}
