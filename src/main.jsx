import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import App from "./App";
import './index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
       <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            <div className="cursor-none">
  <SmoothCursor />
  <App />
</div>
          
          </ThemeProvider> 
      
    </BrowserRouter>
  </React.StrictMode>
);
 