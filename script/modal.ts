const Modal = {
    saveData: {
        modal: $('#saveDataModal'),
        closeSave: $('#closeSave'),

        open(){
            Modal.saveData.save()
            Modal.saveData.modal.removeClass('not-active')
            Modal.saveData.modal.addClass('active')
        },

        close(){
            Modal.saveData.modal.removeClass('active')
            Modal.saveData.modal.addClass('not-active')
        },

        save(){
            localStorage.setItem('playerName', `${Player.name}`)
            localStorage.setItem('playerBreed', `${Player.breed}`)
            localStorage.setItem('playerClass', `${Player.class}`)

            localStorage.setItem('balance', `${Money.balance}`)
        
            localStorage.setItem('xpCurrent', `${XP.current}`)
            localStorage.setItem('level', `${XP.level}`)
            localStorage.setItem('xpPoints', `${XP.points}`)
            localStorage.setItem('xpMax', `${XP.max}`)
        
            localStorage.setItem('str', `${Attributes.str}`)
            localStorage.setItem('vit', `${Attributes.vit}`)
            localStorage.setItem('spd', `${Attributes.spd}`)
            localStorage.setItem('dex', `${Attributes.dex}`)
            localStorage.setItem('int', `${Attributes.int}`)
        }
    },

    GameMenu: {
        modal: $('#game-menu'),
        
        open(){
            Modal.InitialMenu.close()

            if(Modal.Status.button.hasClass('active')){
                Modal.Status.button.removeClass('active')
                Modal.Status.button.addClass('not-active')
            }

            Modal.GameMenu.modal.removeClass('not-active')
            Modal.GameMenu.modal.addClass('active')
        },
        
        close(){
            Modal.GameMenu.modal.removeClass('active')
            Modal.GameMenu.modal.addClass('not-active')
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

        openNewGame(){
            let rconfirm = Modal.NewGame.openNameSelection(false)

            if(rconfirm) Modal.GameMenu.close()
        },

        openLoadGame(){
            let localName = localStorage.getItem('playerName'), localBreed = localStorage.getItem('playerBreed'), localClass = localStorage.getItem('playerClass')
            
            if(Player.name == '' && localName == null){
                Modal.NewGame.loadStop.removeClass('not-active')
                Modal.NewGame.loadStop.addClass('active')
            }

            else {
                Player.name = localName
                Player.breed = localBreed
                Player.class = localClass
                
                Modal.GameMenu.close()
                Modal.InitialMenu.open()
            }
        },

        closeLoadStop(){
            Modal.NewGame.loadStop.removeClass('active')
            Modal.NewGame.loadStop.addClass('not-active')
        },

        openNameSelection(confirmation: boolean, buttonNo = false, buttonYes = false){
            let rconfirm = true, modal = $('#selectionStoped')
            confirmation = (buttonNo == true) ? true: confirmation

            if((Player.name == '' && localStorage.getItem('playerName') == null) || confirmation){
                if(buttonNo == false){
                    Modal.NewGame.nameSelection.removeClass('not-active')
                    Modal.NewGame.nameSelection.addClass('active')
                }
                
                if(buttonYes == true) Modal.GameMenu.close()

                if(modal.hasClass('active')){
                    modal.removeClass('active')
                    modal.addClass('not-active')
                }
            }

            else {
                modal.removeClass('not-active')
                modal.addClass('active')

                rconfirm = false
            }

            return rconfirm
        },

        closeNameSelection(){
            Modal.NewGame.nameSelection.removeClass('active')
            Modal.NewGame.nameSelection.addClass('not-active')
        },

        openNameInvalidation(){
            Modal.NewGame.nameInvalidation.removeClass('not-active')
            Modal.NewGame.nameInvalidation.addClass('active')
        },

        closeNameInvalidation(){
            Modal.NewGame.nameInvalidation.removeClass('active')
            Modal.NewGame.nameInvalidation.addClass('not-active')
        },

        openBreedSelector(){
            let nameInput: HTMLInputElement = document.querySelector('input#nameInput')

            if(nameInput.value.length < 3 || nameInput.value.length > 10) Modal.NewGame.openNameInvalidation()
            
            else {
                Player.name = nameInput.value
                nameInput.value = ''

                Modal.NewGame.closeNameSelection()

                Modal.NewGame.breedSelection.removeClass('not-active')
                Modal.NewGame.breedSelection.addClass('active')
            }
        },

        closeBreedSelector(){
            Modal.NewGame.breedSelection.removeClass('active')
            Modal.NewGame.breedSelection.addClass('not-active')
        },

        openClassSelector(breed: string = ''){
            Player.breed = breed

            Modal.NewGame.closeBreedSelector()

            Modal.NewGame.classSelection.removeClass('not-active')
            Modal.NewGame.classSelection.addClass('active')
        },

        closeClassSelector(){
            Modal.NewGame.classSelection.removeClass('active')
            Modal.NewGame.classSelection.addClass('not-active')
        },

        openInitialMenu(classP: string = ''){
            Player.class = classP

            Modal.NewGame.closeClassSelector()

            Modal.InitialMenu.open()
        }
    },

    InitialMenu: {
        modal: $('#initial-menu'),

        open(){
            Modal.InitialMenu.modal.removeClass('not-active')
            Modal.InitialMenu.modal.addClass('active')

            if(Modal.Status.button.hasClass('not-active')){
                Modal.Status.button.removeClass('not-active')
                Modal.Status.button.addClass('active')
            }
        },
        
        close(){
            Modal.InitialMenu.modal.removeClass('active')
            Modal.InitialMenu.modal.addClass('not-active')
        }
    },

    Status: {
        conteiner: $('#status-fixed'),
        button: $('#toggleStatus'),

        openClose(){
            Modal.Status.conteiner.toggleClass('not-active')
            Modal.Status.conteiner.toggleClass('active')
        },

        select(){
            Modal.Status.button.toggleClass('selected')
        },

        move(){
            $('body').on('click', function(event){
                if(Modal.Status.button.hasClass('selected')){
                    Modal.Status.button.animate({
                        top: `${event.pageY}`,
                        left: `${event.pageX}`
                    }) 
                }
            })
        }
    },

    Person: {
        conteiner: $('#person-card'),

        open(){
            Modal.InitialMenu.close()

            Modal.Person.infInit()

            Modal.Person.conteiner.removeClass('not-active')
            Modal.Person.conteiner.addClass('active')
        },

        close(){
            Modal.InitialMenu.open()

            Modal.Person.conteiner.removeClass('active')
            Modal.Person.conteiner.addClass('not-active')
        },

        infInit(){
            $('#name-inf').val(Player.name)
            $('#breed-inf').val(Player.breed)
            $('#class-inf').val(Player.class)
        },

        Status: {
            conteiner: $('#status-card'),

            open(){
                Modal.Person.conteiner.removeClass('active')
                Modal.Person.conteiner.addClass('not-active')

                Modal.Person.Status.conteiner.removeClass('not-active')
                Modal.Person.Status.conteiner.addClass('active')
            },

            close(){
                Modal.Person.Status.conteiner.removeClass('active')
                Modal.Person.Status.conteiner.addClass('not-active')
                
                Modal.Person.conteiner.removeClass('not-active')
                Modal.Person.conteiner.addClass('active')
            }
        }
    },

    confirmUpdate: {
        element: $('#confirmUpdatePopUp'),
        confirmButton: $('#confirm-update'),
        confirmMsg: $('#confirm-text'),
        costMsg: $('#cost'),

        open(){
            Modal.confirmUpdate.element.removeClass('not-active')
            Modal.confirmUpdate.element.addClass('active')
            Modal.confirmUpdate.updateMsg()
        },

        close(conf="no"){
            if(conf == 'yes') Attributes.updateAttributes()
            
            Modal.confirmUpdate.element.removeClass('active')
            Modal.confirmUpdate.element.addClass('not-active')
        },

        updateMsg(){
            const values = Attributes.priceCalc()
            let newText = `Serão necessários ${values[2]} pontos de experiência, e ${values[0]} coins\nVai recuperar ${values[1]} coins`

            if(values[0] > Money.balance){
                newText = "Seus coins são insifucientes\npara realizar o aprimoramento!"
                Modal.confirmUpdate.confirmMsg.text(newText)
                Modal.confirmUpdate.costMsg.text('')

                if(!Modal.confirmUpdate.confirmButton.hasClass('not-active')) Modal.confirmUpdate.confirmButton.addClass('not-active')
            }
            
            else {
                Modal.confirmUpdate.confirmMsg.text("Deseja confirmar o aprimoramento ?")
                Modal.confirmUpdate.costMsg.text(newText)

                if(Modal.confirmUpdate.confirmButton.hasClass('not-active')) Modal.confirmUpdate.confirmButton.removeClass('not-active')
            }
        }
    }
}