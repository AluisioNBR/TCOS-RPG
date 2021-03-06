import { Player } from "./player.mjs"
import { Money } from "./player.mjs"
import { XP } from "./player.mjs"
import { Attributes } from "./attributes.mjs"
import { Catalog } from "./catalog.mjs"
import { Item } from "./catalog.mjs"
var Modal = {
    saveData: {
        modal: $('#saveDataModal'),
        closeSave: $('#closeSave'),
        open: function () {
            Modal.saveData.save();
            Modal.saveData.modal.removeClass('not-active');
            Modal.saveData.modal.addClass('active');
        },
        close: function () {
            Modal.saveData.modal.removeClass('active');
            Modal.saveData.modal.addClass('not-active');
        },
        save: function () {
            localStorage.setItem('playerName', "" + Player.name);
            localStorage.setItem('playerBreed', "" + Player.breed);
            localStorage.setItem('playerClass', "" + Player["class"]);
            localStorage.setItem('balance', "" + Money.balance);
            localStorage.setItem('xpCurrent', "" + XP.current);
            localStorage.setItem('level', "" + XP.level);
            localStorage.setItem('xpPoints', "" + XP.points);
            localStorage.setItem('xpMax', "" + XP.max);
            localStorage.setItem('str', "" + Attributes.str);
            localStorage.setItem('vit', "" + Attributes.vit);
            localStorage.setItem('spd', "" + Attributes.spd);
            localStorage.setItem('dex', "" + Attributes.dex);
            localStorage.setItem('int', "" + Attributes.int);
        }
    },
    GameMenu: {
        modal: $('#game-menu'),
        open: function () {
            Modal.InitialMenu.close();
            if (Modal.Status.button.hasClass('active')) {
                Modal.Status.button.removeClass('active');
                Modal.Status.button.addClass('not-active');
            }
            Modal.GameMenu.modal.removeClass('not-active');
            Modal.GameMenu.modal.addClass('active');
        },
        close: function () {
            Modal.GameMenu.modal.removeClass('active');
            Modal.GameMenu.modal.addClass('not-active');
        }
    },
    NewGame: {
        loadStop: $('#loadStoped'),
        closeLoadStoped: $('#closeLoadStoped'),
        nameSelection: $('#name-selection'),
        confirmNameButton: $('#confirm-name'),
        nameInvalidation: $('#nameInvalidation-modal'),
        closeNameInvalidationButton: $('#close-nameInvalidation'),
        breedSelection: $('#breed-selection'),
        classSelection: $('#class-selection'),
        openNewGame: function () {
            var rconfirm = Modal.NewGame.openNameSelection(false);
            if (rconfirm)
                Modal.GameMenu.close();
        },
        openLoadGame: function () {
            var localName = localStorage.getItem('playerName'), localBreed = localStorage.getItem('playerBreed'), localClass = localStorage.getItem('playerClass');
            if (Player.name == '' && localName == null) {
                Modal.NewGame.loadStop.removeClass('not-active');
                Modal.NewGame.loadStop.addClass('active');
            }
            else {
                Player.name = localName;
                Player.breed = localBreed;
                Player["class"] = localClass;
                Modal.GameMenu.close();
                Modal.InitialMenu.open();
            }
        },
        closeLoadStop: function () {
            Modal.NewGame.loadStop.removeClass('active');
            Modal.NewGame.loadStop.addClass('not-active');
        },
        openNameSelection: function (confirmation, buttonNo, buttonYes) {
            if (buttonNo === void 0) { buttonNo = false; }
            if (buttonYes === void 0) { buttonYes = false; }
            var rconfirm = true, modal = $('#selectionStoped');
            confirmation = (buttonNo == true) ? true : confirmation;
            if ((Player.name == '' && localStorage.getItem('playerName') == null) || confirmation) {
                if (buttonNo == false) {
                    Modal.NewGame.nameSelection.removeClass('not-active');
                    Modal.NewGame.nameSelection.addClass('active');
                }
                if (buttonYes == true)
                    Modal.GameMenu.close();
                if (modal.hasClass('active')) {
                    modal.removeClass('active');
                    modal.addClass('not-active');
                }
            }
            else {
                modal.removeClass('not-active');
                modal.addClass('active');
                rconfirm = false;
            }
            return rconfirm;
        },
        closeNameSelection: function () {
            Modal.NewGame.nameSelection.removeClass('active');
            Modal.NewGame.nameSelection.addClass('not-active');
        },
        openNameInvalidation: function () {
            Modal.NewGame.nameInvalidation.removeClass('not-active');
            Modal.NewGame.nameInvalidation.addClass('active');
        },
        closeNameInvalidation: function () {
            Modal.NewGame.nameInvalidation.removeClass('active');
            Modal.NewGame.nameInvalidation.addClass('not-active');
        },
        openBreedSelector: function () {
            var nameInput = document.querySelector('input#nameInput');
            if (nameInput.value.length < 3 || nameInput.value.length > 10)
                Modal.NewGame.openNameInvalidation();
            else {
                Player.name = nameInput.value;
                nameInput.value = '';
                Modal.NewGame.closeNameSelection();
                Modal.NewGame.breedSelection.removeClass('not-active');
                Modal.NewGame.breedSelection.addClass('active');
            }
        },
        closeBreedSelector: function () {
            Modal.NewGame.breedSelection.removeClass('active');
            Modal.NewGame.breedSelection.addClass('not-active');
        },
        openClassSelector: function (breed) {
            if (breed === void 0) { breed = ''; }
            Player.breed = breed;
            Modal.NewGame.closeBreedSelector();
            Modal.NewGame.classSelection.removeClass('not-active');
            Modal.NewGame.classSelection.addClass('active');
        },
        closeClassSelector: function () {
            Modal.NewGame.classSelection.removeClass('active');
            Modal.NewGame.classSelection.addClass('not-active');
        },
        openInitialMenu: function (classP) {
            if (classP === void 0) { classP = ''; }
            Player["class"] = classP;
            Modal.NewGame.closeClassSelector();
            Modal.InitialMenu.open();
        }
    },
    InitialMenu: {
        modal: $('#initial-menu'),
        open: function () {
            Modal.InitialMenu.modal.removeClass('not-active');
            Modal.InitialMenu.modal.addClass('active');
            if (Modal.Status.button.hasClass('not-active')) {
                Modal.Status.button.removeClass('not-active');
                Modal.Status.button.addClass('active');
            }
        },
        close: function () {
            Modal.InitialMenu.modal.removeClass('active');
            Modal.InitialMenu.modal.addClass('not-active');
        }
    },
    Status: {
        conteiner: $('#status-fixed'),
        button: $('#toggleStatus'),
        openClose: function () {
            Modal.Status.conteiner.toggleClass('not-active');
            Modal.Status.conteiner.toggleClass('active');
        },
        select: function () {
            Modal.Status.button.toggleClass('selected');
        },
        move: function () {
            $('body').on('click', function (event) {
                if (Modal.Status.button.hasClass('selected')) {
                    Modal.Status.button.animate({
                        top: "" + event.pageY,
                        left: "" + event.pageX
                    });
                }
            });
        }
    },
    Person: {
        conteiner: $('#person-card'),
        open: function () {
            Modal.InitialMenu.close();
            Modal.Person.infInit();
            Modal.Person.conteiner.removeClass('not-active');
            Modal.Person.conteiner.addClass('active');
        },
        close: function () {
            Modal.InitialMenu.open();
            Modal.Person.conteiner.removeClass('active');
            Modal.Person.conteiner.addClass('not-active');
        },
        infInit: function () {
            $('#name-inf').val(Player.name);
            $('#breed-inf').val(Player.breed);
            $('#class-inf').val(Player["class"]);
        },
        Status: {
            conteiner: $('#status-card'),
            open: function () {
                Modal.Person.conteiner.removeClass('active');
                Modal.Person.conteiner.addClass('not-active');
                Modal.Person.Status.conteiner.removeClass('not-active');
                Modal.Person.Status.conteiner.addClass('active');
            },
            close: function () {
                Modal.Person.Status.conteiner.removeClass('active');
                Modal.Person.Status.conteiner.addClass('not-active');
                Modal.Person.conteiner.removeClass('not-active');
                Modal.Person.conteiner.addClass('active');
            }
        }
    },
    confirmUpdate: {
        element: $('#confirmUpdateModal'),
        confirmButton: $('#confirm-update'),
        confirmMsg: $('#confirm-text'),
        costMsg: $('#cost'),
        open: function () {
            Modal.confirmUpdate.element.removeClass('not-active');
            Modal.confirmUpdate.element.addClass('active');
            Modal.confirmUpdate.updateMsg();
        },
        close: function (conf) {
            if (conf === void 0) { conf = "no"; }
            if (conf == 'yes')
                Attributes.updateAttributes();
            Modal.confirmUpdate.element.removeClass('active');
            Modal.confirmUpdate.element.addClass('not-active');
        },
        updateMsg: function () {
            var values = Attributes.priceCalc();
            var newText = "Ser\u00E3o necess\u00E1rios " + values[2] + " pontos de experi\u00EAncia, e " + values[0] + " coins\nVai recuperar " + values[1] + " coins";
            if (values[0] > Money.balance) {
                newText = "Seus coins s??o insifucientes\npara realizar o aprimoramento!";
                Modal.confirmUpdate.confirmMsg.text(newText);
                Modal.confirmUpdate.costMsg.text('');
                if (!Modal.confirmUpdate.confirmButton.hasClass('not-active'))
                    Modal.confirmUpdate.confirmButton.addClass('not-active');
            }
            else {
                Modal.confirmUpdate.confirmMsg.text("Deseja confirmar o aprimoramento ?");
                Modal.confirmUpdate.costMsg.text(newText);
                if (Modal.confirmUpdate.confirmButton.hasClass('not-active'))
                    Modal.confirmUpdate.confirmButton.removeClass('not-active');
            }
        }
    },
    Store: {
        conteiner: $('#store-conteiner'),
        openButton: $('#storeButton'),
        closeButton: $('#close-store-button'),
        open: function () {
            Modal.InitialMenu.close();
            Modal.Store.conteiner.removeClass('not-active');
            Modal.Store.conteiner.addClass('active');
        },
        close: function () {
            Modal.InitialMenu.open();
            Modal.Store.conteiner.removeClass('active');
            Modal.Store.conteiner.addClass('not-active');
        }
    },
    weapons: {
        conteiner: $('#weapons-sale'),
        button: $('#weapons-view-button'),
        open: function () {
            if (Modal.weapons.conteiner.hasClass('not-active')) {
                Modal.weapons.conteiner.removeClass('not-active');
                Modal.weapons.conteiner.addClass('active');
                Modal.armors.close();
                Modal.potions.close();
                Modal.cards.close();
            }
        },
        close: function () {
            if (Modal.weapons.conteiner.hasClass('active')) {
                Modal.weapons.conteiner.removeClass('active');
                Modal.weapons.conteiner.addClass('not-active');
            }
        }
    },
    armors: {
        conteiner: $('#armor-sale'),
        button: $('#armors-view-button'),
        open: function () {
            if (Modal.armors.conteiner.hasClass('not-active')) {
                Modal.armors.conteiner.removeClass('not-active');
                Modal.armors.conteiner.addClass('active');
                Modal.weapons.close();
                Modal.potions.close();
                Modal.cards.close();
            }
        },
        close: function () {
            if (Modal.armors.conteiner.hasClass('active')) {
                Modal.armors.conteiner.removeClass('active');
                Modal.armors.conteiner.addClass('not-active');
            }
        }
    },
    potions: {
        conteiner: $('#potions-sale'),
        button: $('#potions-view-button'),
        open: function () {
            if (Modal.potions.conteiner.hasClass('not-active')) {
                Modal.potions.conteiner.removeClass('not-active');
                Modal.potions.conteiner.addClass('active');
                Modal.armors.close();
                Modal.weapons.close();
                Modal.cards.close();
            }
        },
        close: function () {
            if (Modal.potions.conteiner.hasClass('active')) {
                Modal.potions.conteiner.removeClass('active');
                Modal.potions.conteiner.addClass('not-active');
            }
        }
    },
    cards: {
        conteiner: $('#cards-sale'),
        button: $('#cards-view-button'),
        open: function () {
            if (Modal.cards.conteiner.hasClass('not-active')) {
                Modal.cards.conteiner.removeClass('not-active');
                Modal.cards.conteiner.addClass('active');
                Modal.armors.close();
                Modal.potions.close();
                Modal.weapons.close();
            }
        },
        close: function () {
            if (Modal.cards.conteiner.hasClass('active')) {
                Modal.cards.conteiner.removeClass('active');
                Modal.cards.conteiner.addClass('not-active');
            }
        }
    },
    itensDetails: {
        conteiner: $('#itensDetails'),
        button: $('#close-itensDetails'),
        open: function (itemId) {
            if (Modal.itensDetails.conteiner.hasClass('not-active')) {
                Modal.itensDetails.conteiner.removeClass('not-active');
                Modal.itensDetails.conteiner.addClass('active');
                var id = Number(itemId.split('-')[1]);
                Modal.itensDetails.addItemDetais(id);
            }
        },
        close: function () {
            if (Modal.itensDetails.conteiner.hasClass('active')) {
                Modal.itensDetails.conteiner.removeClass('active');
                Modal.itensDetails.conteiner.addClass('not-active');
            }
        },
        addItemDetais: function (id) {
            var selectedProduct;
            {
                var iArray = [
                    Catalog.Weapons,
                    Catalog.Armors,
                    Catalog.Potions,
                    Catalog.Cards
                ];
                for (var i = 0; i < iArray.length; i++) {
                    for (var product in iArray[i]) {
                        if (iArray[i]["" + product].getId() == id) {
                            selectedProduct = iArray[i]["" + product];
                            break;
                        }
                    }
                    if (selectedProduct != undefined)
                        break;
                }
            }
            Modal.buyMsg.selectedProduct = selectedProduct;
            $('#itensDetails > div > h2').text(selectedProduct.getName());
            $('#itensDetails > div > img').attr('src', "" + selectedProduct.getImg()).attr('alt', "" + selectedProduct.getName());
            $('#coastDetails').val(selectedProduct.getPrice() + " coins");
            $('#itensDetails > div > p').text(selectedProduct.getDescription());
        }
    },
    buyMsg: {
        conteiner: $('#buyMsg'),
        openButton: $('#buyItem'),
        closeButton: $('#close-buyMsg'),
        selectedProduct: new Item('undefined', 0, '', 0),
        open: function () {
            Modal.itensDetails.close();
            var buy = Modal.buyMsg.selectedProduct.buy();
            if (buy == undefined)
                $('#buyMsg > div > h2').text("N??o foi poss??vel realizar a compra!");
            else
                $('#buyMsg > div > h2').text("Compra realizada com sucesso!");
            Modal.buyMsg.conteiner.removeClass('not-active');
            Modal.buyMsg.conteiner.addClass('active');
        },
        close: function () {
            Modal.buyMsg.conteiner.removeClass('active');
            Modal.buyMsg.conteiner.addClass('not-active');
        }
    }
};
export { Modal }
