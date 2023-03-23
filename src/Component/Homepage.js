import "../Styles/App.css";
import { useEffect, useState, useRef } from "react";
import {
  ButtonFull,
  ButtonSlider,
  SliderIndex,
  ButtonTextOnly,
} from "./Buttons";

import Copy_Logo from "../Assets/Copy_Logo.svg";
import WatchOut from "../Assets/WatchOut.gif";
import Magnify from "../Assets/Magnify.svg";
import Location from "../Assets/Location.svg";
import ScrollDown from "../Assets/ScrollDown.svg";
import ScrollDown2 from "../Assets/ScrollDown2.svg";
import DownArrow from "../Assets/DownArrow.svg";
import DownArrow2 from "../Assets/DownArrow2.svg";

const HomepageFloat = (Props) => {
  const [Tes_Content_Slider_Width, Tes_Content_Slider_WidthChange] =
    useState(256);

  // Declare Pseudo Funtion for The Onclick At Testimonials (Tes) Section

  const [NextTes, setNextTes] = useState(null);
  const [PrevTes, setPrevTes] = useState(null);

  const [TesCurrentIndex, setTesCurIndex] = useState(0);
  //  const TesCurrentIndex = useRef(0);
  // This Funct Trigger After the Entire Homepage is Mounted
  const HomePageFuncAfterLoad = () => {
    //
    const Tes_Content_Slider = document.querySelector(".Tes_Content_Slider");

    const ResetSize_Tes_Content_Slider = () => {
      //
      Tes_Content_Slider_WidthChange(Tes_Content_Slider.clientWidth);
    };
    ResetSize_Tes_Content_Slider();

    window.addEventListener("resize", ResetSize_Tes_Content_Slider);

    // add the rest of the Testimonials Funtion
    // // First Select the Els

    // Text Holder
    const Tes_Slider_El_Holder = document.querySelector(
      "#Testimonial_Section .Tes_Slider_El_Holder"
    );
    // Images Holder & Images Img_Slide_Holder

    const Img_Slide_Holder = document.querySelector(
      "#Testimonial_Section .Img_Slide_Holder"
    );

    const Imgs_Slide = document.querySelectorAll(
      "#Testimonial_Section .Img_Slide_Holder img"
    );

    // // Init Current State
    var Tes_Slide_Index = 0;

    //
    setNextTes(() => {
      return () => {
        //
        if (Tes_Slide_Index < Imgs_Slide.length - 1) {
          //

          Imgs_Slide[Tes_Slide_Index].classList.remove("on_Active");
          //
          //  TesCurrentIndex.current = TesCurrentIndex.current + 1;
          Tes_Slide_Index++;
          setTesCurIndex(Tes_Slide_Index);

          // setTesCurIndex(TesCurrentIndex.current);

          Imgs_Slide[Tes_Slide_Index].classList.add("on_Active");

          Tes_Slider_El_Holder.style.transform = `translateX(-${
            Tes_Slide_Index * 100
          }%)`;

          Img_Slide_Holder.style.transform = `translateX(-${
            Tes_Slide_Index * 38
          }%)`;
        }
      };
    });

    setPrevTes(() => {
      //

      return () => {
        if (Tes_Slide_Index > 0) {
          Imgs_Slide[Tes_Slide_Index].classList.remove("on_Active");
          //
          Tes_Slide_Index--;
          setTesCurIndex(Tes_Slide_Index);

          Imgs_Slide[Tes_Slide_Index].classList.add("on_Active");
          Tes_Slider_El_Holder.style.transform = `translateX(-${
            Tes_Slide_Index * 100
          }%)`;
          Img_Slide_Holder.style.transform = `translateX(-${
            Tes_Slide_Index * 38
          }%)`;
        }
      };
    });
    //
    // Trigger Right Before the Homepage is Remove
    return () => {
      window.removeEventListener("resize", ResetSize_Tes_Content_Slider);
    };
  };
  useEffect(HomePageFuncAfterLoad, []);

  return (
    <main className="HomepageFloat">
      <header className="Section" id="Header_Section">
        <div className="Header_BG_Overlay Overlay"></div>{" "}
        <div className="Header_Image">
          <img src={WatchOut}></img>
          <p>
            {Props.IsVietnamese
              ? `"Luôn có những người tỏ ra khắt khe với tôi, nhưng họ luôn quan sát và là những người đầu tiên mỉm cười khi tôi đi đúng hướng"`
              : `Manies revealed so stricted to me, but they always observe and always take the 1st place to be so pleasant for my right decisions.`}
          </p>
        </div>
        <div className="Header_Contents">
          <h1>
            {Props.IsVietnamese
              ? "Chúng ta là một cặp nếu bạn"
              : "We are a match"}
            <br></br>
            {Props.IsVietnamese
              ? "là một Agency và đang..."
              : "If you're an Agency and..."}
          </h1>
          {/* <div className="Location_Tag">
            <img src={Location}></img>
            <p>Hà Nội, VN</p>
          </div> */}
          {Props.IsVietnamese ? (
            <p>
              Đang tìm kiếm một người cho giải pháp visual của sản phẩm với đa
              dạng phương pháp tư duy và kinh nghiệm từ thiết kế tới tối ưu trải
              nghiệm người dùng.
            </p>
          ) : (
            <p>
              Looking for a Generalist Visual Designer with a broad mindset
              ranging from multiple platform and experience from design to
              optimize user journey.
            </p>
          )}

          <div className="Header_CTA_Button">
            <div className="Header_Button_Add_Overlay"></div>
            <ButtonFull
              OnClickFunc={() => {
                window.scrollTo(0, window.innerHeight);
              }}
              IconURL={DownArrow2}
              Label={
                Props.IsVietnamese ? "Cách tôi làm việc." : "The ways i work."
              }
            ></ButtonFull>
          </div>
        </div>
      </header>
      <div className="Header_Logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.42 85.08">
          <path
            className="JasonD-Logo--1"
            d="M24.57,64.78c0,2.21-.22,3.83-.65,4.88-.66,1.65-1.93,2.48-3.81,2.48-1.65,0-2.83-.76-3.54-2.29-.48-1.02-.77-2.49-.88-4.42H0c0,4.39,.91,8.11,2.74,11.16,1.98,3.3,4.94,5.66,8.87,7.08,2.41,.94,5.01,1.41,7.81,1.41,6.8,0,12.24-2.53,16.3-7.58,1.57-2.01,2.61-4.61,3.12-7.81,.2-1.27,.34-2.7,.42-4.3,.02-.96,.04-2.39,.04-4.27V26.23h-14.74v38.54Zm57.21-19.88h-.15c-1.22-2.03-3.05-3.58-5.48-4.65-2.18-.96-4.57-1.45-7.16-1.45-6.37,0-11.63,2.27-15.77,6.82-3.99,4.39-5.98,9.83-5.98,16.3s1.96,12.05,5.87,16.42c4.06,4.49,9.36,6.74,15.88,6.74,2.61,0,5.01-.47,7.2-1.41,2.54-1.09,4.35-2.68,5.45-4.76h.15v4.68h12.95V40.29h-12.95v4.61Zm-3.05,24.91c-2.06,2.11-4.65,3.16-7.77,3.16s-5.59-1.07-7.69-3.2c-2.06-2.11-3.08-4.67-3.08-7.69s.99-5.78,2.97-7.88c2.03-2.18,4.61-3.28,7.73-3.28s5.75,1.04,7.81,3.12c2.06,2.08,3.08,4.71,3.08,7.88s-1.02,5.78-3.05,7.88Zm51-10.17c-1.12-.56-2.45-1.09-4-1.6l-3.5-1.1c-.2-.05-.37-.09-.5-.11-1.55-.46-2.7-.85-3.47-1.18-2.29-.91-3.43-2.09-3.43-3.54,0-1.93,1.23-2.89,3.69-2.89,2.61,0,3.96,1.09,4.04,3.28h12.72c-.41-4.44-2.2-7.87-5.37-10.28-2.95-2.26-6.69-3.39-11.24-3.39s-8.32,1.26-11.54,3.77c-3.5,2.72-5.26,6.22-5.26,10.51,0,2.79,1.08,5.21,3.24,7.24,1.7,1.62,4.06,2.98,7.08,4.08l7.5,2.7,1.9,.91c1.37,.86,2.06,1.97,2.06,3.31,0,1.07-.51,1.92-1.52,2.55-.89,.56-1.89,.84-3.01,.84-2.89,0-4.53-1.33-4.91-4h-12.87c.48,4.6,2.41,8.18,5.79,10.74,3.17,2.41,7.12,3.62,11.84,3.62s8.78-1.24,12.11-3.73c3.68-2.74,5.52-6.41,5.52-11.01,0-3.45-1.14-6.23-3.43-8.34-.94-.89-2.09-1.68-3.47-2.36Zm34.58-20.6c-6.65,0-12.19,2.18-16.61,6.55-4.47,4.37-6.7,9.86-6.7,16.49s2.23,12.09,6.7,16.45c4.42,4.37,9.95,6.55,16.61,6.55s12.2-2.18,16.64-6.55c4.47-4.37,6.7-9.85,6.7-16.45s-2.23-12.12-6.7-16.49c-4.44-4.37-9.99-6.55-16.64-6.55Zm7.46,30.7c-2.01,2.16-4.49,3.24-7.46,3.24s-5.42-1.08-7.43-3.24c-1.96-2.13-2.93-4.68-2.93-7.66s.98-5.55,2.93-7.66c2.01-2.18,4.48-3.28,7.43-3.28s5.46,1.09,7.46,3.28c1.96,2.11,2.93,4.66,2.93,7.66s-.98,5.52-2.93,7.66Zm58.27-25.67c-3-2.51-6.69-3.77-11.08-3.77-5.36,0-9.28,2.03-11.77,6.09h-.19v-4.61h-12.07v43.3h12.95v-23.54c0-2.89,.48-5.05,1.45-6.47,1.17-1.73,3.16-2.59,5.98-2.59,2.67,0,4.52,.89,5.56,2.67,.81,1.37,1.22,3.47,1.22,6.28v23.65h12.95v-27.08c0-2.97-.32-5.5-.95-7.58-.81-2.67-2.16-4.79-4.04-6.36Zm47.26-14.7c-2.01-.74-4.25-1.27-6.74-1.6-2.13-.28-4.62-.42-7.46-.42h-19.12v57.74h20.19c19.83,0,29.75-9.67,29.75-29.02,0-7.03-1.78-13.01-5.33-17.94-3.02-4.21-6.78-7.13-11.27-8.76Zm-1.45,38.35c-2.39,2.95-5.99,4.42-10.82,4.42h-6.32v-31.84h6.4c4.7,0,8.26,1.52,10.7,4.57,2.23,2.77,3.35,6.58,3.35,11.43s-1.1,8.73-3.31,11.43Zm27.08,4.11v13.25h13.48v-13.25h-13.48ZM50.5,18.2h5.27c.75,0,1.42-.02,1.99-.06,.72-.05,1.37-.13,1.97-.23,1.43-.26,2.66-.74,3.67-1.43,2.45-1.68,3.67-4.06,3.67-7.13s-1.22-5.44-3.67-7.11c-1.02-.69-2.24-1.17-3.67-1.45-.6-.1-1.26-.18-1.97-.23-.57-.04-1.24-.06-1.99-.06h-8.24V30.12h2.97v-11.91Zm0-15h6.45l1.27,.08c.91,.09,1.74,.32,2.48,.68,2.29,1.08,3.44,2.88,3.44,5.39s-1.15,4.32-3.44,5.41c-.74,.35-1.57,.57-2.48,.66l-1.27,.08h-6.45V3.2Zm28.21,26.91c3.14,0,5.83-1.13,8.09-3.4,2.25-2.25,3.38-4.95,3.38-8.09s-1.13-5.82-3.4-8.09-4.95-3.4-8.07-3.4-5.86,1.15-8.09,3.46c-2.21,2.28-3.32,5.01-3.32,8.18s1.13,5.73,3.4,7.97c2.25,2.24,4.92,3.36,8.01,3.36Zm-6.15-17.71c1.68-1.82,3.74-2.73,6.19-2.73s4.42,.88,6.11,2.64c1.68,1.75,2.52,3.82,2.52,6.21s-.81,4.63-2.42,6.39c-1.67,1.8-3.74,2.7-6.21,2.7s-4.44-.88-6.13-2.64c-1.68-1.74-2.52-3.81-2.52-6.21s.82-4.58,2.46-6.35Zm22.13-1h-.08v-3.16h-2.79V30.12h2.79v-12.79c0-4.11,2.08-6.34,6.25-6.68v-2.97c-1.58,.12-2.81,.41-3.69,.88-1.08,.59-1.91,1.54-2.48,2.85Zm12.12,18.71h2.79V10.76h5.23v-2.52h-5.23V.51h-2.79v7.73h-4.61v2.52h4.61V30.12Zm12.94,0h2.79V10.76h5.61v-2.52h-5.61v-.16c0-3.66,1.87-5.49,5.61-5.49V0c-2.07,.03-3.74,.37-5,1.04-1.54,.81-2.55,2.12-3.03,3.93-.13,.48-.22,1.03-.27,1.64-.03,.23-.05,.51-.06,.82l-.04,.82h-3.4v2.52h3.4V30.12Zm30.37-11.48c0-3.12-1.13-5.82-3.4-8.09s-4.95-3.4-8.07-3.4-5.86,1.15-8.09,3.46c-2.21,2.28-3.32,5.01-3.32,8.18s1.13,5.73,3.4,7.97c2.25,2.24,4.92,3.36,8.01,3.36s5.83-1.13,8.09-3.4c2.25-2.25,3.38-4.95,3.38-8.09Zm-11.43,8.96c-2.4,0-4.44-.88-6.13-2.64-1.68-1.74-2.52-3.81-2.52-6.21s.82-4.58,2.46-6.35c1.68-1.82,3.74-2.73,6.19-2.73s4.42,.88,6.11,2.64c1.68,1.75,2.52,3.82,2.52,6.21s-.81,4.63-2.42,6.39c-1.67,1.8-3.74,2.7-6.21,2.7ZM155.54,.51h-2.79V30.12h2.79V.51Zm6.39,0h-2.79V5.57h2.79V.51Zm0,7.73h-2.79V30.12h2.79V8.24Zm14.26-1.09c-3.16,0-5.86,1.15-8.09,3.46-2.21,2.28-3.32,5.01-3.32,8.18s1.13,5.73,3.4,7.97c2.25,2.24,4.92,3.36,8.01,3.36s5.83-1.13,8.09-3.4c2.25-2.25,3.38-4.95,3.38-8.09s-1.13-5.82-3.4-8.09-4.95-3.4-8.07-3.4Zm6.25,17.75c-1.67,1.8-3.74,2.7-6.21,2.7s-4.44-.88-6.13-2.64c-1.68-1.74-2.52-3.81-2.52-6.21s.82-4.58,2.46-6.35c1.68-1.82,3.74-2.73,6.19-2.73s4.42,.88,6.11,2.64c1.68,1.75,2.52,3.82,2.52,6.21s-.81,4.63-2.42,6.39Zm12.73,4.27h40v-2h-40v2Z"
          />
        </svg>
      </div>
      <section className="Section Column_Grid" id="Works_Showreel_Section">
        <div className="Work_Overlay"></div>
        <h1>Nổi bật</h1>
        <div className="Work_Contents Column_Grid">
          <div className="Work Top_Work" id="work1">
            <div className="Image_Container Lazy_Image Work_Images">
              <div className="Img_Scaler">
                <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
                <label className="Img_CTA_Label">
                  {Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                </label>{" "}
              </div>
            </div>
            <div className="Main_Work_Contents">
              <h2>Key Visual tết 2023</h2>
              <span>
                Kenli trao tuyệt tác
                <br></br>- Gia chủ đón xuân sang
              </span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
              <div className="Work_Button_Holder">
                <ButtonFull
                  IconURL={Magnify}
                  Label={Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                ></ButtonFull>
              </div>
            </div>
          </div>
          <div className="Work" id="work2">
            <div className="Image_Container Lazy_Image Work_Images">
              <div className="Img_Scaler">
                <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
                <label className="Img_CTA_Label">
                  {Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                </label>
              </div>
            </div>
            <div className="Main_Work_Contents">
              <h2>Là một Marketer</h2>
              <span>Key Visual tết 2023</span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
              <div className="Work_Button_Holder">
                <ButtonFull
                  IconURL={Magnify}
                  Label={Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                ></ButtonFull>
              </div>
            </div>
          </div>
          <div className="Work" id="work3">
            <div className="Image_Container Lazy_Image Work_Images">
              <div className="Img_Scaler">
                <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
                <label className="Img_CTA_Label">
                  {Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                </label>
              </div>
            </div>
            <div className="Main_Work_Contents">
              <h2>Là một Marketer</h2>
              <span>Key Visual tết 2023</span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
              <div className="Work_Button_Holder">
                <ButtonFull
                  IconURL={Magnify}
                  Label={Props.IsVietnamese ? "Quy trình." : "My Workflow."}
                ></ButtonFull>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Section Column_Grid" id="About_Section">
        <div className="About_Overlay"></div>
        <div className="About_Contents About_Top_Content">
          <h1>Thông tin</h1>
          <h2>Là một Marketer</h2>{" "}
          <p>
            Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
            In-house team, Agency, Production House và Freelancer, tôi cảm thấy
            may mắn vì trong 5 năm đó được trải nghiệm công việc Marketing ở
            nhiều ngành hàng: từ quen thuộc như các ngành Hàng tiêu dùng (Kem
            đánh răng, Sữa tắm, Nước tăng lực…) cho tới những ngành “ngách” hơn
            như Vận tải hành khách, Công nghệ, Nội thất cao cấp…
          </p>
        </div>
        <div className="About_Images About_Top_Image">
          <div className="Image_Container Lazy_Image Work_Images Full_Screen_Ready_Image">
            <div className="Img_Scaler">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
            </div>
          </div>
        </div>
        <div className="About_Contents">
          <h2>Là một Marketer</h2>
          <p>
            Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
            In-house team, Agency, Production House và Freelancer, tôi cảm thấy
            may mắn vì trong 5 năm đó được trải nghiệm công việc Marketing ở
            nhiều ngành hàng: từ quen thuộc như các ngành Hàng tiêu dùng (Kem
            đánh răng, Sữa tắm, Nước tăng lực…) cho tới những ngành “ngách” hơn
            như Vận tải hành khách, Công nghệ, Nội thất cao cấp…
          </p>
          <h2>Là một Marketer</h2>
          <p>
            Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
            In-house team, Agency, Production House và Freelancer, tôi cảm thấy
            may mắn vì trong 5 năm đó được trải nghiệm công việc Marketing ở
            nhiều ngành hàng: từ quen thuộc như các ngành Hàng tiêu dùng (Kem
            đánh răng, Sữa tắm, Nước tăng lực…) cho tới những ngành “ngách” hơn
            như Vận tải hành khách, Công nghệ, Nội thất cao cấp…
          </p>
        </div>

        <div className="About_Images">
          <div className="Image_Container Lazy_Image Work_Images Full_Screen_Ready_Image">
            <div className="Img_Scaler">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="Section Column_Grid" id="Testimonial_Section">
        <div className="Work_Overlay Tes_Overlay"></div>
        <div className="Tes_Content_Slider">
          <div
            className="Tes_Slider_El_Holder"
            style={{ minWidth: `${Tes_Content_Slider_Width + "px"}` }}
          >
            <div className="Tes_Slider_El">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
              <h2>Là một Marketer</h2>
              <span>Kem đánh răng</span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
            </div>
            <div className="Tes_Slider_El">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
              <h2>Là một Marketer</h2>
              <span>Kem đánh răng</span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
            </div>
            <div className="Tes_Slider_El">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
              <h2>Là một Marketer</h2>
              <span>Kem đánh răng</span>
              <p>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến” như
                In-house team, Agency, Production House và Freelancer, tôi cảm
                thấy may mắn vì trong 5 năm đó được trải nghiệm công việc
                Marketing ở nhiều ngành hàng: từ quen thuộc như các ngành Hàng
                tiêu dùng (Kem đánh răng, Sữa tắm, Nước tăng lực…) cho tới những
                ngành “ngách” hơn như Vận tải hành khách, Công nghệ, Nội thất
                cao cấp…
              </p>
            </div>
          </div>{" "}
          <svg
            className="Double_Quotes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 74 59"
          >
            <defs>
              <linearGradient
                id="Main_Gradient"
                x1="22.7"
                y1="1.88"
                x2="57.62"
                y2="62.36"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#8e724b" />
                <stop offset="1" stopColor="#cdb99d" />
              </linearGradient>
            </defs>
            <path
              className="Double_Quotes_Vector-1"
              d="M16.62,59c-5.37,0-9.52-1.83-12.46-5.48-2.77-3.83-4.15-9.05-4.15-15.66,0-8.18,1.99-15.14,5.97-20.89C10.13,11.05,16.79,5.4,25.96,0l4.67,6.79c-4.85,2.96-8.57,6.09-11.16,9.4-2.6,3.31-3.89,6.79-3.89,10.44,0,2.09,.26,4,.78,5.74,.52,1.74,2.25,3.83,5.19,6.27,1.56,1.22,2.86,2.7,3.89,4.44,1.21,1.74,1.82,3.57,1.82,5.48,0,3.13-.95,5.66-2.86,7.57-1.9,1.91-4.5,2.87-7.79,2.87Zm43.36,0c-5.37,0-9.52-1.83-12.46-5.48-2.77-3.83-4.15-9.05-4.15-15.66,0-8.18,1.99-15.14,5.97-20.89,4.15-5.92,10.82-11.57,19.99-16.97l4.67,6.79c-4.85,2.96-8.57,6.09-11.16,9.4-2.6,3.31-3.89,6.79-3.89,10.44,0,2.09,.26,4,.78,5.74,.52,1.74,2.25,3.83,5.19,6.27,1.56,1.22,2.86,2.7,3.89,4.44,1.21,1.74,1.82,3.57,1.82,5.48,0,3.13-.95,5.66-2.86,7.57-1.9,1.91-4.5,2.87-7.79,2.87Z"
            />
          </svg>
        </div>
        <div className="Tes_Img_Slider">
          <div className="Img_Slide_Holder">
            <img
              className="on_Active"
              src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"
            ></img>
            <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
            <img src="https://i.kym-cdn.com/entries/icons/original/000/037/158/thinkmarkthumbnail.PNG"></img>
          </div>
          <div className="Tes_Controllers">
            <SliderIndex
              FinalIndex="3"
              Current_Index={TesCurrentIndex}
              inputRef={TesCurrentIndex}
            ></SliderIndex>
            <ButtonSlider PrevFunc={PrevTes} NextFunc={NextTes}></ButtonSlider>
          </div>
        </div>
      </section>
      <section className="Section Column_Grid" id="Form_Section">
        <h1>Liên hệ</h1>
        <form id="Contact_Form" name="Contact_Form">
          <label htmlFor="Contact_Form" id="Form_Label">
            <h2>
              {Props.IsVietnamese
                ? "Nhắn tôi gì đó?"
                : "Wanna discuss something?"}
            </h2>
          </label>
          <input
            type="email"
            id="Email_Input"
            name="Email"
            placeholder={Props.IsVietnamese ? "Email của bạn" : "Your Email?"}
            required
          ></input>
          <textarea
            name="Messages"
            id="Message_Input"
            required
            placeholder={Props.IsVietnamese ? "Nội dung" : "Tell me something?"}
          ></textarea>
          <div className="Contact_Form_Button_Holder">
            <ButtonFull
              IconURL={Copy_Logo}
              Label={Props.IsVietnamese ? "Gửi nào." : "Deliver it."}
            ></ButtonFull>
          </div>
        </form>
        <div className="Email_Contact">
          <h2>
            {Props.IsVietnamese
              ? "Hoặc gửi mail cho tôi."
              : "Or give me an email."}
          </h2>
          <div className="Email_Holder">
            <div className="Illustration_Holder">
              <img src={WatchOut}></img>
            </div>
            <div className="Email_Content">
              <p>Là một Marketer với 5 năm kinh nghiệm</p>
              <a href="mailto:jdbl2k@hotmail.com">
                <ButtonFull
                  IconURL={Copy_Logo}
                  Label="jdbl2k@hotmail.com"
                ></ButtonFull>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="Section Footer Column_Grid">
        <div className="Footer_Col" id="Col1">
          <ul>
            <h2>{Props.IsVietnamese ? "Đối tác" : "Partner?"}</h2>
            <li>
              <small>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến”
              </small>
            </li>
            <li>
              <small>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến”
              </small>
            </li>
          </ul>
        </div>
        <div className="Footer_Col" id="Col2">
          <ul>
            <h2>{Props.IsVietnamese ? "Đã nhắc tới" : "Mentioned?"}</h2>
            <li>
              <small>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến”
              </small>
            </li>
            <li>
              <small>
                Là một Marketer với 5 năm kinh nghiệm ở nhiều “chiến tuyến”
              </small>
            </li>
          </ul>
        </div>
        <div className="Footer_Col" id="Col3">
          <small>Imprint © 2023 JasonD.</small>
        </div>
      </footer>
    </main>
  );
};

const HomePageFixed = () => {
  //
  return (
    <main className="HomePageFixed">
      <section className="Section" id="Sec1Fixed"></section>
      <section className="Section" id="Sec2Fixed"></section>
      <section className="Section" id="Sec3Fixed"></section>
      <section className="Section" id="Sec4Fixed"></section>
    </main>
  );
};

export { HomepageFloat, HomePageFixed };
