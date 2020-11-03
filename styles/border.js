export function bd({ width, color, style, radius })
{
  if (!width && !color && !style && !radius)
  {
    this.element.style.border = 'none';
    return this;
  }

  width  ? this.bw(width)   : null;
  color  ? this.bc(color)   : null;
  style  ? this.bs(style)   : null;
  radius ? this.br(radius) : null;

  return this;
}

export function bw(val) { this.element.style.borderWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bc(val) { this.element.style.borderColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bs(val) { this.element.style.borderStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function brw(val) { this.element.style.borderRightWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function brc(val) { this.element.style.borderRightColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function brs(val) { this.element.style.borderRightStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function blw(val) { this.element.style.borderLeftWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function blc(val) { this.element.style.borderLeftColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bls(val) { this.element.style.borderLeftStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function btw(val) { this.element.style.borderTopWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function btc(val) { this.element.style.borderTopColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bts(val) { this.element.style.borderTopStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function bbw(val) { this.element.style.borderBottomWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bbc(val) { this.element.style.borderBottomColor = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bbs(val) { this.element.style.borderBottomStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

export function bhw(val) { return this.blw(val).brw(val); }
export function bhc(val) { return this.blc(val).brc(val); }
export function bhs(val) { return this.bls(val).brs(val); }

export function bvw(val) { return this.btw(val).bbw(val); }
export function bvc(val) { return this.btc(val).bbc(val); }
export function bvs(val) { return this.bts(val).bbs(val); }

export function br(val) { this.element.style.borderRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

export function btrr(val) { this.element.style.borderTopRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function btlr(val) { this.element.style.borderTopLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bbrr(val) { this.element.style.borderBottomRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
export function bblr(val) { this.element.style.borderBottomLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

export function blr(val) { return this.btlr(val).bblr(val); }
export function brr(val) { return this.btrr(val).bbrr(val); }
export function btr(val) { return this.btlr(val).btrr(val); }
export function bbr(val) { return this.bblr(val).bbrr(val); }
