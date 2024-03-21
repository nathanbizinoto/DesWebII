const { createApp } = Vue;

createApp( {
    data() {
        return{
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null,
        }
    },
        methods: {
            lidarBotao(botao): void {
                switch (botao){
                    case '*':
                    case '/':
                    case '-':
                    case '+':
                        this.lidarOperador(botao);
                        break;

                    case '.':
                        this.lidarDecimal();
                        break;
                    
                    case 'C':
                        this.Limpar();
                        break;
                    
                    case 

                }



            }

        }
    }).mount("#app");
