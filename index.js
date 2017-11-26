import Init from './src/view/index'

let vida = {

    setOption( option ) {

    },

    _initCanvas() {
        let target = document.getElementById('canvas')
        let canvas = new Init(500, 500, '#000', target)
        canvas.render()
    }
}

export default window.vida = vida
