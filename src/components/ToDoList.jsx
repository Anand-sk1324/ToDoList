import List from "@mui/material/List";
import CreateTask from "./CreateTask";
import Task from "./Task";

import { create } from "zustand";

const useStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    delTask: (task) => {
        console.log(task);
        set((state) => ({
            tasks: state.tasks.filter((t) => t.id !== task.id),
        }));
    },
}));
const ToDoList = () => {
    const { tasks, addTask, delTask } = useStore();
    return (
        <List>
            <CreateTask addTask={addTask} />
            {tasks.map((task) => {
                console.log(tasks, task);
                return (
                    <Task
                        key={task.id}
                        task={task}
                        handleDelete={() => delTask(task)}
                    />
                );
            })}
        </List>
    );
};

export default ToDoList;
