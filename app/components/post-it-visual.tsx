'use client'
import { useState } from "react";
import sexo from "../actions";
import { useRouter } from 'next/navigation';

interface PostItProps {
  texto: string;
  editmode?: boolean;
  debugmode?: boolean;
  id?: string;
  criado?: any;  //zoado
}

export default function PostItVisual(props: PostItProps) {

  const [editing, setEditing] = useState(props.editmode);
  const [debug, setDebug] = useState(props.debugmode);

  const edit = () =>{
    // setEditing(true);
    if (debug === true){
      return;
    }
    else { 
    setEditing(true)}
    
  }

  const router = useRouter()
  const refresh = ()=>{
    router.refresh();
  }
const mtfdate = new Date(props.criado);
let dateoptions:Intl.DateTimeFormatOptions =
{ year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"};
const mtfdate2 = props.criado ? new Intl.DateTimeFormat("pt-BR", dateoptions).format(mtfdate) : "---";


return (
<div onClick={refresh} onDoubleClick={edit} className="relative
      flex justify-center items-center overflow-hidden p-[clamp(1rem,5vw,3rem)] bg-gameboy-4
      xl:max-h-[40svh]
      h-svh max-h-[35svh] shadow-drop/100 aspect-square active:bg-green-950

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
          <div>                                          
        <p className="text-gameboy-1 text-[clamp(1.5rem,4vmin,2.5rem)] leading-tight tracking-tight text-shadow-minidrop" onDoubleClick={edit}>{props.texto}</p>
        
        {debug ? <div className="text-2xl">
           <p >{props.id} </p> <p className="bg-green-950 w-fit">  {mtfdate2} </p>
           
           </div>
        : <div></div>
        }                                  </div>
        }
              
              

        </div>

        

  );
}
