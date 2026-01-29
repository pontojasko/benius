import PostItVisual from "../components/post-it-visual";

export default async function Admin(){
    const data = await fetch('https://api-benius.jasko.dev/mensagens');
    const json = await data.json();
  


    return (
        <main className="w-full h-full">
            
            <div className="flex justify-items-center justify-center items-center py-5">
            <div className="[zoom:0.9] sm:[zoom:0.5] gap-20 justify-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-gameboy-2 ">
             
                  
                    {json.map(postit => 
                        <div key={postit.id}>
                            <PostItVisual texto={postit.texto}/>
                        </div >
                    )}
                   
   
            </div>             
            </div>      
        </main>


    );

}