namespace Lacorep
{
    let aux: number = 10;
    while(aux != 0){
        console.log(`Hello World! ${aux}`)
        aux -= 1;
    }

    let vida: number = 100;
    while (vida != 0) {
        setTimeout(( ) => {
            console.log("Zezim perdeu 1 de vida!")
            vida -= 1;
        }, 1000);
    }
    console.log("Game Over!!!")
    
    do {
        console.log("Entrou no DO WHILE!")
        aux += 1;
    } while (aux == 0)

}