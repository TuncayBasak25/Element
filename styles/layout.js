export function dflex() { this.element.style.display = 'flex'; return this; }
export function dblock() { this.element.style.display = 'block'; return this; }
export function dinline() { this.element.style.display = 'inline'; return this; }
export function dnone() { this.element.style.display = 'none'; return this; }

export function absolute() { this.element.style.position = 'absolute'; return this; }
export function relative() { this.element.style.position = 'relative'; return this; }

export function top(val) { this.element.style.top = val + 'px'; return this; }
export function right(val) { this.element.style.right = val + 'px'; return this; }
export function left(val) { this.element.style.left = val + 'px'; return this; }
export function bot(val) { this.element.style.bottom = val + 'px'; return this; }

export function floatLeft() { this.element.style.float = 'left'; return this; }
export function floatRight() { this.element.style.float = 'right'; return this; }

export function zIndex(val) { this.element.style.zIndex = val; return this; }

export function overflowHidden() { this.style.element.overflow = 'hidden'; return this; }
export function overflowVisible() { this.style.element.overflow = 'visible'; return this; }
export function overflowScroll() { this.style.element.overflow = 'scroll'; return this; }

export function overflowXHidden() { this.style.element.overflowX = 'hidden'; return this; }
export function overflowXVisible() { this.style.element.overflowX = 'visible'; return this; }
export function overflowXScroll() { this.style.element.overflowX = 'scroll'; return this; }

export function overflowYHidden() { this.style.element.overflowY = 'hidden'; return this; }
export function overflowYVisible() { this.style.element.overflowY = 'visible'; return this; }
export function overflowYScroll() { this.style.element.overflowY = 'scroll'; return this; }

export function resize(val) { this.style.element.resize = val; return this; }
