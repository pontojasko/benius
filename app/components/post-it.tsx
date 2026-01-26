import PostItVisual from "./post-it-visual";

export default async function PostIt() {
  const data = await fetch('https://api-benius.jasko.dev/mensagem', {cache: 'no-store' })
  const json = await data.json()

return (
<PostItVisual texto={json.texto}/>
  );
}
