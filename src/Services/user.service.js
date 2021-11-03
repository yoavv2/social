async function createUser(name) {
  const res = fetch(`http://netcraft-hackathon.herokuapp.com/register`, {
    method: "POST",
    body: name,
    headers: { "Content-Type": "application-json" },
  });
  return res.json();
}

export { createUser };
