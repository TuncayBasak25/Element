class Element
{
  constructor(tag)
  {
    this.tag = tag;
    this.element = document.createElement(tag);
  }

  get()
  {
    return this.element;
  }

  remove()
  {
    return this.element.remove();
  }

  append(child)
  {
    return this.element.appendChild(child);
  }

  //////////////////////////////////////////////////////////////////////
  //*** STYLES
  /////////////////////////////////////////////////////////////////////

  bd({ width, color, style, radius })
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

  bw(val) { this.element.style.borderWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
  bc(val) { this.element.style.borderColor = (typeof val === 'string') ? val : val + 'px'; return this; }
  bs(val) { this.element.style.borderStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

  brw(val) { this.element.style.borderRightWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
  brc(val) { this.element.style.borderRightColor = (typeof val === 'string') ? val : val + 'px'; return this; }
  brs(val) { this.element.style.borderRightStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

  blw(val) { this.element.style.borderLeftWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
  blc(val) { this.element.style.borderLeftColor = (typeof val === 'string') ? val : val + 'px'; return this; }
  bls(val) { this.element.style.borderLeftStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

  btw(val) { this.element.style.borderTopWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
  btc(val) { this.element.style.borderTopColor = (typeof val === 'string') ? val : val + 'px'; return this; }
  bts(val) { this.element.style.borderTopStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

  bbw(val) { this.element.style.borderBottomWidth = (typeof val === 'string') ? val : val + 'px'; return this; }
  bbc(val) { this.element.style.borderBottomColor = (typeof val === 'string') ? val : val + 'px'; return this; }
  bbs(val) { this.element.style.borderBottomStyle = (typeof val === 'string') ? val : val + 'px'; return this; }

  bhw(val) { return this.blw(val).brw(val); }
  bhc(val) { return this.blc(val).brc(val); }
  bhs(val) { return this.bls(val).brs(val); }

  bvw(val) { return this.btw(val).bbw(val); }
  bvc(val) { return this.btc(val).bbc(val); }
  bvs(val) { return this.bts(val).bbs(val); }

  br(val) { this.element.style.borderRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

  btrr(val) { this.element.style.borderTopRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
  btlr(val) { this.element.style.borderTopLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
  bbrr(val) { this.element.style.borderBottomRightRadius = (typeof val === 'string') ? val : val + 'px'; return this; }
  bblr(val) { this.element.style.borderBottomLeftRadius = (typeof val === 'string') ? val : val + 'px'; return this; }

  blr(val) { return this.btlr(val).bblr(val); }
  brr(val) { return this.btrr(val).bbrr(val); }
  btr(val) { return this.btlr(val).btrr(val); }
  bbr(val) { return this.bblr(val).bbrr(val); }

  width(val)  { this.element.style.width  = (typeof val === 'string') ? val : val + 'px'; return this; }
  height(val) { this.element.style.height = (typeof val === 'string') ? val : val + 'px'; return this; }

  minWidth(val)  { this.element.style.minWidth  = (typeof val === 'string') ? val : val + 'px'; return this; }
  minHeight(val) { this.element.style.minHeight = (typeof val === 'string') ? val : val + 'px'; return this; }

  maxWidth(val)  { this.element.style.maxWidth  = (typeof val === 'string') ? val : val + 'px'; return this; }
  maxHeight(val) { this.element.style.maxHeight = (typeof val === 'string') ? val : val + 'px'; return this; }

  ratio(val)
  {
    if (typeof val === 'integer') this.element.style.height = this.element.getBoundingClientRect().width + 'px';
    else console.log('Ratio type error');
    return this;
  }

  fgrw(val) { this.element.style.flexGrow = val;   return this; }
  fshr(val) { this.element.style.flexShrink = val; return this; }
  fbas(val) { this.element.style.flexBasis = val;  return this; }

  flex(a, b, c) { this.element.style.flex = `${a} ${b} ${c}`; return this; }

  wrap() { this.element.style.flexWrap = 'wrap'; return this; }
  noWrap() { this.element.style.flexWrap = 'no-wrap'; return this; }

  row() { this.element.style.flexDirection = 'row'; return this; }
  col() { this.element.style.flexDirection = 'column'; return this; }
  rowReverse() { this.element.style.flexDirection = 'row-reverse'; return this; }
  colReverse() { this.element.style.flexDirection = 'column-reverse'; return this; }

  jcc()  { this.element.style.justifyContent = 'center'; return this; }
  jcb()  { this.element.style.justifyContent = 'space-between'; return this; }
  jca()  { this.element.style.justifyContent = 'space-around'; return this; }
  jce()  { this.element.style.justifyContent = 'space-evenly'; return this; }
  jcfs() { this.element.style.justifyContent = 'flex-start'; return this; }
  jcfe() { this.element.style.justifyContent = 'flex-end'; return this; }

  aic()  { this.element.style.alignItems = 'center'; return this; }
  ais()  { this.element.style.alignItems = 'stretch'; return this; }
  aib()  { this.element.style.alignItems = 'baseline'; return this; }
  aifs() { this.element.style.alignItems = 'flex-start'; return this; }
  aife() { this.element.style.alignItems = 'flex-end'; return this; }

  asc()  { this.element.style.alignSelf = 'center'; return this; }
  ass()  { this.element.style.alignSelf = 'stretch'; return this; }
  asb()  { this.element.style.alignSelf = 'baseline'; return this; }
  asfs() { this.element.style.alignSelf = 'flex-start'; return this; }
  asfe() { this.element.style.alignSelf = 'flex-end'; return this; }

  acc()  { this.element.style.alignContent = 'center'; return this; }
  acs()  { this.element.style.alignContent = 'stretch'; return this; }
  acb()  { this.element.style.alignContent = 'baseline'; return this; }
  acfs() { this.element.style.alignContent = 'flex-start'; return this; }
  acfe() { this.element.style.alignContent = 'flex-end'; return this; }

  order(val) { this.element.style.order = val; return this; }

  dflex() { this.element.style.display = 'flex'; return this; }
  dblock() { this.element.style.display = 'block'; return this; }
  dinline() { this.element.style.display = 'inline'; return this; }
  dnone() { this.element.style.display = 'none'; return this; }

  absolute() { this.element.style.position = 'absolute'; return this; }
  relative() { this.element.style.position = 'relative'; return this; }

  top(val) { this.element.style.top = val + 'px'; return this; }
  right(val) { this.element.style.right = val + 'px'; return this; }
  left(val) { this.element.style.left = val + 'px'; return this; }
  bot(val) { this.element.style.bottom = val + 'px'; return this; }

  floatLeft() { this.element.style.float = 'left'; return this; }
  floatRight() { this.element.style.float = 'right'; return this; }

  zIndex(val) { this.element.style.zIndex = val; return this; }

  overflowHidden() { this.style.element.overflow = 'hidden'; return this; }
  overflowVisible() { this.style.element.overflow = 'visible'; return this; }
  overflowScroll() { this.style.element.overflow = 'scroll'; return this; }

  overflowXHidden() { this.style.element.overflowX = 'hidden'; return this; }
  overflowXVisible() { this.style.element.overflowX = 'visible'; return this; }
  overflowXScroll() { this.style.element.overflowX = 'scroll'; return this; }

  overflowYHidden() { this.style.element.overflowY = 'hidden'; return this; }
  overflowYVisible() { this.style.element.overflowY = 'visible'; return this; }
  overflowYScroll() { this.style.element.overflowY = 'scroll'; return this; }

  resize(val) { this.style.element.resize = val; return this; }

  mg(val) { this.element.style.margin = (typeof val === 'string') ? val : val + 'px'; return this; }

  ml(val) { this.element.style.marginLeft   = (typeof val === 'string') ? val : val + 'px'; return this; }
  mr(val) { this.element.style.marginRight  = (typeof val === 'string') ? val : val + 'px'; return this; }
  mt(val) { this.element.style.marginTop    = (typeof val === 'string') ? val : val + 'px'; return this; }
  mb(val) { this.element.style.marginBottom = (typeof val === 'string') ? val : val + 'px'; return this; }

  mh(val) { return this.mr(val).ml(val); }
  mv(val) { return this.mt(val).mb(val); }

  mtl(val) { return this.mt(val).ml(val); }
  mtr(val) { return this.mt(val).mr(val); }
  mbl(val) { return this.mb(val).ml(val); }
  mbr(val) { return this.mb(val).mr(val); }


  pd(val) { this.element.style.padding = (typeof val === 'string') ? val : val + 'px'; return this; }

  pl(val) { this.element.style.paddingLeft   = (typeof val === 'string') ? val : val + 'px'; return this; }
  pr(val) { this.element.style.paddingRight  = (typeof val === 'string') ? val : val + 'px'; return this; }
  pt(val) { this.element.style.paddingTop    = (typeof val === 'string') ? val : val + 'px'; return this; }
  pb(val) { this.element.style.paddingBottom = (typeof val === 'string') ? val : val + 'px'; return this; }

  ph(val) { return this.pr(val).pl(val); }
  pv(val) { return this.pt(val).pb(val); }

  ptl(val) { return this.pt(val).pl(val); }
  ptr(val) { return this.pt(val).pr(val); }
  pbl(val) { return this.pb(val).pl(val); }
  pbr(val) { return this.pb(val).pr(val); }

  contentBox() { this.element.style.boxSizing = 'content-box'; return this; }
  borderBox()  { this.element.style.boxSizing = 'border-box';  return this; }
  paddingBox() { this.element.style.boxSizing = 'padding-box'; return this; }

  bg(color) { this.element.style.backGroundColor = color; return this; }
  text(color) { this.element.style.color = color; return this; }
  border(color) { this.element.style.borderColor = color; return this; }
}
