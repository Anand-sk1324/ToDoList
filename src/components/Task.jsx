import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Checkbox,
    Divider,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Task = ({ task, handleDelete }) => {
    const [isFinished, setIsFinished] = useState(false);
    console.log(task);
    return (
        <>
        <ListItem
            sx={{
                "& .hideable": { visibility: "hidden" },
                "&:hover .hideable": { visibility: "visible" },
            }}
            disabled={isFinished}
        >
            <ListItemText primary={task.name} />
            <IconButton
                className="hideable"
                onClick={handleDelete}
            >
                <DeleteIcon color="error" />
            </IconButton>
            <Checkbox
                checked={isFinished}
                onChange={() => setIsFinished(!isFinished)}
            />
        </ListItem>
        <Divider />
        </>
    );
};

export default Task;
