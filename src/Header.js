function Header() {

  // "color": "#111"
  // "fontWeight": "bold"  
  /*
  letterspace 20
     "noto"
     "optima"
     "didot"
     "Lucidatypewriter"
     "Arnoldboecklin"
     "corbel"
     "Helvetica Neue"
     "Neue"
*/
  const headerStyle = {
    "color": "white",
    "background": "#edb211",
    "fontSize": "120px",
    "letterSpacing": "10px",
    "lineHeight": "1.5",
    "textAlign": "center",
    "fontFamily": "",
    "fontWeight": ""
  }

  return (
    <div className="header" style={headerStyle}>words.smith</div>
  )
};

export default Header;