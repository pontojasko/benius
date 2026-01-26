'use client'
import { useState } from "react";


interface PostItProps {
  texto: string;
}



export default function PostItVisual(props: PostItProps) {

  const [editing, setEditing] = useState(false);

  const edit = () =>{
    setEditing(true);
  }

  

return (
<div className="
      flex justify-center items-center overflow-hidden p-12 bg-gameboy-4
      xl:max-h-[40svh] md:max-h-[40svh] sm:max-h-[40svh]
      h-svh max-h-[35svh] shadow-drop/100 aspect-square

       ">
        {editing ? 
        <div className="flex justify-center items-center w-full xl:h-3/6 h-full">
        <textarea onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault();  } }} maxLength={90} placeholder={"Qual é a má notícia?"} autoFocus
          className="text-gameboy-1 text-3xl  text-shadow-minidrop outline-none h-full w-full overflow-hidden resize-none">
        </textarea>
        {/* <p> pressione enter</p> */}
        </div>
        :
        <p title="Dois cliques para enviar a sua má notícia!" className="text-gameboy-1 text-3xl text-shadow-minidrop" onDoubleClick={edit}>{props.texto}</p>}
              
        </div>

  );
}
