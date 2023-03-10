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
      <div className="Button_Overlay"></div>
      <div className="Button_Arrow" id="Prev"></div>
      <div className="Button_Arrow" id="Next"></div>
    </button>
  );
};

export { ButtonFull, ButtonSlider };
