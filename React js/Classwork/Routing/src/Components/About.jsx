import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function About() {
  const Navigate = useNavigate();

  const param = useParams();
  console.log(param);

  const handleNavigate = () => {
    Navigate("/", { replace: true, state: { name: "Pari" } });
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleNavigate}>Go to home</button>
    </div>
  );
}
