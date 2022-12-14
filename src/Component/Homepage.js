import "../Styles/App.css";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [NavIsExpanded, SetNavExpand] = useState(false);

  const ExpandClick = () => {
    SetNavExpand(!NavIsExpanded);
  };

  return (
    <main className="Homepage">
      <section id="Header">
        <div className="HeaderHolder">
          <div className="HeaderRow" id="topRow">
            <h2>
              Portfolio<span>℗</span>
            </h2>
            <div
              className={
                NavIsExpanded ? "ExpandButton ExpandActive" : "ExpandButton"
              }
              onClick={ExpandClick}
            >
              <div className="Upper"></div>
              <div className="Lower"></div>
            </div>
          </div>
          <div className="HeaderRow" id="MainContents">
            <div className="Contents">
              <h4>Hi there, fellas!</h4>
              <h1>Here's JasonD.</h1>
              <h5>
                <span>An</span> UX Design Intern
              </h5>

              <p>
                Catch up with the latest technology and respond to changes, our
                duty is to promote innovation.
              </p>
              <div className="Row HeaderButton">
                <div className="NeumorphButton CTA">
                  <span>My Works</span>
                </div>
                <div className="NeumorphButton">
                  <span>Contact</span>
                </div>
              </div>
              <div id="Socials">
                <p>Or see me on socials:</p>
                <div className="Row">
                  <div className="Social Behance">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2499.88 1572.99"
                    >
                      <path
                        className="beh"
                        d="M809,1572.9q-402.21,0-804.43.09c-3.75,0-4.59-.84-4.59-4.59Q.15,786.5,0,4.59C0,.84.84,0,4.59,0Q402.32.15,800,.09c-.18.25-.38.5-.54.76a.67.67,0,0,0,.36.31,32.79,32.79,0,0,0,4.36.73A943.58,943.58,0,0,1,931.57,17.13C984.65,27,1035.22,43.84,1082.08,71,1155.22,113.47,1203,176,1225.82,257c19.54,69.44,22.25,140.21,10.23,211.34q-16.83,99.65-89.52,170.23c-32.61,31.65-70.18,55.94-110.52,76.34-1.85.93-4,1.53-5.75,3.6,1.92.63,3.42,1.15,4.93,1.62,36.72,11.25,72,25.74,105,45.64,42.73,25.78,78.58,58.84,106.66,100.07,40.18,59,61.08,124.83,68.09,195.39a550.72,550.72,0,0,1-.81,119.71c-4,34-11.19,67.32-23.53,99.3-34.65,89.8-94.71,157.89-177.32,206.66-75.55,44.59-158.13,67.33-244.28,79.05-18.81,2.56-37.7,4.45-56.69,5.38C811.26,1571.33,808.91,1570,809,1572.9ZM346.2,1088.26q0,104.71,0,209.43c0,7.18-.92,6.39,6.36,6.39q178.44,0,356.89,0a523.72,523.72,0,0,0,83.61-6.16c32.29-5.19,63.22-14.2,91.69-30.72,42.15-24.44,69-60.44,80.19-107.71,10.87-46,8.83-92.26-1.56-138.13-6.6-29.15-18.9-55.75-39.19-78.09-22.13-24.37-50.1-39.88-80.48-51.32-40-15-81.68-19.55-124.1-19.52q-183.69.09-367.38-.11c-5.33,0-6.16,1.67-6.15,6.47Q346.33,983.55,346.2,1088.26ZM537,636.85c55.82,0,111.64.43,167.46-.15,38.29-.4,75.44-7.31,110.43-23.78,42.29-19.9,72-50.73,84.63-96.56C908.71,483,910,449,905.75,414.82c-3.9-31.38-15.9-59.18-37-83-19.22-21.73-43.53-35.38-70.39-44.81C761,273.86,722.1,269.45,682.88,269.25c-110.64-.59-221.29-.26-331.93-.47-4.81,0-4.8,2.1-4.8,5.65q.11,178.21,0,356.42c0,4.68.94,6.13,5.92,6.12C413.67,636.78,475.32,636.85,537,636.85Z"
                      />
                      <path
                        className="beh"
                        d="M2499.88,951v87a6.56,6.56,0,0,0-.76-.54s-.24.21-.32.35c-1,2-.71,4.23-.81,6.36-.34,6.82-.31,6.82-7.11,6.82H1684a29.64,29.64,0,0,1-4,0c-3.33-.46-4.23.85-4,4.14,1.13,14.45,2,28.9,3.81,43.3,4.62,37.34,12.94,73.68,28.47,108.15,19.1,42.39,48.78,75,89.42,97.74,28.39,15.85,59,25.15,90.91,30.17,37.41,5.86,75,7,112.56,2.21,59.22-7.54,110.19-32.82,153.67-73.5,20.7-19.37,37.86-41.17,46.63-68.61,1.09-3.41,3.38-2.56,5.51-2.56q133,0,265.95-.1c4,0,4.69.62,3.4,4.55-16.09,48.8-36.19,95.81-62.45,140.07-28.64,48.3-63.58,91.36-108,126-73.56,57.51-158.26,88.39-249.78,102.39-18.94,2.9-38,5-57.09,6.25-1,.07-3.43-1.16-3.18,1.73h-100c.11-.13.22-.26.31-.39s.22-.35.19-.37c-1.39-1.22-3.14-.94-4.76-1a669,669,0,0,1-100.78-14.21c-59.12-13-115-34.35-166.94-65.52-89.39-53.63-154.38-129.23-199-222.88-32.53-68.32-51.19-140.43-58.21-215.68-5.93-63.49-5-126.75,5.07-189.81,10.65-66.74,31.09-130.26,62.34-190.22,33-63.25,76.33-118.41,131-164.12,88.17-73.67,189.46-117.41,303.92-129.85,58.24-6.33,116.38-5.67,174.39,3,58.46,8.78,113.92,26.3,165.77,55C2268,469.39,2319,511,2361.08,563.36c44.55,55.51,77.11,117.5,99.79,184.82A729.73,729.73,0,0,1,2494.08,899c1.83,16.06,3.28,32.15,4.11,48.29C2498.26,948.57,2497.25,950.71,2499.88,951Zm-570-98.5h245.44a28.07,28.07,0,0,1,4,0c4.28.62,5.67-.89,4.51-5.19-1.22-4.48-2-9.1-3-13.65-8.88-40.46-21.66-79.46-41.66-116-30.84-56.33-77.18-90.83-140.67-101.95A380.23,380.23,0,0,0,1913,611c-44.35,2.28-85.85,13.2-123.8,37.12-40.29,25.4-69.86,59.84-89,103.12-13.39,30.21-20,62.3-23.7,95-.71,6.27-.74,6.27,5.53,6.27Z"
                      />
                      <path
                        className="beh"
                        d="M1940.42,79.92q155.94,0,311.88-.11c4.74,0,6.08,1,6.07,5.93q-.3,82.47,0,164.94c0,4.71-1.42,5.64-5.83,5.64q-312.14-.17-624.27,0c-4.46,0-5.83-1-5.82-5.67q.25-82.71,0-165.43c0-4.58,1.35-5.4,5.59-5.4Q1784.23,80,1940.42,79.92Z"
                      />
                    </svg>
                    <a
                      href="https://www.behance.net/jasondarkin"
                      target="_blank"
                      className="link"
                    ></a>
                  </div>
                  <div className="Social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1194.25 1187.28"
                    >
                      <path
                        className="fcb"
                        d="M504.05,1187.28c-21.69-2.72-42.94-7.63-64-13.4-208.52-57.28-369.86-221-421.94-430.73C-62.95,416.58,136.14,99.27,448.91,19,651-32.89,862.24,23,1012.38,168.33c97.22,94.08,157.34,208.48,175.5,342.67,26.17,193.32-28.33,362.24-163.31,503.32C934.32,1108.65,823,1165.11,694.23,1187a33,33,0,0,1-3.46.22c0-.17,0-.33,0-.5q0-205.95-.12-411.9c0-3.89,1.26-4.65,4.85-4.64,43.16.12,86.32,0,129.47.15,3.64,0,5.1-.81,5.69-4.73q12.15-80.79,24.66-161.53c1-6.56,1-6.57-5.74-6.57-51.16,0-102.31-.06-153.46.11-4.51,0-5.5-1.28-5.48-5.58.16-35.83.07-71.65.11-107.48a117.43,117.43,0,0,1,1.62-19.9c4.62-26.75,17-48.2,41.89-61,15.43-8,32.09-11,49.28-11.14q37.23-.31,74.48-.06c4,0,5.38-.86,5.36-5.16q-.23-68.49,0-137c0-4-1.06-5.35-5.08-5.94a1002.8,1002.8,0,0,0-107.88-10.43c-28.92-1.14-57.65.07-85.93,6.72C611.79,253.05,569,280,539.66,326.27c-23.63,37.35-34,78.9-35.07,122.49-1.2,47.46-.5,95-.41,142.46,0,4.84-.88,6.45-6.17,6.42-46.65-.24-93.31-.08-140-.23-4.4,0-5.87.9-5.86,5.66q.29,80.73,0,161.47c0,4.46,1,5.85,5.7,5.83,47-.19,94-.07,141-.2,4.07,0,5.3,1,5.3,5.2Q504,981.32,504.05,1187.28Z"
                      />
                    </svg>
                    <a
                      href="https://www.facebook.com/leesama2k/"
                      target="_blank"
                      className="link"
                    ></a>
                  </div>
                  <div className="Social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 4095.4 3605.1"
                    >
                      <path
                        className="ast"
                        d="M4095.4,2829c-1,7.2-1.8,14.4-2.9,21.5a303.54,303.54,0,0,1-30.3,93.7c-20.8,40.2-42.3,80.1-64.9,119.4q-150.6,261.6-302.1,522.7c-2.6,4.6-5.3,9-8.7,14.7L1607.4.3c5.7-.2,9.6-.3,13.4-.3h288q206,0,412,.1c61.2.1,119.7,13,175,39.5,78,37.5,138.3,94.2,181.5,169.1q73.2,126.75,146,253.8,494.4,858.3,988.8,1716.4,108,187.5,216.2,374.9c16.6,28.6,32.9,57.1,44.1,88.3a437.93,437.93,0,0,1,20.4,81.3c1.1,7.2,1.8,14.4,2.6,21.6v84Z"
                      />
                      <path
                        className="ast"
                        d="M689.4,3605c-8.9-1.2-17.8-2.2-26.7-3.5C531.8,3583,432,3516.1,361.8,3405c-25.8-40.8-48.4-83.6-72.5-125.4C196,3118.1,0,2779.8,0,2779.8s1684.3.3,2517.5.3c19,0,14-2.4,23,13.2q231.75,401.1,463.3,802.3l5.5,9.5Z"
                      />
                      <path
                        className="ast"
                        d="M341.7,2190.9l929-1606.4,923.9,1604.4a4.92,4.92,0,0,1-.6,1.7,1.37,1.37,0,0,1-.8.5q-922,.3-1843.9.5C347.4,2191.5,345.5,2191.2,341.7,2190.9Z"
                      />
                    </svg>

                    <a
                      href="https://www.artstation.com/leesama2k"
                      target="_blank"
                      className="link"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="HeaderImage"></div>
          </div>
        </div>
      </section>
      <section id="Works">
        <div className="WorksHolder">
          <h2 className="WorkHeading">
            Latest Works
            {/* <span>now</span> */}
          </h2>
          <div className="MainBlock">
            <div className="Row">
              <div className="WorkImage"></div>
              <div className="Cont~ents">
                <h3>Vietnam's Digital Fashion Magazine</h3>
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="AboutPage">
        <div className="AboutHolder">
          <h2 className="AboutHeading">About</h2>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
