/* eslint-disable react-hooks/rules-of-hooks */
import { signOut } from "firebase/auth";

import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

function home() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>SignOut</button>
      <h1>welcome</h1>
    </div>
  );
}
export default home;
