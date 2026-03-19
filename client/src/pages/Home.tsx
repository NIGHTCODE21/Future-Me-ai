import { useState } from "react";
import Form from "../components/Form";
import Response from "../components/Response";

const Home = () => {
  const [response, setResponse] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Future Me AI 💌</h1>
      <Form setResponse={setResponse} />
      <Response message={response} />
    </div>
  );
};

export default Home;
