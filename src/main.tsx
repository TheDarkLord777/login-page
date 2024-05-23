import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import SelectPage from "./pages/SelectPage/SelectPage";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AdminFermer from "./pages/AdminFermer/AdminFermer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminTomorqa from "./pages/AdminTomorqa/AdminTomorqa.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <GoogleReCaptchaProvider reCaptchaKey="6LdJspgpAAAAAHMj16ir-BnWxq0WEQjjxqI5sPt8">
              <Login />
            </GoogleReCaptchaProvider>
          }
        />

        <Route path="/fermerlar" element={<AdminFermer />} />
        <Route path="/tomorqa" element={<AdminTomorqa />} />
        <Route path="/select-platform" element={<SelectPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
