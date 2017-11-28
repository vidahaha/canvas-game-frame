import Init from './src/view/index'
import logx from './src/util/log'

let vida = {

    setOption(option = {
        canvas: {
            width: 500,
            height: 500,
            background: '#666',
            opacity: 0.8
        },

        series: [{
            name: 'vida_1',
            type: 'circular',
            shape: [20],
            position: [100, 100],
            attr: {
                backgroundColor: 'red'
            }
        }, {
            name: 'vida_2',
            type: 'square',
            shape: [20, 40],
            position: [50, 50],
            attr: {
                backgroundColor: 'red'
            }
        }]
    }) {
        const canvas = this._initCanvas( option.canvas )
        let res = canvas.render( option.series )
        logx.warn( res )
    },

    _initCanvas( oCanvas ) {
        let target = document.getElementById('canvas')
        let canvas = new Init(oCanvas, target)
        return canvas
    }
}

export default window.vida = vida
