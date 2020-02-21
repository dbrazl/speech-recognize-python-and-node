var { PythonShell } = require("python-shell");

var options = {
  mode: "text",
  encoding: "utf8",
  pythonOptions: ["-u"],
  scriptPath: "./",
  args: [""]
};

var test = new PythonShell("speechRecognize.py", options);
test.on("message", function(message) {
  console.log(message);
});
