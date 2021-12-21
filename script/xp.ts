const XP = {
    points: 3,
    level: 1,
    current: 0,
    max: 100,

    levelViewer: $('#level-viewer > span'),
    xpBarViewer: $('#xp-bar'),
    xpPointsViewer: $('#xp-points'),

    increment(qnt: number){
        XP.current = XP.current + qnt

        if(XP.current >= XP.max){
            XP.levelUp()
        }

        else this.updateXPBarViewer()
    },

    payWithPoints(dec: number){
        XP.points = XP.points - dec
        XP.updateXPPointsViewer()
    },

    levelUp(){
        if(XP.current > XP.max){
            let excess = XP.current - XP.max
            XP.current = 0 + excess
        }

        else XP.current = 0

        XP.upXPMax()
        XP.updateXPBarMax()
        XP.updateXPBarViewer()

        XP.points = XP.points + 3
        XP.level = XP.level + 1

        XP.updateXPPointsViewer()
        XP.updateLevelViewer()
    },

    upXPMax(){
        XP.max = XP.max + 50
    },

    updateLevelViewer(){
        XP.levelViewer.text(`Nível ${XP.level}`)
    },

    updateXPPointsViewer(){
        XP.xpPointsViewer.val(XP.points)
    },

    updateXPBarViewer(){
        XP.xpBarViewer.val(XP.current)
    },

    updateXPBarMax(){
        XP.xpBarViewer.attr('max', XP.max)
    }
}