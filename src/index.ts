import { snapshot } from "process-list";

const getProcessList = () => {
  const tasks = snapshot("pid", "ppid", "name", "path", "cmdline").then(
    (tasks: any) => {
      tasks.map((task: any) => {
        console.log(`task: ${JSON.stringify(task)}`);
      });
    }
  );
};

getProcessList();
