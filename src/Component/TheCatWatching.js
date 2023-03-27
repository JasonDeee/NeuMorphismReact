import { useEffect, useState, useRef } from "react";

const TheCatWatching = () => {
  const TheCatEffect = () => {
    //
    // const CatWatchingHands = document.querySelectorAll("#Hands g");
  };

  useEffect(TheCatEffect, []);

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 1440"
    >
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="690.17"
          cy="2822.84"
          fx="690.17"
          fy="2822.84"
          r="102.11"
          gradientTransform="translate(287 1387.98) scale(1 -.23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".07" stopColor="#fbd5db" />
          <stop offset=".08" stopColor="#fbd3d9" />
          <stop offset=".22" stopColor="#fbb9c3" />
          <stop offset=".35" stopColor="#fba9b5" />
          <stop offset=".44" stopColor="#fba3b0" />
          <stop offset=".5" stopColor="#fba3b0" stopOpacity=".94" />
          <stop offset=".6" stopColor="#fba3b0" stopOpacity=".78" />
          <stop offset=".74" stopColor="#fba3b0" stopOpacity=".53" />
          <stop offset=".91" stopColor="#fba3b0" stopOpacity=".19" />
          <stop offset="1" stopColor="#fba3b0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="178"
          cy="784.65"
          fx="178"
          fy="784.65"
          r="102.1"
          gradientTransform="translate(287 936.25) scale(1 -.26)"
          xlinkHref="#radial-gradient"
        />
        <clipPath id="clippath">
          <path
            id="Eye_Matte-2"
            data-name="Eye Matte"
            className="WatchingCat-8"
            d="M790.05,605.79l212.61-56.72s13.84,29.28,12.84,59.28c-.58,17.45-9,54-57,77-32,15.31-86,19-131-6-43.93-24.4-37.45-73.56-37.45-73.56Z"
          />
        </clipPath>
        <clipPath id="clippath-1">
          <path
            id="Eye_Matte-2-2"
            data-name="Eye Matte-2"
            className="WatchingCat-8"
            d="M674.45,603.44l-212.61-56.72s-13.84,29.28-12.84,59.28c.58,17.45,9,54,57,77,32,15.31,86,19,131-6,43.93-24.4,37.45-73.56,37.45-73.56Z"
          />
        </clipPath>
        <clipPath id="clippath-2">
          <path
            id="Eye_Outline-4"
            data-name="Eye Outline"
            className="WatchingCat-8"
            d="M790.05,605.79s45.95-56.79,107.95-56.79,87.45,1.04,106,27c10,14,23,30,12,47-6.34,9.79-14,21-43,17-32.39-4.47-61-18-127,11-37.1,16.3-55.95-45.21-55.95-45.21Z"
          />
        </clipPath>
        <clipPath id="clippath-3">
          <path
            id="Eye_Outline-8"
            data-name="Eye Outline"
            className="WatchingCat-8"
            d="M679.45,608.44s-45.95-56.79-107.95-56.79-87.45,1.04-106,27c-10,14-23,30-12,47,6.34,9.79,14,21,43,17,32.39-4.47,61-18,127,11,37.1,16.3,55.95-45.21,55.95-45.21Z"
          />
        </clipPath>
      </defs>
      <g id="CatBody">
        <g id="The_Cat" data-name="The Cat">
          <g id="BODY">
            <g id="Tail-2" data-name="Tail">
              <path
                id="Tail_Matte"
                data-name="Tail Matte"
                className="WatchingCat-1"
                d="M471.5,1132.35c-28-7-85-10-117,8s-85,36.21-99,55.1,40,63.9,69,77.9,176,13,220-62c17.7-30.17-45-72-73-79Z"
              />
              <path
                id="Taill_Color"
                data-name="Taill Color"
                className="WatchingCat-11"
                d="M310.5,1161.35s51.35-28.32,76.17-31.66,57.31-3.72,70.83,6.66,54,31,28,41-68.07,32-116,35c-65,4-59-51-59-51Z"
              />
              <path
                id="Tail_Outline"
                data-name="Tail Outline"
                className="WatchingCat-3"
                d="M471.5,1132.35c-28-7-85-10-117,8s-85,36.21-99,55.1,40,63.9,69,77.9,176,13,220-62c17.7-30.17-45-72-73-79Z"
              />
            </g>
            <g id="Body_BG" data-name="Body BG">
              <path
                id="Body_Matte"
                data-name="Body Matte"
                className="WatchingCat-1"
                d="M417.5,1226.49s3-65,9-99.14c10-57,29.08-108.23,38.5-156,4.85-24.57,27.12-176,27.12-176h460.55s-4.17,123,8.83,207c4.53,29.25,17.8,72.68,20,121,2,44,1,113,1,113"
              />
              <path
                className="WatchingCat-11"
                d="M443.35,1055.35s83.15-5.7,95.15-45c14-46-1-98-14-106s-47.28-15.93-47.28-15.93l-12.72,86.93-21.15,80Z"
              />
              <path
                id="Body_Outline"
                data-name="Body Outline"
                className="WatchingCat-3"
                d="M417.5,1226.49s3-65,9-99.14c10-57,29.08-108.23,38.5-156,4.85-24.57,27.12-176,27.12-176h460.55s-4.17,123,8.83,207c4.53,29.25,17.8,72.68,20,121,2,44,1,113,1,113"
              />
            </g>
            <path
              id="Fat_line2"
              data-name="Fat line2"
              className="WatchingCat-3"
              d="M939.5,995.35s9.19,69.8,5,115c-5,54-1,126-1,126"
            />
            <path
              id="Fat_line1"
              data-name="Fat line1"
              className="WatchingCat-3"
              d="M782.5,1065.35s8.43,89,7.22,114,0,57,0,57"
            />
            <g id="Neck_lade_" data-name="Neck lade ">
              <path
                className="WatchingCat-5"
                d="M726.5,971.35c191,0,249.5-106.1,249.5-106.1H465s-.5,106.1,261.5,106.1Z"
              />
              <circle className="WatchingCat-7" cx="737" cy="971.85" r="38.5" />
            </g>
          </g>
        </g>
      </g>
      <g id="Cat_Emoji" data-name="Cat Emoji">
        <g id="Ear_BG" data-name="Ear BG">
          <path
            id="Ear_BG_line"
            data-name="Ear BG line"
            className="WatchingCat-2"
            d="M708.5,324.01l395-104.66s14.93,78.43,0,168c-13,78-66.79,241-374,241-209,0-331,0-402-185-42.4-110.47-14-196-14-196l395,76.66Z"
          />
        </g>
        <g id="FACE_BG" data-name="FACE BG">
          <rect
            id="HEAD_Margin"
            data-name="HEAD Margin"
            className="WatchingCat-8"
            x="106"
            y="-17.3"
            width="1228"
            height="1228"
          />
          <path
            id="Face_Matte"
            data-name="Face Matte"
            className="WatchingCat-1"
            d="M846.62,290.35c130.79,47.41,177.16,174.84,210.38,308.53,92,94,46.5,237.5-103,294-95.66,36.15-264.62,46-386.5,24.5-317-56-231.5-267.5-187.5-305.5-10-80.4,64.77-240.3,204.59-308.72"
          />
          <path
            className="WatchingCat-11"
            d="M750.5,520.35l51,99,41.13-11.17,82.87-11.83,83.43-1.45,63.11,18.51-15-17.56s-27.29-126.63-65.39-181.06-90.15-149.44-267.65-146.94-206.5,77-275,147.73-69,193.27-69,193.27l129.19-25.72,62.31,13.22,72.93,6.27,29.07,16.73,77-99Z"
          />
          <path
            className="WatchingCat-17"
            d="M747.84,423.85l36.52-151.83s-45.86-4.77-67.86-4.22-69,9.55-69,9.55l100.34,146.5Z"
          />
          <path
            className="WatchingCat-17"
            d="M584.85,300.01s10.65,45.34-58.35,136.34c-66.1,87.18-140.7,108.42-140.7,108.42,0,0,25.91-99.35,80.8-151.42,54.89-52.07,118.25-93.34,118.25-93.34Z"
          />
          <path
            className="WatchingCat-17"
            d="M909.5,421.35l7-100s29,32.61,41.5,46.31,27.61,36.92,27.61,36.92l-76.11,16.77Z"
          />
          <polygon
            className="WatchingCat-17"
            points="998.5 559.35 1026.1 491.18 1054.51 585.94 998.5 559.35"
          />
          <ellipse
            id="Pinky_L"
            data-name="Pinky L"
            className="WatchingCat-12"
            cx="976"
            cy="735.35"
            rx="102.5"
            ry="27"
          />
          <ellipse
            id="Pinky_R"
            data-name="Pinky R"
            className="WatchingCat-14"
            cx="465"
            cy="735.35"
            rx="102.5"
            ry="27"
          />
          <path
            id="Face_OutLine"
            data-name="Face OutLine"
            className="WatchingCat-3"
            d="M846.62,287.35c130.79,47.41,177.16,174.84,210.38,308.53,92,94,46.5,237.5-103,294-95.66,36.15-264.62,46-386.5,24.5-317-56-231.5-267.5-187.5-305.5-10-80.4,64.77-240.3,204.59-308.72"
          />
        </g>
        <g id="Ear_F_L" data-name="Ear F L">
          <path
            id="Ear_Color"
            data-name="Ear Color"
            className="WatchingCat-11"
            d="M967.5,344.35c116.4-42.68,136-125,136-125l-291,77s5,103,155,48Z"
          />
          <path
            id="Ear_Line"
            data-name="Ear Line"
            className="WatchingCat-3"
            d="M1089.08,251.17s-32.58,50.18-83.58,76.18c-72.54,37-116.14,33.16-116.14,33.16"
          />
        </g>
        <g id="Ear_F_R" data-name="Ear F R">
          <path
            id="Ear_Color-2"
            data-name="Ear Color-2"
            className="WatchingCat-17"
            d="M458.5,365.35c-115.55-44.93-145-118-145-118l271,53s-18,107-126,65Z"
          />
          <path
            id="Ear_Line-2"
            data-name="Ear Line-2"
            className="WatchingCat-3"
            d="M333.35,282.19s48.07,53.35,96.15,71.16c32.92,12.15,66.91,21.18,101.52,27"
          />
        </g>
        <g id="Ear_F_Mask" data-name="Ear F Mask">
          <path
            id="EarMask_Neural"
            data-name="EarMask Neural"
            className="WatchingCat-3"
            d="M313.5,247.35l271.35,52.66s61.65-32.16,139.15-32.16,122.76,19.5,122.76,19.5l256.74-68"
          />
        </g>
        <path
          id="NOSE"
          className="WatchingCat-16"
          d="M717.5,633.35c2.12-5,30-6,33-3s-10,29-15,29-21-19-18-26Z"
        />
        <g id="Beard_R" data-name="Beard R">
          <g id="B.1-4">
            <path
              className="WatchingCat-16"
              d="M386,689.85c-15.83,2.11-31.67,3.81-47.51,5.46l-23.74,2.48c-7.91,.8-15.82,1.68-23.65,2.7-1.94,.3-3.89,.53-5.83,.87l-5.83,1-11.65,2.34c-7.77,1.6-15.51,3.4-23.26,5.17l-46.53,11c15-5.5,30.21-10.3,45.58-14.64,7.67-2.2,15.42-4.17,23.2-6,7.78-1.83,15.64-3.45,23.65-4.62s15.91-1.8,23.86-2.55,15.91-1.24,23.88-1.68c15.92-.98,31.86-1.56,47.83-1.53Z"
            />
          </g>
          <g id="B.1-5">
            <path
              className="WatchingCat-16"
              d="M417.5,717.35c-9.13,2.45-18.23,5-27.27,7.63s-18.06,5.38-27,8.33-17.83,6-26.53,9.48c-8.74,3.31-17.27,7.14-25.55,11.47-2.07,1-4.13,2.18-6.18,3.32s-4.12,2.28-6.16,3.45l-6.13,3.51-6.1,3.54c-8.17,4.7-16.25,9.56-24.38,14.34-16.21,9.65-32.38,19.38-48.7,28.93,15.17-11.29,30.79-22,46.64-32.25,15.85-10.25,31.94-20.21,48.68-29.25,8.48-4.38,17.23-8.21,26.2-11.47,8.92-3.3,18-6.21,27.07-8.79s18.3-4.89,27.53-7,18.52-3.87,27.88-5.24Z"
            />
          </g>
          <g id="B.1-6">
            <path
              className="WatchingCat-16"
              d="M430.5,751.35c-15.9,8.47-31.53,17.33-46.72,26.84-3.8,2.36-7.52,4.85-11.28,7.27s-7.42,5-11,7.66-7.16,5.3-10.69,8-6.86,5.63-10.28,8.6c-6.9,5.79-13.83,11.54-20.79,17.25-7,5.64-14,11.33-21.1,16.85-14.15,11.12-28.47,22-43.14,32.51,13.36-12.09,27-23.85,40.67-35.53l41.13-34.89c3.39-2.9,6.94-5.77,10.49-8.63s7.22-5.52,11-8c7.48-5.13,15.13-10,23-14.4,15.65-9.01,31.93-16.87,48.71-23.53Z"
            />
          </g>
        </g>
        <g id="Beard_L" data-name="Beard L">
          <g id="B.1">
            <path
              className="WatchingCat-16"
              d="M1043.5,680.35c13.34-.72,26.69-.77,40-.41s26.68,1.11,40,2.66c6.65,.86,13.24,1.81,19.84,2.86s13.16,2.18,19.7,3.46c13.11,2.48,26.16,5.22,39.1,8.56-13.3-1.29-26.51-3-39.71-4.7-6.61-.83-13.19-1.8-19.79-2.64s-13.17-1.82-19.74-2.58-13.16-1.45-19.77-2-13.23-1.11-19.86-1.7c-13.21-1.13-26.48-2.17-39.77-3.51Z"
            />
          </g>
          <g id="B.1-2">
            <path
              className="WatchingCat-16"
              d="M1043.5,718.35c8.57,1,17.07,2.45,25.55,4,8.48,1.55,16.92,3.38,25.3,5.48s16.72,4.37,25,7c4.14,1.25,8.2,2.8,12.29,4.24,4,1.61,8.12,3.13,12.08,5,15.71,7.39,30.8,15.65,45.77,24.21,14.97,8.56,29.68,17.52,44,27.08-15.39-7.76-30.64-15.73-45.9-23.65-7.65-3.92-15.25-7.93-22.92-11.77l-5.74-2.92-5.76-2.88c-1.91-1-3.85-1.89-5.77-2.83-1-.46-1.92-1-2.89-1.39l-2.9-1.3c-3.81-1.84-7.8-3.36-11.73-5-3.93-1.64-8-3-12.05-4.32s-8.11-2.71-12.19-4l-6.15-1.86c-2-.65-4.1-1.26-6.16-1.85-8.23-2.4-16.51-4.68-24.82-6.85-8.3-2.22-16.65-4.31-25.01-6.39Z"
            />
          </g>
          <g id="B.1-3">
            <path
              className="WatchingCat-16"
              d="M1009.5,762.35c15.09,5.87,29.73,12.85,43.8,20.88,7.08,3.95,14,8.29,20.67,12.88,3.4,2.25,6.61,4.77,9.88,7.21s6.38,5.13,9.43,7.73l18.45,15.61c6.12,5.26,12.32,10.41,18.41,15.7,12.25,10.49,24.44,21.07,36.36,32-13.23-9.29-26.11-19-38.83-29-6.4-4.93-12.66-10-19-15.07-6.34-5.07-12.47-10.26-18.66-15.45-3.07-2.67-6.14-5.18-9.21-7.71s-6.32-4.87-9.59-7.18-6.54-4.6-9.84-6.87c-3.3-2.27-6.7-4.41-10.11-6.53-13.56-8.53-27.54-16.52-41.76-24.2Z"
            />
          </g>
        </g>
        <g id="Neural">
          <g id="Eye_L" data-name="Eye L">
            <rect
              id="Eye_Box"
              data-name="Eye Box"
              className="WatchingCat-8"
              x="743.5"
              y="476.35"
              width="315"
              height="286"
            />
            <path
              id="Eye_Matte"
              data-name="Eye Matte"
              className="WatchingCat-1"
              d="M790.05,605.79l212.61-56.72s13.84,29.28,12.84,59.28c-.58,17.45-9,54-57,77-32,15.31-86,19-131-6-43.93-24.4-37.45-73.56-37.45-73.56Z"
            />
            <g className="WatchingCat-13">
              <circle
                id="EyeBall_L"
                data-name="EyeBall L"
                className="WatchingCat-4"
                cx="885.5"
                cy="574.35"
                r="39"
              />
            </g>
            <path
              id="Eye_Outline"
              data-name="Eye Outline"
              className="WatchingCat-3"
              d="M790.05,605.79l212.61-56.72s13.84,29.28,12.84,59.28c-.58,17.45-9,54-57,77-32,15.31-86,19-131-6-43.93-24.4-37.45-73.56-37.45-73.56Z"
            />
          </g>
          <g id="Eye_R" data-name="Eye R">
            <rect
              id="Eye_Box-2"
              data-name="Eye Box-2"
              className="WatchingCat-8"
              x="406"
              y="474"
              width="315"
              height="286"
            />
            <path
              id="Eye_Matte-2"
              data-name="Eye Matte-2"
              className="WatchingCat-1"
              d="M674.45,603.44l-212.61-56.72s-13.84,29.28-12.84,59.28c.58,17.45,9,54,57,77,32,15.31,86,19,131-6,43.93-24.4,37.45-73.56,37.45-73.56Z"
            />
            <g className="WatchingCat-10">
              <circle
                id="EyeBall_R"
                data-name="EyeBall R"
                className="WatchingCat-4"
                cx="572"
                cy="572"
                r="39"
              />
            </g>
            <path
              id="Eye_Outline-2"
              data-name="Eye Outline-2"
              className="WatchingCat-3"
              d="M674.45,603.44l-212.61-56.72s-13.84,29.28-12.84,59.28c.58,17.45,9,54,57,77,32,15.31,86,19,131-6,43.93-24.4,37.45-73.56,37.45-73.56Z"
            />
          </g>
          <path
            id="Mouth"
            className="WatchingCat-3"
            d="M775.5,768.35s-27.5-33.35-37-38c-10.5,6.65-35,42-35,42"
          />
        </g>
        <g id="Happy">
          <g id="Left_Eye" data-name="Left Eye">
            <g id="Eye_L-2" data-name="Eye L">
              <rect
                id="Eye_Box-2"
                data-name="Eye Box"
                className="WatchingCat-8"
                x="743.5"
                y="476.35"
                width="315"
                height="286"
              />
              <path
                id="Eye_Outline-2"
                data-name="Eye Outline"
                className="WatchingCat-1"
                d="M790.05,605.79s50.95-48.79,112.95-48.79,107,21,107,21c0,0,6.5,.35,5.5,30.35-.58,17.45-28.5,51.65-58.5,38.65s-59-19-111,4c-37.06,16.39-55.95-45.21-55.95-45.21Z"
              />
              <path
                id="Eye_Outline-3"
                data-name="Eye Outline"
                className="WatchingCat-1"
                d="M790.05,605.79s45.95-56.79,107.95-56.79,87.45,1.04,106,27c10,14,23,30,12,47-6.34,9.79-14,21-43,17-32.39-4.47-61-18-127,11-37.1,16.3-55.95-45.21-55.95-45.21Z"
              />
              <g className="WatchingCat-9">
                <circle
                  id="EyeBall_L-2"
                  data-name="EyeBall L"
                  className="WatchingCat-4"
                  cx="885.5"
                  cy="574.35"
                  r="39"
                />
              </g>
              <path
                id="Eye_Outline-5"
                data-name="Eye Outline"
                className="WatchingCat-3"
                d="M790.05,605.79s45.95-56.79,107.95-56.79,87.45,1.04,106,27c10,14,23,30,12,47-6.34,9.79-14,21-43,17-32.39-4.47-61-18-127,11-37.1,16.3-55.95-45.21-55.95-45.21Z"
              />
            </g>
          </g>
          <g id="Right_Eye" data-name="Right Eye">
            <g id="Eye_L-3" data-name="Eye L">
              <rect
                id="Eye_Box-3"
                data-name="Eye Box"
                className="WatchingCat-8"
                x="411"
                y="479"
                width="315"
                height="286"
              />
              <path
                id="Eye_Outline-6"
                data-name="Eye Outline"
                className="WatchingCat-1"
                d="M679.45,608.44s-50.95-48.79-112.95-48.79c-62,0-107,21-107,21,0,0-6.5,.35-5.5,30.35,.58,17.45,28.5,51.65,58.5,38.65,30-13,59-19,111,4,37.06,16.39,55.95-45.21,55.95-45.21Z"
              />
              <path
                id="Eye_Outline-7"
                data-name="Eye Outline"
                className="WatchingCat-1"
                d="M679.45,608.44s-45.95-56.79-107.95-56.79-87.45,1.04-106,27c-10,14-23,30-12,47,6.34,9.79,14,21,43,17,32.39-4.47,61-18,127,11,37.1,16.3,55.95-45.21,55.95-45.21Z"
              />
              <g className="WatchingCat-15">
                <circle
                  id="EyeBall_L-3"
                  data-name="EyeBall L"
                  className="WatchingCat-4"
                  cx="584"
                  cy="577"
                  r="39"
                />
              </g>
              <path
                id="Eye_Outline-9"
                data-name="Eye Outline"
                className="WatchingCat-3"
                d="M679.45,608.44s-45.95-56.79-107.95-56.79-87.45,1.04-106,27c-10,14-23,30-12,47,6.34,9.79,14,21,43,17,32.39-4.47,61-18,127,11,37.1,16.3,55.95-45.21,55.95-45.21Z"
              />
            </g>
          </g>
          <path
            id="Mouth-2"
            data-name="Mouth"
            className="WatchingCat-3"
            d="M782,755s-9,34-41,7c-27,26-41,0-41,0"
          />
        </g>
        <g id="EyeBrow">
          <g id="Neural-2" data-name="Neural">
            <path
              id="EyeBow_R"
              data-name="EyeBow R"
              className="WatchingCat-6"
              d="M699,586s-5-10-9-16c-4.47-6.71-12-15-12-15"
            />
            <path
              id="EyeBow_L"
              data-name="EyeBow L"
              className="WatchingCat-6"
              d="M799,555s-9.94,8.05-17,16c-8,9-13,15-13,15"
            />
          </g>
        </g>
      </g>
      <g id="Hands">
        <g id="The_HAND_Point1" data-name="The HAND Point1">
          <path
            id="Hand_Matte"
            data-name="Hand Matte"
            className="WatchingCat-1"
            d="M544.12,1021.66s74.38-83.31,80.38-145.31c-15-11-24-65-16-75s20-6,34-1c5-24,23-58,33-55,15.44,4.63,13,29.41,21,47,23,14,70,44,65,109-2.54,33,1,114-48,196-23.32,39-67,82-129,82"
          />
          <path
            id="Hand_Outline"
            data-name="Hand Outline"
            className="WatchingCat-3"
            d="M544.12,1021.66s74.38-83.31,80.38-145.31c-15-11-24-65-16-75s20-6,34-1c5-24,23-58,33-55,15.44,4.63,13,29.41,21,47,23,14,70,44,65,109-2.54,33,1,114-48,196-23.32,39-67,82-129,82s-107-53.13-119-118,12-170,12-170"
          />
        </g>
        <g id="The_HAND_Point2" data-name="The HAND Point2">
          <path
            id="Hand_Outline-2"
            data-name="Hand Outline"
            className="WatchingCat-1"
            d="M568,962s26-49,42-97c40-93,18-108,26-130,3.49-9.58,18-18,25-14-13-105.83,32.38-82.01,59-33,38-42,104-75,64,20,27,32,20,132,15,197-9,47-40,118-82,173-34,44-80.13,69.99-142,66"
          />
          <path
            id="Hand_Outline-3"
            data-name="Hand Outline"
            className="WatchingCat-3"
            d="M568,962s26-49,42-97c40-93,18-108,26-130,3.49-9.58,18-18,25-14-13-105.83,32.38-82.01,59-33,38-42,104-75,64,20,27,32,20,132,15,197-9,47-40,118-82,173-34,44-81.2,78.16-142,66-45-9-83-51-99-97-23.07-66.33,1.5-155.65,1.5-155.65"
          />
        </g>
        <g id="The_HAND_Point3" data-name="The HAND Point3">
          <path
            id="Hand_Outline-4"
            data-name="Hand Outline"
            className="WatchingCat-1"
            d="M563,1150c63,12,108.06-18.23,133-48,31-37,41-75,48-139,4.51-41.19,16-122,16-185,0,0-12-39-65-53s-60,37-60,37c-8,22-30,56-45,114-16,48-51,134-51,134"
          />
          <path
            id="Hand_Outline-5"
            data-name="Hand Outline"
            className="WatchingCat-3"
            d="M463,982s-6,49,8,83c17,41.28,46.92,76.41,92,85,63,12,108.06-18.23,133-48,31-37,41-75,48-139,4.51-41.19,16-122,16-185,0,0-12-39-65-53s-60,37-60,37c-8,22-30,56-45,114-16,48-51,134-51,134"
          />
          <path
            className="WatchingCat-2"
            d="M661,758c-10-4-19-1-34-10-18.59-11.15-19-35,0-51,26.32-22.16,54.29,9.22,76,19,4.88-19.35,14.01-39.91,36-42s37.17,12.58,42,29-2,32-17,45c23,15,31.26,30.12,19,56-9,19-44,23-57,14-19.4-13.43-13.49-42.32,0-46,11-3,23,4,23,4"
          />
          <path
            className="WatchingCat-2"
            d="M687,772c7.91,11.99-7.84,35.64-22,38-13.26,2.21-20.73-9.57-30-25-11.4-18.96-3.64-36.46,23-30,7.67,1.86,20.5,4.12,29,17Z"
          />
          <path
            className="WatchingCat-2"
            d="M656,807c3,21-23,34.89-35,26-14.17-10.5-23.33-26.3-21-39,4.01-21.85,18-27,30-18,6.32,4.74,23.82,15.73,26,31Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default TheCatWatching;
