function Instructions() {
  const instructionStyle = {

  };

  const h4Style = {
    "color": "#black",
    "fontFamily": "Open Sans, sans-serif", 
    "fontSize": "30px",
    "fontWeight": "10", 
    "lineHeight": "32px",
    "margin": "30px 0 30px", 
    "textAlign": "center"
  };

  const pStyle ={
    "color": "black",
    "fontFamily": "Helvetica Neue, sans-serif",
    "fontSize": "14px",
    "lineHeight": "24px",
    "margin": "0 0 24px",
  };

  return (
    <div className="instructions" style={instructionStyle}>
      <h4 style={h4Style}>How To Play</h4>
      <p style={pStyle}>Guess the word in 6 tries.</p>
      <p style={pStyle}>Each guess must be a valid 5-letter word</p>
      <p style={pStyle}>The color of the tiles will change to show how close your guess was to the word.</p>
      <p style={pStyle}>Green - correct letter in the correct spot</p>
      <p style={pStyle}>Yellow - letter is in the word but in the wrong spot</p>
      <p style={pStyle}>Gray - is not in the word in any spot</p>
    </div>
  )
};

export default Instructions;