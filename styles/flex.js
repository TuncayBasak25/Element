export function fgrw(val) { this.element.style.flexGrow = val;   return this; }
export function fshr(val) { this.element.style.flexShrink = val; return this; }
export function fbas(val) { this.element.style.flexBasis = val;  return this; }

export function flex(a, b, c) { this.element.style.flex = `${a} ${b} ${c}`; return this; }

export function wrap() { this.element.style.flexWrap = 'wrap'; return this; }
export function noWrap() { this.element.style.flexWrap = 'no-wrap'; return this; }

export function row() { this.element.style.flexDirection = 'row'; return this; }
export function col() { this.element.style.flexDirection = 'column'; return this; }
export function rowReverse() { this.element.style.flexDirection = 'row-reverse'; return this; }
export function colReverse() { this.element.style.flexDirection = 'column-reverse'; return this; }

export function jcc()  { this.element.style.justifyContent = 'center'; return this; }
export function jcb()  { this.element.style.justifyContent = 'space-between'; return this; }
export function jca()  { this.element.style.justifyContent = 'space-around'; return this; }
export function jce()  { this.element.style.justifyContent = 'space-evenly'; return this; }
export function jcfs() { this.element.style.justifyContent = 'flex-start'; return this; }
export function jcfe() { this.element.style.justifyContent = 'flex-end'; return this; }

export function aic()  { this.element.style.alignItems = 'center'; return this; }
export function ais()  { this.element.style.alignItems = 'stretch'; return this; }
export function aib()  { this.element.style.alignItems = 'baseline'; return this; }
export function aifs() { this.element.style.alignItems = 'flex-start'; return this; }
export function aife() { this.element.style.alignItems = 'flex-end'; return this; }

export function asc()  { this.element.style.alignSelf = 'center'; return this; }
export function ass()  { this.element.style.alignSelf = 'stretch'; return this; }
export function asb()  { this.element.style.alignSelf = 'baseline'; return this; }
export function asfs() { this.element.style.alignSelf = 'flex-start'; return this; }
export function asfe() { this.element.style.alignSelf = 'flex-end'; return this; }

export function acc()  { this.element.style.alignContent = 'center'; return this; }
export function acs()  { this.element.style.alignContent = 'stretch'; return this; }
export function acb()  { this.element.style.alignContent = 'baseline'; return this; }
export function acfs() { this.element.style.alignContent = 'flex-start'; return this; }
export function acfe() { this.element.style.alignContent = 'flex-end'; return this; }

export function order(val) { this.element.style.order = val; return this; }
