namespace vetor
{
    let num: number[] = [2, 4, 6, 8];
    let valor: number = num[3];
    console.log(valor);
    console.log(num);
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
    console.log(num[3]);
    for (let i:number = 0; 1 < num.length; i++)
    {
        console.log(num[i]);
    }


    let cores: Array<string> = ["Vermelho", "Verde", "Azul"];
    //let cores: string[] = ["Vermelho", "Verde", "Azul"];

    type Aluno = {
        ra: number,
        nome: string,
        idade: number
    }

    let alunos: Aluno[
        {
        ra: 12312312312,
        nome: "Fulano",
        idade: 10
    },
    {
        ra: 123456789,
        nome: "Ciclano"
        idade: 91

    }]

    alunos.forEach(function (aluno: Aluno):void {
        console.log(aluno)
    })


}