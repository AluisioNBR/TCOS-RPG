import { Money } from "./player.mjs"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = /** @class */ (function () {
    function Item(name, id, description, price, img) {
        if (img === void 0) { img = ''; }
        this.name = name;
        this.id = id;
        this.description = description;
        this.price = price;
        this.img = img;
    }
    Item.prototype.buy = function () {
        var money = Money.balance - this.getPrice();
        if (money >= 0) {
            Money.balance = money;
            Money.updateVisor();
            return Money.balance
        }
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getImg = function () {
        return this.img;
    };
    return Item;
}());
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, id, description, price, img, damage, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.damage = damage;
        _this.durability = durability;
        return _this;
    }
    Weapon.prototype.getDamage = function () {
        return this.damage;
    };
    Weapon.prototype.setDurability = function (newDurability) {
        this.durability = newDurability;
    };
    Weapon.prototype.getDurability = function () {
        return this.durability;
    };
    return Weapon;
}(Item));
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, id, description, price, img, protection, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.protection = protection;
        _this.durability = durability;
        return _this;
    }
    Armor.prototype.getProtection = function () {
        return this.protection;
    };
    Armor.prototype.setDurability = function (newDurability) {
        this.durability = newDurability;
    };
    Armor.prototype.getDurability = function () {
        return this.durability;
    };
    return Armor;
}(Item));
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion(name, id, description, price, img, type, power) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.type = type;
        _this.power = power;
        return _this;
    }
    Potion.prototype.use = function () {
        if (this.getType() == 'heal')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + this.power + " pontos de vida!");
        else if (this.getType() == 'mana/stamina')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + this.power + " pontos de mana/vigor!");
        else if (this.getType() == 'strength')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a for\u00E7a em " + this.power + " pontos!");
        else if (this.getType() == 'protection')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a prote\u00E7\u00E3o em " + this.power + " pontos!");
        else if (this.getType() == 'xp')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta o xp em " + this.power + " pontos!");
    };
    Potion.prototype.getType = function () {
        return this.type;
    };
    Potion.prototype.getPower = function () {
        return this.power;
    };
    return Potion;
}(Item));
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(name, id, description, price, img, efect) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.efect = efect;
        return _this;
    }
    Card.prototype.use = function () {
        var rtrn = this.efect();
        if (rtrn != undefined)
            return rtrn;
    };
    return Card;
}(Item));
var Catalog = {
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
        testCard: new Card('Olá!', 9, 'Apenas um card de teste', 10, '', function () { return console.log('Olá'); }),
        testCard2: new Card('Dev', 9, 'Apenas um card de teste', 10, '', function () { return console.log('Desenvolvida por mim, Aluísio!'); })
    }
};
export { Catalog }
export { Item }
