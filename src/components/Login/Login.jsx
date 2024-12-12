import React, { useState } from 'react'

const login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      //   Signup function
      const loginHandler = async () => {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
          if (data) {
            console.log("User Login successfully:", data);
          } else if (error) {
            console.error("Error Login user:", error);
          }
        } catch (error) {
          console.log("Error Login user -->", error);
        }
      };
  return (
    <div>login</div>
  )
}

export default login