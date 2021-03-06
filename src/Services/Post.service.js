async function create(form) {
  const res = await fetch("http://netcraft-hackathon.herokuapp.com/post", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

async function getFeed() {
  const res = await fetch(`http://netcraft-hackathon.herokuapp.com/posts`);
  return res.json();
}
export { create, getFeed };
