var Money = {
    balance: 0,
    increment: function (inc) {
        if (inc === void 0) { inc = 0; }
        Money.balance = this.balance + inc;
        Money.updateVisor();
    },
    payment: function (pay) {
        if (pay === void 0) { pay = 0; }
        Money.balance = Money.balance - pay;
        Money.updateVisor();
    },
    updateVisor: function () {
        $('#money').val(Money.balance);
    }
};
