import { useState } from "react";
import { createLetter } from "../services/api";

const Form = ({ setResponse }: any) => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleSubmit = async () => {
    if (!email || !content || !deliveryDate) {
      return alert("All fields required");
    }

    const data = await createLetter({ email, content, deliveryDate });
    setResponse(data.aiMessage);
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Write your message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br /><br />

      <input
        type="datetime-local"
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Schedule Letter 🚀</button>
    </div>
  );
};

export default Form;
