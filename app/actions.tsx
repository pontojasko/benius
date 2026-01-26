'use server'



export default async function sexo(formData: FormData){

    
    const textoDigitado = String(formData.get('campo'))

    const opcoes = {
        method: 'POST',
        body: JSON.stringify({texto: textoDigitado }),
        headers: { 'Content-Type': 'application/json' }
    };

    
    const res = await fetch('https://api-benius.jasko.dev/mensagens', opcoes)


 
    

}