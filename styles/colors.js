export const colors = {
  orange: 'orange',
  white: 'white',
  black: 'black'
}


export const bgColors = {};
Object.entries(colors).map( ([name, value]) => {
  bgColors['bg' + name] = function() { this.element.style.backGroundColor = value; return this; }
});

export const textColors = {};
Object.entries(colors).map( ([name, value]) => {
  textColors['text' + name] = function() { this.element.style.backGroundColor = value; return this; }
});

export const borderColors = {};
Object.entries(colors).map( ([name, value]) => {
  borderColors['border' + name] = function() { this.element.style.backGroundColor = value; return this; }
});
