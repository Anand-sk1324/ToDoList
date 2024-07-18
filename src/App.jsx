import ToDoApp from "./components/ToDoApp";
import Box from "@mui/material/Box";
const App = () => {
    return (
        <Box my={4} display="flex" justifyContent="center" boxSizing="border-box">
            <ToDoApp />
        </Box>
    );
};

export default App;
