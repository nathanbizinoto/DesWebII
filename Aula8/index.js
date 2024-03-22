const {createApp} = Vue;

createApp({
    data () {
        return {
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    } ,
    methods: {
        lidarBotao(valor) {
            switch (valor)
            {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
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
                this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            this.operador = this.lidarBotao;
        },
        lidarDecimal() {
            this.display = numeroAnterior + "." + numeroAtual;
        },
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual () {
            console.log("Entrou no igual");
        },
        lidarNumero(valor) {
             
        }
    }
    
}).mount("#app");