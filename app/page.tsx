import Image from "next/image";

export default function Home() {
  return (

    
    <div className="min-h-svh h-svh overflow-hidden">
         <header className="p-10 overflow-hidden flex justify-center items-center h-1/4 w-screen  bg-background-900 shadow-2xl/10 ">
      
            <h1 className=" text-9xl md:text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <div className="flex justify-center items-center  w-screen h-1/2  ">
      <div className="
      p-10 overflow-hidden flex justify-center items-center bg-foreground-900
      xl:max-w-[22svw] 
      md:max-w-[30svw]
      sm:max-w-[50svw]
      h-svh w-svw max-h-[40svh] max-w-[70svw] shadow-xl/0

       ">
              <p className=" text-3xl text-shadow-minidrop/80">Aqui dentro teria um textinho</p>
        </div>

        </div>


        <footer className="flex justify-center items-baseline-last h-1/4 w-screen bg-background-900">
        
           <div className=" overflow-hidden flex justify-center items-center h-1/2 w-screen bg-background-800">
              <p className=" text-2xl text-shadow-minidrop/100">by 
              <a href="https://jasko.dev"className="tracking-tighter transition-all hover:text-[1.6rem]"> JASKO ^^</a></p>
            </div>

        </footer>






    </div>
  );
}
