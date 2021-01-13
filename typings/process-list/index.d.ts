type Task = {
  pid: number; // process pid
  ppid: number; // parent process pid
  name: string; // process name (title)
  path: string; // full path to the process binary file
  threads: number; // threads per process
  owner: string; // the owner of the process
  priority: number; // an os-specific process priority
  cmdline: string; // full command line of the process
  starttime: Date; // the process start date / time
  vmem: string; // virtual memory size in bytes used by process
  pmem: string; // physical memory size in bytes used by process
  cpu: number; // cpu usage by process in percent
  utime: string; // amount of time in ms that this process has been scheduled in user mode
  stime: string; // amount of time that in ms this process has been scheduled in kernel mode
};

type AllowedField =
  | "pid"
  | "ppid"
  | "name"
  | "path"
  | "threads"
  | "owener"
  | "priority"
  | "cmdline"
  | "starttime"
  | "vmem"
  | "pmem"
  | "cpu"
  | "utime"
  | "stime";

declare module "process-list" {
  export type { Task };
  export function snapshot(...field: AllowedField[]): Promise<Task[]>;
}
