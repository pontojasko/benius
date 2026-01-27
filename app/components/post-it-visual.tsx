'use client'
import { useState } from "react";
import sexo from "../actions";


interface PostItProps {
  texto: string;
}



export default function PostItVisual(props: PostItProps) {

  const [editing, setEditing] = useState(false);

  const edit = () =>{
    setEditing(true);
  }

  

return (
<div className="relative
      flex justify-center items-center overflow-hidden p-[clamp(1rem,5vw,3rem)] bg-gameboy-4
      xl:max-h-[40svh] md:max-h-[40svh] sm:max-h-[40svh]
      h-svh max-h-[35svh] shadow-drop/100 aspect-square

       ">
        {editing ? 
        <form className="grid grid-rows-[auto_1fr_auto] justify-center items-center w-full  h-full">
          <div className="flex justify-items items-center">

                <p></p>

          </div>
                  
          <div className="flex justify-items items-center h-full">
                  
                      <textarea onKeyDown={(e) => { 
                                                    if (e.key === 'Enter' && !e.shiftKey) { 
                                                      e.preventDefault(); 
                                                    
                                                      const btn = e.currentTarget.form?.querySelector('button[type="submit"]') as HTMLButtonElement;
                                                      
                                                      if (btn) {
                                                        btn.click();
                                                        setEditing(false);
                                                      }
                                                    } 
                                                  }}
                            name="campo" minLength={5} maxLength={90} placeholder={"Qual é a má notícia?"} autoFocus spellCheck={false}
                            className="text-gameboy-1 sm:text-4xl text-2xl text-shadow-minidrop outline-none leading-tight tracking-tight w-full h-full overflow-hidden resize-none">
                      </textarea>
            </div>

            <div className="flex justify-end w-full">
                      <button formAction={sexo} type="submit" className="sm:text-2xl text-1xl outline-none cursor-pointer leading-tight tracking-tight select-none text-shadow-minidrop hover:text-gameboy-2 ">&gt; Enter</button>
              </div>


        </form>






        :
        <p title="Dois cliques para enviar a sua má notícia!" className="text-gameboy-1 text-[clamp(1.5rem,4vmin,2.5rem)] leading-tight tracking-tight text-shadow-minidrop" onDoubleClick={edit}>{props.texto}</p>}
              
              

        </div>

        

  );
}
