var Game = {
    init: function () {
        Game.firstUpdateMoney();
        Game.firstUpdateXP();
        Game.firstUpdateAttributes();
        Game.initChange();
        Game.buttonsInit();
    },
    firstUpdateMoney: function () {
        var balance = localStorage.getItem('balance');
        if (balance == "" || balance == null || balance == undefined) {
            Money.increment(5000);
            localStorage.setItem('balance', "" + Money.balance);
        }
        else
            Money.increment(Number(balance));
        Money.updateVisor();
    },
    firstUpdateXP: function () {
        var points = localStorage.getItem('xpPoints'), level = localStorage.getItem('level'), current = localStorage.getItem('xpCurrent'), max = localStorage.getItem('xpMax');
        // Level
        {
            if (level == '' || level == null || level == undefined) {
                XP.level = 1;
                localStorage.setItem('level', "" + XP.level);
            }
            else
                XP.level = Number(level);
            XP.updateLevelViewer();
        }
        // XP Points
        {
            if (points == '' || points == null || points == undefined) {
                XP.points = 3;
                localStorage.setItem('xpPoints', "" + XP.points);
            }
            else
                XP.points = Number(points);
            XP.updateXPPointsViewer();
        }
        // Current XP
        {
            if (current == '' || current == null || current == undefined) {
                XP.current = 0;
                localStorage.setItem('xpCurrent', "" + XP.current);
            }
            else
                XP.current = Number(current);
            XP.updateXPBarViewer();
        }
        // Max XP
        {
            if (max == '' || max == null || max == undefined) {
                XP.max = 100;
                localStorage.setItem('xpMax', "" + XP.max);
            }
            else
                XP.max = Number(max);
            XP.updateXPBarMax();
        }
    },
    firstUpdateAttributes: function () {
        var str = localStorage.getItem('str'), vit = localStorage.getItem('vit'), spd = localStorage.getItem('spd'), dex = localStorage.getItem('dex'), int = localStorage.getItem('int');
        // Str
        {
            if (str == '' || str == null || str == undefined) {
                Attributes.updateStr(3);
                localStorage.setItem('str', "" + Attributes.str);
            }
            else
                Attributes.updateStr(Number(str));
        }
        // Vit
        {
            if (vit == '' || vit == null || vit == undefined) {
                Attributes.updateVit(3);
                localStorage.setItem('vit', "" + Attributes.vit);
            }
            else
                Attributes.updateVit(Number(vit));
        }
        // Spd
        {
            if (spd == '' || spd == null || spd == undefined) {
                Attributes.updateSpd(3);
                localStorage.setItem('spd', "" + Attributes.spd);
            }
            else
                Attributes.updateSpd(Number(spd));
        }
        // Dex
        {
            if (dex == '' || dex == null || dex == undefined) {
                Attributes.updateDex(3);
                localStorage.setItem('dex', "" + Attributes.dex);
            }
            else
                Attributes.updateDex(Number(dex));
        }
        // Int
        {
            if (int == '' || int == null || int == undefined) {
                Attributes.updateInt(3);
                localStorage.setItem('int', "" + Attributes.int);
            }
            else
                Attributes.updateInt(Number(int));
        }
        // Atualização da exibição dos atributos
        var progressBar = $('.progress-bar'), progressBarValue = $('.progress-bar-value');
        for (var x = 0; x < 5; x++) {
            switch (x) {
                case 0:
                    progressBar[0].value = String(Attributes.str);
                    progressBarValue[0].value = String(Attributes.str);
                    break;
                case 1:
                    progressBar[1].value = String(Attributes.vit);
                    progressBarValue[1].value = String(Attributes.vit);
                    break;
                case 2:
                    progressBar[2].value = String(Attributes.spd);
                    progressBarValue[2].value = String(Attributes.spd);
                    break;
                case 3:
                    progressBar[3].value = String(Attributes.dex);
                    progressBarValue[3].value = String(Attributes.dex);
                    break;
                case 4:
                    progressBar[4].value = String(Attributes.int);
                    progressBarValue[4].value = String(Attributes.int);
                    break;
                default:
                    break;
            }
        }
    },
    initChange: function () {
        ChangeAttributesValues.str.on('change', ChangeAttributesValues.strChange);
        ChangeAttributesValues.vit.on('change', ChangeAttributesValues.vitChange);
        ChangeAttributesValues.spd.on('change', ChangeAttributesValues.spdChange);
        ChangeAttributesValues.dex.on('change', ChangeAttributesValues.dexChange);
        ChangeAttributesValues.int.on('change', ChangeAttributesValues.intChange);
    },
    buttonsInit: function () {
        ButtonsHTML.newGameButton.on('click', Modal.NewGame.openNewGame);
        ButtonsHTML.loadGameButton.on('click', Modal.NewGame.openLoadGame);
        Modal.NewGame.closeLoadStoped.on('click', Modal.NewGame.closeLoadStop);
        ButtonsHTML.returnToGameMenu.on('click', Modal.GameMenu.open);
        Modal.NewGame.confirmNameButton.on('click', Modal.NewGame.openBreedSelector);
        Modal.NewGame.closeNameInvalidationButton.on('click', Modal.NewGame.closeNameInvalidation);
        Modal.Status.button.on('dblclick', Modal.Status.openClose);
        Modal.Status.button.on('click', Modal.Status.select);
        Modal.Status.move();
        Modal.saveData.closeSave.on('click', Modal.saveData.close);
    }
};
Game.init();
