if ( typeof logx === 'undefined' ) {
    let logx = ( arg ) => {
        return console.log( arg )
    }
    logx.warn = ( arg ) => {
        return console.info( `%c${arg}`, 'color: blue; font-style: italic' )
    }
    logx.error= ( arg ) => {
        return console.info( `%c${arg}`, 'color: red; font-style: italic' )
    }
    window.logx = logx
} 

export default logx