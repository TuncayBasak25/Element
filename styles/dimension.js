export function width(val)  { this.element.style.width  = (typeof val === 'string') ? val : val + 'px'; return this; }
export function height(val) { this.element.style.height = (typeof val === 'string') ? val : val + 'px'; return this; }

export function minWidth(val)  { this.element.style.minWidth  = (typeof val === 'string') ? val : val + 'px'; return this; }
export function minHeight(val) { this.element.style.minHeight = (typeof val === 'string') ? val : val + 'px'; return this; }

export function maxWidth(val)  { this.element.style.maxWidth  = (typeof val === 'string') ? val : val + 'px'; return this; }
export function maxHeight(val) { this.element.style.maxHeight = (typeof val === 'string') ? val : val + 'px'; return this; }

export function ratio(val)
{
  if (typeof val === 'integer') this.element.style.height = this.element.getBoundingClientRect().width + 'px';
  else console.log('Ratio type error');
  return this;
}
