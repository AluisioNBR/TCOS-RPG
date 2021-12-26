// import { Attributes } from './attributes.mjs'

const ChangeAttributesValues = {
    str: $('#str'),
    vit: $('#vit'),
    spd: $('#spd'),
    dex: $('#dex'),
    int: $('#int'),

    colorChange(current: string | number | string[], indicator: JQuery<HTMLElement>, index: Number){
        let attribute: number
        switch (index) {
            case 0:
                attribute = Attributes.str
                break;

            case 1:
                attribute = Attributes.vit
                break;

            case 2:
                attribute = Attributes.spd
                break;

            case 3:
                attribute = Attributes.dex
                break;

            case 4:
                attribute = Attributes.int
                break;
        
            default:
                break;
        }

        if(attribute > current){
            if(indicator.hasClass('onUp')){
                indicator.removeClass('onUp')
            }
            
            indicator.addClass('onDown')
        }

        else if(attribute < current){
            if(indicator.hasClass('onDown')){
                indicator.removeClass('onDown')
            }
            
            indicator.addClass('onUp')
        }

        else {
            ChangeAttributesValues.resetColors(indicator)
        }

        indicator.val(current)
    },

    resetColors(indicator: JQuery<HTMLElement>){
        if(indicator.hasClass('onUp')){
            indicator.removeClass('onUp')
        }

        else if(indicator.hasClass('onDown')){
            indicator.removeClass('onDown')
        }
    },

    strChange(){
        ChangeAttributesValues.colorChange(ChangeAttributesValues.str.val(), $('#indicator-str'), 0)
    },

    vitChange(){
        ChangeAttributesValues.colorChange(ChangeAttributesValues.vit.val(), $('#indicator-vit'), 1)
    },
    
    spdChange(){
        ChangeAttributesValues.colorChange(ChangeAttributesValues.spd.val(), $('#indicator-spd'), 2)
    },
    
    dexChange(){
        ChangeAttributesValues.colorChange(ChangeAttributesValues.dex.val(), $('#indicator-dex'), 3)
    },
    
    intChange(){
        ChangeAttributesValues.colorChange(ChangeAttributesValues.int.val(), $('#indicator-int'), 4)
    }
}

// export { ChangeAttributesValues }