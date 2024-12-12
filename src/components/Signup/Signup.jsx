import React, { useState } from "react";
import { supabase } from "../../supabase/supabase";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
//   Signup function
  const signupHandler = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (data) {
        console.log("User signed up successfully:", data);
      } else if (error) {
        console.error("Error signing up user:", error);
      }
    } catch (error) {
      console.log("Error signing up user -->", error);
    }
  };
  return <div>signup</div>;
};

export default signup;
