import Image from "next/image";

export default function Home() {
  return (

    
    <div className="h-screen">
         <header className="flex justify-center items-baseline-last h-1/4 w-screen  bg-background-900 shadow-2xl/10 ">
      
            <h1 className="text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <div className="flex justify-center items-center  w-screen h-1/2  ">
      <div className="flex justify-center items-center bg-foreground-900 w-100 h-100 shadow-xl/0">
              <p className="text-3xl text-shadow-minidrop/80">Aqui dentro teria um textinho</p>
        </div>

        </div>


        <footer className="flex justify-center items-baseline-last h-1/4 w-screen bg-background-900">
        
           <div className="flex justify-center items-center h-1/2 w-screen bg-background-800">
              <p className="text-2xl">by <a href="https://jasko.dev"className="text-2xl">JASKO ^^</a></p>
            </div>

        </footer>






    </div>
  );
}
