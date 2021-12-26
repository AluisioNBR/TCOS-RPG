// import { XP } from './player.mjs'
// import { Money } from './player.mjs'
// import { ChangeAttributesValues } from './changeAttributesValues.mjs'
// import { Modal } from './modal.mjs'

const Attributes = {
    str: 3,
    vit: 3,
    spd: 3,
    dex: 3,
    int: 3,

    updateStr(value: number){
        Attributes.str = value
    },
    
    updateVit(value: number){
        Attributes.vit = value
    },

    updateSpd(value: number){
        Attributes.spd = value
    },

    updateDex(value: number){
        Attributes.dex = value
    },

    updateInt(value: number){
        Attributes.int = value
    },

    priceCalc(): number[]{
        const attributes: JQuery<HTMLInputElement> = $('.progress-bar'), indicator: JQuery<HTMLInputElement> = $('.progress-bar-value')
        const current = [
            Attributes.str,
            Attributes.vit,
            Attributes.spd,
            Attributes.dex,
            Attributes.int
        ]

        let paymentTotal = 0, incrementTotal = 0, pointsToPay = 0

        for (let x = 0; x < attributes.length; x++) {
            let payPoints = 0
            
            if(Number(attributes[x].value) > current[x]){
                if(XP.points < 1 || pointsToPay >= XP.points){
                    let pay = Number(indicator[x].value) * 50
                    paymentTotal = paymentTotal + pay
                }

                else {
                    payPoints = payPoints + (Number(indicator[x].value) - current[x])

                    if(payPoints > XP.points){
                        let pay = (payPoints - XP.points) * 50
                        paymentTotal = paymentTotal + pay
                        pointsToPay = pointsToPay + payPoints
                    }

                    else {
                        pointsToPay = pointsToPay + payPoints
                    }
                }
            }
            
            else if(Number(attributes[x].value) < current[x]){
                let inc = Number(indicator[x].value) * 25
                incrementTotal = incrementTotal + inc
            }

            else continue

            if(pointsToPay > XP.points){
                pointsToPay = XP.points
            }
        }

        return [paymentTotal, incrementTotal, pointsToPay]
    },

    // Método para a atualização dos atributos do player
    updateAttributes(){
        const attributes: JQuery<HTMLInputElement> = $('.progress-bar'), indicator: JQuery<HTMLInputElement> = $('.progress-bar-value')
        const current = [
            Attributes.str,
            Attributes.vit,
            Attributes.spd,
            Attributes.dex,
            Attributes.int
        ]

        for (let x = 0; x < attributes.length; x++) {
            let payPoints = 0
            
            if(Number(attributes[x].value) > current[x]){
                if(XP.points < 1){
                    let pay = Number(indicator[x].value) * 50
                    Money.payment(pay)
                }

                else {
                    payPoints = payPoints + (Number(indicator[x].value) - current[x])

                    if(payPoints > XP.points){
                        let pay = (payPoints - XP.points) * 50
                        Money.payment(pay)
                        XP.payWithPoints(XP.points)
                    }

                    else {
                        XP.payWithPoints(payPoints)
                    }
                }
            }
            
            else if(Number(attributes[x].value) < current[x]){
                let inc = Number(indicator[x].value) * 25
                Money.increment(inc)
            }

            else continue

            switch (x) {
                case 0:
                    Attributes.updateStr(Number(attributes[0].value))
                    break;
                
                case 1:
                    Attributes.updateVit(Number(attributes[1].value))
                    break;
                
                case 2:
                    Attributes.updateSpd(Number(attributes[2].value))
                    break;
                
                case 3:
                    Attributes.updateDex(Number(attributes[3].value))
                    break;
                
                case 4:
                    Attributes.updateInt(Number(attributes[4].value))
                    break;
            
                default:
                    break;
            }

            ChangeAttributesValues.resetColors($(`#${indicator[x].id}`))
            indicator[x].value = String(attributes[x].value)
        }
        
        Modal.confirmUpdate.close()
    }
}

// export { Attributes }