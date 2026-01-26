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
      flex justify-center items-center overflow-hidden p-10 bg-gameboy-4
      xl:max-h-[40svh] md:max-h-[40svh] sm:max-h-[40svh]
      h-svh max-h-[35svh] shadow-drop/100 aspect-square

       ">
        {editing ? <p className="text-gameboy-1 text-3xl text-shadow-minidrop" onClick={edit} >

               
                   
                    modo de edicao
    
               
                </p> : <p className="text-gameboy-1 text-3xl text-shadow-minidrop" onClick={edit} >

               
                   
                    {props.texto}
                    {/* {json.criado} */}
    
               
                </p>}
              
        </div>

  );
}
