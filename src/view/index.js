import Render from './render'

class Init {
	constructor(oCanvas, target) {
		let canvas = document.createElement("canvas")
		canvas.width = oCanvas.width
		canvas.height = oCanvas.height
		canvas.style.backgroundColor = oCanvas.backgroundColor
		target.appendChild( canvas )
		this.canvas = canvas
	}

	render( oSeries ) {
		let eleFromRender = []
		oSeries.forEach(ele => {
			eleFromRender.push( new Render( ele, this.canvas ) )
		})		 
		return eleFromRender
	}
}

export default Init