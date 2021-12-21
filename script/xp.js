var XP = {
    points: 3,
    level: 1,
    current: 0,
    max: 100,
    levelViewer: $('#level-viewer > span'),
    xpBarViewer: $('#xp-bar'),
    xpPointsViewer: $('#xp-points'),
    increment: function (qnt) {
        XP.current = XP.current + qnt;
        if (XP.current >= XP.max) {
            XP.levelUp();
        }
        else
            this.updateXPBarViewer();
    },
    payWithPoints: function (dec) {
        XP.points = XP.points - dec;
        XP.updateXPPointsViewer();
    },
    levelUp: function () {
        if (XP.current > XP.max) {
            var excess = XP.current - XP.max;
            XP.current = 0 + excess;
        }
        else
            XP.current = 0;
        XP.upXPMax();
        XP.updateXPBarMax();
        XP.updateXPBarViewer();
        XP.points = XP.points + 3;
        XP.level = XP.level + 1;
        XP.updateXPPointsViewer();
        XP.updateLevelViewer();
    },
    upXPMax: function () {
        XP.max = XP.max + 50;
    },
    updateLevelViewer: function () {
        XP.levelViewer.text("N\u00EDvel " + XP.level);
    },
    updateXPPointsViewer: function () {
        XP.xpPointsViewer.val(XP.points);
    },
    updateXPBarViewer: function () {
        XP.xpBarViewer.val(XP.current);
    },
    updateXPBarMax: function () {
        XP.xpBarViewer.attr('max', XP.max);
    }
};
