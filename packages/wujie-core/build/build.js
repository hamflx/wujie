const exec = require('child_process').exec;
const os = require('os');

function puts(error, stdout, stderr) {
  if (stdout) {
    console.log(stdout)
  }
  if (stderr) {
    console.error(stderr)
  }
}

// Run command depending on the OS
if (os.type() === 'Windows_NT') {
  exec(`powershell -File "${__dirname}/build.ps1"`, puts);
} else if (os.type() === 'Linux') {
  exec(`bash "${__dirname}/build.sh"`, puts);
} else {
  throw new Error("Unsupported OS found: " + os.type());
}
