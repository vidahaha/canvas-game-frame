const BASIC_SHAPE_ATTRIBUTES = {
	width: 0,
	height: 0,
	border: 0,
	borderRadius: 0
}

const BASIC_COLOR_ATTRIBUTES = {
	color: '#000',
	backgroundColor: '#000',
	borderColor: '#000'
}

class Render {

    constructor(ele, canvas) {
		let ctx = canvas.getContext('2d')
		this.view = ele
		if( ctx ) {
			this._draw( ctx, ele )
		}
	}
	
	_draw( ctx, ele ) {
		let { type, shape, position, attr } = ele
		ctx.fillStyle = attr.backgroundColor || 'red'
		switch( type ) {
			case 'square': {
				ctx.fillRect(position[0], position[1], shape[0], shape[1])
				break
			}
			case 'circular': {
				ctx.beginPath()
				ctx.arc(position[0], position[1], shape[0], 0, Math.PI*2)
				ctx.fill()
			}
		}		
	}
}


export default Render