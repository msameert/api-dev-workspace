import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true
            }
        }
    }
});
/* 
This solves a massive problem in web development called CORS (Cross-Origin Resource Sharing).
By default, your React app runs on one port (usually http://localhost:5173) and your backend runs on another (http://localhost:5000). Browsers hate it when two different ports try to talk to each other and will often block them.
The proxy settings bypass this entirely:
• "/api": This is a filter. It tells Vite: "Keep an eye out. If my React app tries to fetch any URL that starts with /api, trigger this rule."
• target: "http://localhost:5000": This is the destination. Vite catches that /api request and quietly forwards it to your Node.js backend backend.
• changeOrigin: true: This tricks your backend into thinking the request came directly from its own server, preventing security blocks.

*/