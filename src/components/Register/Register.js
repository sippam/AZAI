// import React, { useState } from "react";
// import { supabase } from "../../lib/supabase/supabaseClient";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signUpNewUser = async () => {
//     try {
//       const { user, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           // Specify the URL to redirect after email confirmation
//           emailRedirectTo: "http://localhost:3000/",
//         },
//       });

//       if (error) {
//         console.error("Error signing up:", error.message);
//       }
//     } catch (error) {
//       console.error("Error signing up:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           signUpNewUser();
//         }}
//       >
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
