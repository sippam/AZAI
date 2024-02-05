// // Create a new file, e.g., AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { supabase } from "../supabase/supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if there's an authenticated user on mount
//     supabase.auth.getSession().then(({ data: { session } }) => {
//         setUser(session)
//       })

//     // Subscribe to auth state changes to keep the context updated
//     const {
//         data: { subscription },
//       } = supabase.auth.onAuthStateChange((_event, session) => {
//         setUser(session)
//       })

//     // Cleanup the listener when the component unmounts
//     return () => subscription.unsubscribe()
//   }, []);

//   const value = {
//     user,
//     signIn: async (email, password) => {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });
//       if (error) {
//         console.error("Error signing in:", error.message);
//         return;
//       }
//       return data.user;
//     },
//     signOut: async () => {
//       // Your sign-out logic here
//     },
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
