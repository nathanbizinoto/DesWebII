const { createApp} =  vue;

createApp( {
    data() {
        return{
            display: "0",
            numeroAnterior: null,
            operador: null

        }
    },
    methods: {
        LidarBotao(botao) {
            switch (botao)
            {
                case '*':
                case '%':
                case '-':
                case '+':
                    this.lidarOperador(botao);
                    break;
                
                case '.':
                    this.lidarDecimal();
                    break;

                case 'C':
                    this.lidarLimpar();
                    break;
                
                case '=':
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(botao);

                
            }
        },
        lidarOperador() {
            console.log("O botão digitado foi: ", valor);
        },
        lidarDecimal() {
            console.log("Entrou no decimal");
        },
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            console.log("Entrou no igual");
        },
        lidarNumero(valor) {
            console.log("O botão digitado foi: ", valor);
        }


    }

}).mount("#app");
