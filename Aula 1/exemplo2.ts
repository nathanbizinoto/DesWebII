namespace condicao {
    {
        let numero: number = 10;

        /*
        == igualdade
        <= menor ou igual
        >= maior ou igual
        > maior
        < menor
        ! negação
        != diferente
        
    
        */

        if (numero > 10) {
            console.log('O número é maior que 10')
        }

        let teste: boolean = true;

        if (!teste) {
            console.log('O valor que está na variavel é: ' + teste)
        } else {
            console.log('O valor que está na variavel é: ' + teste)

        }
    }

    //Switch CASE
    let stattus: string = 'Ataque'

    switch (stattus) {
        case "Ataque": console.log("Boss vai atacar!!!");
            break;
        case "Defesa": console.log("Boss vai defender!!!");
            break;
        case "Correr": console.log("Boss correu da briga!!!");
            break;
        default: console.log("Boss usou magia!!!");

    }


    if (numero == 10 && teste == true) {
        console.log("Operador E ou AND");

    }

    if (numero >= 10 || teste == true) {
        console.log("O operador Ou ou OR");
    }
