/* eslint-disable react-hooks/rules-of-hooks */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history("/home");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        setError(error.code);
      });
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setError(error.code);
    }, 2000);
    return () => clearTimeout(time);
  }, [error]);

  return (
    <div className="sign-in-container">
      {error && <div>{error}</div>}
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default login;
