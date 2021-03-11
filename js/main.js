const app = Vue.createApp({
    data() {
        return {
            numero: 0,
            error:false
        }
    },
    methods: {
        sumar() {
            this.numero++
            if (this.numero <= 0) {
                this.error=true
            }else{
                this.error=false
            }
        },
        restar() {
            if (this.numero <= 0) {
                this.error=true
                
            }else{
                this.error=false
                this.numero--
            }
        }
    },
})