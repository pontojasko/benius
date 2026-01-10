import Image from "next/image";

export default function Home() {
  return (

    
    <div className="min-h-svh h-svh overflow-hidden">
         <header className="p-10 overflow-hidden flex justify-center items-center h-1/4 w-screen  bg-gameboy-3 shadow-2xl/10 ">
      
            <h1 className="text-gameboy-1 text-9xl md:text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <div className="flex justify-center items-center  w-screen h-1/2 bg-gameboy-2  ">
      <div className="
      p-10 overflow-hidden flex justify-center items-center bg-gameboy-4
      xl:max-w-[22svw] 
      md:max-w-[30svw]
      sm:max-w-[50svw]
      h-svh w-svw max-h-[40svh] max-w-[70svw] shadow-drop/100

       ">
              <p className="text-gameboy-1 text-3xl text-shadow-minidrop">
                ainda to pensando em quantos caracteres isso vai suportar. tem que ser menos que 64</p>
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
