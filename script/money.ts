const Money = {
    balance: 0,

    increment(inc: number = 0){
        Money.balance = this.balance + inc
        Money.updateVisor()
    },
    
    payment(pay: number = 0){
        Money.balance = Money.balance - pay
        Money.updateVisor()
    },

    updateVisor(){
        $('#money').val(Money.balance)
    }
}