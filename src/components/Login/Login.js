// import React, { useState } from "react";
// import { useAuth } from "../../lib/authcontext/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { signIn } = useAuth();

//   const signInExistingUser = async () => {
//     try {
//       const user = await signIn(email, password);
//       console.log("User:", user);
//     } catch (error) {
//       console.error("Error signing in:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           signInExistingUser();
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
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
