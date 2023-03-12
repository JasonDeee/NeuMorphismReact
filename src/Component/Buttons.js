import "../Styles/App.css";

const ButtonFull = (Props) => {
  return (
    <button className="ButtonContainer Button_Full">
      <div className="Button_Overlay"></div>
      <div
        className="Button_Icon"
        style={{ backgroundImage: `url("${Props.IconURL}")` }}
      ></div>
      <label>{Props.Label}</label>
    </button>
  );
};

const ButtonSlider = (Props) => {
  return (
    <button className="ButtonContainer Button_Slider">
      <div className="Button_Arrow" id="Prev" onClick={Props.PrevFunc}></div>
      <div className="Button_Arrow" id="Next" onClick={Props.NextFunc}></div>
      <div className="Button_Overlay"></div>
    </button>
  );
};

const ButtonTextOnly = (Props) => {
  return (
    <button className="ButtonContainer Button_Text_Only">
      <div className="Button_Overlay"></div>
      <label>{Props.Label}</label>
    </button>
  );
};
export { ButtonFull, ButtonSlider, ButtonTextOnly };
