import { snapshot } from "process-list";

const getProcessList = () => {
  const tasks = snapshot("pid", "name", "path").then((tasks: any) => {
    console.log(tasks);
  });
};

getProcessList();
