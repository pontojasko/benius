import PostItVisual from "./components/post-it-visual";


export default async function Home() {
  const data = await fetch('https://api-benius.jasko.dev/mensagem', {cache: 'no-store' })
  const json = await data.json();


  return (

    
    <div className="min-h-svh h-svh overflow-hidden">
         <header className="p-10 overflow-hidden flex justify-center items-center h-1/4 w-screen  bg-gameboy-3 shadow-2xl/10 ">
      
            <h1 className="text-gameboy-1 text-9xl md:text-title text-shadow-drop/100 tracking-tighter ">
              Benius
            </h1>
        </header>
        <main className="grid grid-cols-[auto_1fr_auto] justify-center items-center  w-screen h-1/2 bg-gameboy-2  ">
            <div></div> {/* div pra dar espaço lateral esquerdo */}
            <div className="flex justify-center"> {/* div pra aglobar tudo e centralizar */}
              <div className="flex-1"></div> {/* div pra dar espaço editavel lateral esquerdo */}
              <PostItVisual debugmode={false} texto={json[0].texto}/>
              <div className="flex-1"> {/* div pra dar espaço editavel lateral direito */}
              </div>
              </div>
              <div></div>

        </main>


        <footer className="grid grid-rows-2 justify-center  h-1/4 bg-gameboy-3">
        
           <div className=" overflow-hidden flex justify-center items-center w-screen bg-gameboy-3">
              <i className=" text-center text-sm text-gameboy-4 tracking-tighter leading-tight select-none">
              aperte duas vezes no post-it <br></br> e me mostre o que quiser!</i>
            </div>

                      <div className=" overflow-hidden flex justify-center items-center w-screen bg-gameboy-4">
              <p className="text-gameboy-1 text-2xl text-shadow-minidrop/50 select-none">
              <a href=" https://jasko.dev"className="text-gameboy-1 tracking-tighter hover:text-gameboy-2 ">jasko! ^^</a></p>
            </div>

        </footer>






    </div>
  );
}
