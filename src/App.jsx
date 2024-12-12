import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { supabase } from "./supabase/supabase";
function App() {
  useEffect(() => {
    const checUser = async () => {
      const { data: session } = await supabase.auth.getSession();

      if (session) {
        console.log("User is logged in:", session.user);
        // Redirect or show home page
      } else {
        console.log("No user is logged in");
        // Redirect to login/signup page
      }
    };
    checUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
