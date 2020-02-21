var { PythonShell } = require("python-shell");

var options = {
  mode: "text",
  encoding: "utf8",
  pythonOptions: ["-u"],
  scriptPath: "./",
  args: ["Camilla", "Martins"]
};

var test = new PythonShell("speechRecognize.py", options);
test.on("message", function(message) {
  console.log(message);
});
