async function createUser(name) {
  const res = await fetch(`http://netcraft-hackathon.herokuapp.com/register`, {
    method: "POST",

    body: JSON.stringify({
      name,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export { createUser };
