namespace Funcao {
    function soma(numero1: number, numero2: number): number {
        let result: number = numero1 + numero2;
        return result;
    }

    console.log(soma(3, 5));

    function concatenar(texto1: string, texto2?: string, separador: string = " "): string {
        if (texto2) {
            return texto1 + separador + texto2;
        } else {
            return texto1;
        }
    }

    let resultado: string = concatenar("Olá", "Mundo");
    console.log(resultado);
    resultado = concatenar("Olá!");
    console.log(resultado);
}
