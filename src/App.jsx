import React, { useState } from "react";
import viteLogo from "./vite.svg";
import "./App.css";
import { Box, Button, Link } from "@mui/material";
import Test from "./templates/Test.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ background: (theme) => theme.palette.primary.main }}>
        <Link href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Test />
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          {/* <img src={react} className="logo react" alt="React logo" /> */}
        </a>
      </Box>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="outlined" color="secondary" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
