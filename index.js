const { spawn } = require("child_process");

// Change this to the path of your binary or command
const binaryPath = "./mcp-atlassian"; // e.g., '/usr/bin/ls' or './my_program'
const args = [
  "--env-file",
  "jira.mcp.env",
  "--transport",
  "sse",
  "--port",
  "9000",
  "-v",
]; // Add any arguments you want to pass

// Spawn the process
const child = spawn(binaryPath, args, {
  stdio: "inherit", // Directly uses parent stdio (stdout, stderr, stdin)
  shell: false, // Set to true if you want to run the binary in a shell
});

// Handle errors
child.on("error", (err) => {
  console.error(`Failed to start process: ${err.message}`);
});

// Handle exit
child.on("exit", (code, signal) => {
  if (code !== null) {
    console.log(`Process exited with code ${code}`);
  } else {
    console.log(`Process was killed with signal ${signal}`);
  }
});
