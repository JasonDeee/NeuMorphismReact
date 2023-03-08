import "../Styles/App.css";

const ButtonFull = (Props) => {
  return (
    <button className="ButtonContainer Button_Full">
      <div
        className="Button_Icon"
        style={{ backgroundImage: `url("${Props.IconURL}")` }}
      ></div>
      <label>{Props.Label}</label>
    </button>
  );
};

export { ButtonFull };
