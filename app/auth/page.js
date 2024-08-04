'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Button, TextField, Typography } from "@mui/material";
import { auth } from "@/firebase"; // Importing the auth instance from your Firebase configuration

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // Function to handle authentication
  const handleAuth = async () => {
    try {
      if (isLogin) {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Create new user
        await createUserWithEmailAndPassword(auth, email, password);
      }
      // Redirect to the homepage upon successful authentication
      router.push("./pantry");
    } catch (error) {
      console.error("Authentication error", error);
    }
  };
  
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#f0f0f0"
    >
      <Typography variant="h4" mb={3}>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        margin="normal"
      />
      <Button variant="contained" onClick={handleAuth} >
        {isLogin ? "Login" : "Sign Up"}
      </Button>
      <Button variant="text" onClick={() => setIsLogin(!isLogin)} fullWidth>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </Button>
    </Box>
  );
}
