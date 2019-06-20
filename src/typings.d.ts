import Process = NodeJS.Process;

interface Window {
  require: NodeRequire;
  process: Process;
}
