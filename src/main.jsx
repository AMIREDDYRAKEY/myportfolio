import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TagManager from 'react-gtm-module';

// Initialize GTM
TagManager.initialize({ gtmId: 'GTM-NC88W7HX' });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App className="bg-[#212428]" />
  </StrictMode>
);
