export function mg(val) { this.element.style.margin = (typeof val === 'string') ? val : val + 'px'; return this; }

export function ml(val) { this.element.style.marginLeft = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mr(val) { this.element.style.marginRight = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mt(val) { this.element.style.marginTop = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mb(val) { this.element.style.marginBottom = (typeof val === 'string') ? val : val + 'px'; return this; }

export function mh(val) { return this.mr(val).ml(val); }
export function mv(val) { return this.mt(val).mb(val); }

export function mtl(val) { return this.mt(val).ml(val); }
export function mtr(val) { return this.mt(val).mr(val); }
export function mbl(val) { return this.mb(val).ml(val); }
export function mbr(val) { return this.mb(val).mr(val); }
