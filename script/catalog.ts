// import { Money } from "./player.mjs"

type active = () => void | string | number | object

class Item {
    private name: string
    private id: number
    private description: string
    private price: number
    private img: string

    constructor(name: string, id: number, description: string, price: number, img: string = '') {
        this.name = name
        this.id = id
        this.description = description
        this.price = price
        this.img = img
    }

    buy(){
        let money = Money.balance - this.getPrice()
        
        if(money >= 0){
            Money.balance = money
            
            Money.updateVisor()

            return Money.balance
        }
    }

    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }

    getDescription(){
        return this.description
    }
    
    getPrice(){
        return this.price
    }

    getImg(){
        return this.img
    }
}

class Weapon extends Item {
    private damage: number
    private durability: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', damage: number, durability: number){
        super(name, id, description, price, img)
        this.damage = damage
        this.durability = durability
    }

    getDamage(){
        return this.damage
    }

    setDurability(newDurability: number){
        this.durability = newDurability
    }
    
    getDurability(){
        return this.durability
    }
}

class Armor extends Item {
    private protection: number
    private durability: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', protection: number, durability: number){
        super(name, id, description, price, img)
        this.protection = protection
        this.durability = durability
    }

    getProtection(){
        return this.protection
    }

    setDurability(newDurability: number){
        this.durability = newDurability
    }
    
    getDurability(){
        return this.durability
    }
}

class Potion extends Item {
    private type: string
    private power: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', type: 'heal' | 'mana/stamina' | 'strength' | 'protection' | 'xp', power: number){
        super(name, id, description, price, img)
        this.type = type
        this.power = power
    }

    use(){
        if(this.getType() == 'heal') console.log(`A poção ${this.getName()} recupera ${this.power} pontos de vida!`)

        else if(this.getType() == 'mana/stamina') console.log(`A poção ${this.getName()} recupera ${this.power} pontos de mana/vigor!`)

        else if(this.getType() == 'strength') console.log(`A poção ${this.getName()} aumenta a força em ${this.power} pontos!`)

        else if(this.getType() == 'protection') console.log(`A poção ${this.getName()} aumenta a proteção em ${this.power} pontos!`)

        else if(this.getType() == 'xp') console.log(`A poção ${this.getName()} aumenta o xp em ${this.power} pontos!`)
    }

    getType(){
        return this.type 
    }

    getPower(){
        return this.power
    }
}

class Card extends Item {
    private efect: active

    constructor(name: string, id: number, description: string, price: number, img: string = '', efect: active){
        super(name, id, description, price, img)
        this.efect = efect
    }

    use(){
        const rtrn = this.efect()

        if(rtrn != undefined) return rtrn
    }
}

const Catalog = {
    Weapons: {
        testeSword: new Weapon('Espada Teste', 1, 'Apenas uma espada de teste', 100, '', 50, 75),
        testeSword2: new Weapon('Espada Teste', 2, 'Apenas uma espada de teste', 100, '', 50, 75),
        testeSword3: new Weapon('Espada Teste', 3, 'Apenas uma espada de teste', 100, '', 50, 75)
    },

    Armors: {
        testArmor: new Armor('Armadura Teste', 4, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor2: new Armor('Armadura Teste', 5, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor3: new Armor('Armadura Teste', 6, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor4: new Armor('Armadura Teste', 7, 'Apenas uma armadura de teste', 100, '', 50, 75)
    },

    Potions: {
        testPotion: new Potion('Pequena Cura', 8, 'Apenas uma poção de teste', 100, '', 'heal', 25)
    },

    Cards: {
        testCard: new Card('Olá!', 9, 'Apenas um card de teste', 10, '', () => console.log('Olá')),
        testCard2: new Card('Dev', 9, 'Apenas um card de teste', 10, '', () => console.log('Desenvolvida por mim, Aluísio!'))
    }
}

// export { Catalog }
// export { Item }