const { createApp } = Vue

createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            status: false,
            interruptor: '',
        }
    },
    methods: {
        fullName() {
            return (this.firstName + " " + this.lastName);
        }
    },
    watch: {
        interruptor(newVal) {
            if (newVal() === 'acender') {
                this.status = true;
            } else if (newVal() === 'apagar') {
                this.status = false;
            }
        }
    }
}).mount("#app");
