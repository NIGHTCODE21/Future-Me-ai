const Response = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>✨ AI Message</h3>
      <p>{message}</p>
    </div>
  );
};

export default Response;
