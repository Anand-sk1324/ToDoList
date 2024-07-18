import Typography from "@mui/material/Typography";
import ToDoList from "./ToDoList";
import Box from "@mui/material/Box";
const ToDoApp = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" component="h1">
                To Do List
            </Typography>
            <ToDoList />
        </Box>
    );
};

export default ToDoApp;
