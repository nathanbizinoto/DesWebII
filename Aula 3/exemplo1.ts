namespace exercicio1 {
    // Escreva um programa Typescript que imprima todos os números de 1 a 53 usando a função while.
    
    let num: number = 2
    while (num <= 53)
    {
        let ehPrimo: boolean = true;
        let divisor: number = 2;
        while(divisor < num)
        {
            if (num % divisor === 0)
            {
                ehPrimo = false;
                break;
            }
            divisor++;
        }
        num++
    }
}
