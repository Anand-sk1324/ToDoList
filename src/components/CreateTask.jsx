import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const CreateTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        addTask({
            name: newTask,
            id: uuidv4(),
        });
        setNewTask("");
    };
    return (
        <ListItem disablePadding>
            <TextField
                label="Add Task"
                variant="outlined"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleAddTask}>
                                <Add />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </ListItem>
    );
};

export default CreateTask;
