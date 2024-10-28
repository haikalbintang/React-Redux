export async function fetchDitto() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();

  console.log(data);
  return data;
}
