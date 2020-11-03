export function border({ width, color, style, radius })
{
  if (!width && !color && !style && !radius)
  {
    this.element.style.border = 'none';
    return this;
  }

  width  ? this.borderWidth(width)   : null;
  color  ? this.borderColor(color)   : null;
  style  ? this.borderStyle(style)   : null;
  radius ? this.borderRadius(radius) : null;

  return this;
}

export function borderWidth(val) { this.element.style.borderWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderColor(val) { this.element.style.borderColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderStyle(val) { this.element.style.borderStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderRightWidth(val) { this.element.style.borderRightWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderRightColor(val) { this.element.style.borderRightColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderRightStyle(val) { this.element.style.borderRightStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderLeftWidth(val) { this.element.style.borderLeftWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderLeftColor(val) { this.element.style.borderLeftColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderLeftStyle(val) { this.element.style.borderLeftStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderTopWidth(val) { this.element.style.borderTopWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderTopColor(val) { this.element.style.borderTopColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderTopStyle(val) { this.element.style.borderTopStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderBottomWidth(val) { this.element.style.borderBottomWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderBottomColor(val) { this.element.style.borderBottomColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderBottomStyle(val) { this.element.style.borderBottomStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderHorizontalWidth(val) { return this.borderLeftWidth(val).borderRightWidth(val); }
export function borderHorizontalColor(val) { return this.borderLeftColor(val).borderRightColor(val); }
export function borderHorizontalStyle(val) { return this.borderLeftStyle(val).borderRightStyle(val); }

export function borderVerticalWidth(val) { return this.borderTopWidth(val).borderBottomWidth(val); }
export function borderVerticalColor(val) { return this.borderTopColor(val).borderBottomColor(val); }
export function borderVerticalStyle(val) { return this.borderTopStyle(val).borderBottomStyle(val); }

export function borderRadius(val) { this.element.style.borderRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderTopRightRadius(val)    { this.element.style.borderTopRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderTopLeftRadius(val)     { this.element.style.borderTopLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderBottomRightRadius(val) { this.element.style.borderBottomRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function borderBottomLeftRadius(val)  { this.element.style.borderBottomLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

export function borderLeftRadius(val)     { return this.borderTopLeftRadius(val).borderBottomLeftRadius(val); }
export function borderRightRadius(val)    { return this.borderTopRightRadius(val).borderBottomRightRadius(val); }
export function borderTopRadius(val)      { return this.borderTopLeftRadius(val).borderTopRightRadius(val); }
export function borderBottomRadius(val)   { return this.borderBottomLeftRadius(val).borderBottomRightRadius(val); }
