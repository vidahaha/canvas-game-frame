import Render from './render'

class Init {
	constructor(w, h, color, target) {
		let canvas = document.createElement("canvas")
		canvas.width = w
		canvas.height = h
		target.appendChild( canvas )
		this.canvas = canvas
	}

	render( ele ) {
		ele = new Render()
	}
}

export default Init