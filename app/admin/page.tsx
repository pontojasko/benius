import PostItVisual from "../components/post-it-visual";

export default async function Admin(){
    const data = await fetch('https://api-benius.jasko.dev/mensagem/all', {cache: 'no-store' })
    const json = await data.json();
  



    interface postit {
        id: string;
        texto: string;
        criado: string;
    }




    return (
        <main className="w-full h-full ">
        
            <div className=" flex justify-items-center justify-center items-center py-5">
            <div className="[zoom:0.9] sm:[zoom:0.5] gap-20 justify-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-gameboy-2 ">
             
                   

                    {json.map((postit:postit) => 
                        <div key={postit.id}>
                            <PostItVisual debugmode={true} editmode={false} criado={postit.criado} id={postit.id} texto={postit.texto}/>
                        </div >
                    )}
                   <PostItVisual texto="" editmode={true}/>
   
            </div>             
            </div>      
        </main>


    );

}