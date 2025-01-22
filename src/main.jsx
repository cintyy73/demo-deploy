import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext.jsx";

createRoot(document.getElementById("root")).render(
 <BrowserRouter> 
 <AuthProvider>
    <ChakraProvider>
        <App />
    </ChakraProvider>

 </AuthProvider>
  </BrowserRouter>
);
