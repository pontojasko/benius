
import PostIt from "./components/post-it";




export default async function Home() {


  return (

    
    <div className="min-h-svh h-svh overflow-hidden">
         <header className="p-10 overflow-hidden flex justify-center items-center h-1/4 w-screen  bg-gameboy-3 shadow-2xl/10 ">
      
            <h1 className="text-gameboy-1 text-9xl md:text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <div className="flex justify-center items-center  w-screen h-1/2 bg-gameboy-2  ">
          <PostIt/>
        </div>


        <footer className="grid grid-rows-2 justify-center  h-1/4 bg-gameboy-3">
        
           <div className=" overflow-hidden flex justify-center items-center w-screen bg-gameboy-3">
              <i className=" text-center text-sm text-gameboy-4 tracking-tighter leading-tight select-none">
              pressione duas vezes <br></br> e envie  sua notícia</i>
            </div>

                      <div className=" overflow-hidden flex justify-center items-center w-screen bg-gameboy-4">
              <p className="text-gameboy-1 text-2xl text-shadow-minidrop/50 select-none">
              <a href=" https://jasko.dev"className="text-gameboy-1 tracking-tighter hover:text-gameboy-2 ">jasko! ^^</a></p>
            </div>

        </footer>






    </div>
  );
}
