import Init from './src/view/index'

let vida = {

    setOption(option = {
        canvas: {
            width: 500,
            hight: 500,
            background: '#666',
            opacity: 0.8
        },

        series: [{
            name: 'vida_1',
            type: 'circular',
            shape: [5],
            attr: {
                backgroundColor: 'red'
            }
        }, {
            name: 'vida_2',
            type: 'square',
            shape: [5, 10],
            attr: {
                backgroundColor: 'red'
            }
        }]
    }) {
        const canvas = this._initCanvas( option.canvas )
        canvas.render( option.series )
    },

    _initCanvas( oCanvas ) {
        let target = document.getElementById('canvas')
        let canvas = new Init(oCanvas, target)
        return canvas
    }
}

export default window.vida = vida
