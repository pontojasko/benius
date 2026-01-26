

import Image from "next/image";







export default async function Home() {
  const data = await fetch('https://api-benius.jasko.dev/mensagem', {cache: 'no-store' })
  const json = await data.json()






  return (

    
    <div className="min-h-svh h-svh overflow-hidden">
         <header className="p-10 overflow-hidden flex justify-center items-center h-1/4 w-screen  bg-gameboy-3 shadow-2xl/10 ">
      
            <h1 className="text-gameboy-1 text-9xl md:text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <div className="flex justify-center items-center  w-screen h-1/2 bg-gameboy-2  ">
      <div className="
      flex justify-center items-center overflow-hidden p-10 bg-gameboy-4
      xl:max-h-[40svh] md:max-h-[40svh] sm:max-h-[40svh]
      h-svh max-h-[35svh] shadow-drop/100 aspect-square

       ">
              <p className="text-gameboy-1 text-3xl text-shadow-minidrop">
               
                   
                    {json.texto}
                    {/* {json.criado} */}
    
               
                </p>
        </div>

        </div>


        <footer className="flex justify-center items-baseline-last h-1/4 w-screen bg-gameboy-3">
        
           <div className=" overflow-hidden flex justify-center items-center h-1/2 w-screen bg-gameboy-4">
              <p className="text-gameboy-1 text-2xl text-shadow-minidrop/50">
              <a href=" https://jasko.dev"className="text-gameboy-4tracking-tighter transition-all hover:text-[1.6rem]">jasko! ^^</a></p>
            </div>

        </footer>






    </div>
  );
}
