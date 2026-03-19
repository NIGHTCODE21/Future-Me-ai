export const createLetter = async (data: {
  email: string;
  content: string;
  deliveryDate: string;
}) => {
  const res = await fetch("http://localhost:5000/letters/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
