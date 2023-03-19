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

//

const SliderIndex = (Props) => {
  //
  const MaxIndexArray = Array.from(
    { length: Props.FinalIndex },
    (_, index) => index + 1
  );

  const spans = MaxIndexArray.map((number) => (
    <span key={number}>{"0" + number}</span>
  ));

  return (
    <div className="Slider_Indexes">
      <div
        className="Current_Index"
        style={{ transform: `translateY(-${Props.Current_Index * 0.8}rem)` }}
        // style={{ transform: `translateY(-2rem)` }}
      >
        {spans}
      </div>
      <hr></hr>
      <span>{"0" + Props.FinalIndex}</span>
    </div>
  );
};

//
// Button chỉ có text

const ButtonTextOnly = (Props) => {
  return (
    <button className="ButtonContainer Button_Text_Only">
      <div className="Button_Overlay"></div>
      <label>{Props.Label}</label>
    </button>
  );
};
export { ButtonFull, ButtonSlider, SliderIndex, ButtonTextOnly };
