export function mg(val) { this.element.style.margin = (typeof val === 'string') ? val : val + 'px'; return this; }

export function ml(val) { this.element.style.marginLeft   = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mr(val) { this.element.style.marginRight  = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mt(val) { this.element.style.marginTop    = (typeof val === 'string') ? val : val + 'px'; return this; }
export function mb(val) { this.element.style.marginBottom = (typeof val === 'string') ? val : val + 'px'; return this; }

export function mh(val) { return this.mr(val).ml(val); }
export function mv(val) { return this.mt(val).mb(val); }

export function mtl(val) { return this.mt(val).ml(val); }
export function mtr(val) { return this.mt(val).mr(val); }
export function mbl(val) { return this.mb(val).ml(val); }
export function mbr(val) { return this.mb(val).mr(val); }


export function pd(val) { this.element.style.padding = (typeof val === 'string') ? val : val + 'px'; return this; }

export function pl(val) { this.element.style.paddingLeft   = (typeof val === 'string') ? val : val + 'px'; return this; }
export function pr(val) { this.element.style.paddingRight  = (typeof val === 'string') ? val : val + 'px'; return this; }
export function pt(val) { this.element.style.paddingTop    = (typeof val === 'string') ? val : val + 'px'; return this; }
export function pb(val) { this.element.style.paddingBottom = (typeof val === 'string') ? val : val + 'px'; return this; }

export function ph(val) { return this.pr(val).pl(val); }
export function pv(val) { return this.pt(val).pb(val); }

export function ptl(val) { return this.pt(val).pl(val); }
export function ptr(val) { return this.pt(val).pr(val); }
export function pbl(val) { return this.pb(val).pl(val); }
export function pbr(val) { return this.pb(val).pr(val); }

export function contentBox() { this.element.style.boxSizing = 'content-box'; return this; }
export function borderBox()  { this.element.style.boxSizing = 'border-box';  return this; }
export function paddingBox() { this.element.style.boxSizing = 'padding-box'; return this; }
