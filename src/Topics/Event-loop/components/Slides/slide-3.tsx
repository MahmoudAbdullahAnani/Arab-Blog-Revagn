import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

const codeExampleLine1 = `console.log('1');`;

const codeExampleLine2 = `setTimeout(function a() {console.log("2")},0);`;

const codeExampleLine3 = `console.log('3');`;

const codeExample = `${codeExampleLine1}

${codeExampleLine2}

${codeExampleLine3}`;

export default function Slide3() {
  useEffect(() => {
    hljs.highlightAll(); // Automatically highlights all code blocks
  }, []);
  return (
    <>
      <section>
        {/* <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <pre>
              <code className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}>
                {codeExample}
              </code>
            </pre>
          </div>
              </section> */}
        {/* Show Code and JS Engine */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code
                  className={`javascript   p-5 rounded-lg w-fit h-fit`}
                ></code>
              </pre>
            </div>
          </div>

          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_0.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* Run Line 1 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code
                  className={`javascript p-5 rounded-lg w-fit h-fit`}
                ></code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_1.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 1 */}
        {/* Log 1 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  1
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_0.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  1
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_2.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  1
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_3.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  {`1
3

                  `}
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_4.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  {`1
3

                  `}
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_5.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  {`1
3
2
                  `}
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_6.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  {`1
3
2
                  `}
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_7.png"}
              loading="lazy"
            />
          </div>
        </section>
        {/* End Run Line 2 */}
        <section data-transition="none">
          <div>
            <p className={`font-bold`}>Example Code</p>
            <div className={`flex justify-between gap-1 `}>
              <pre>
                <code
                  className={`javascript bg-[#202020] p-5 rounded-lg w-fit`}
                >
                  {codeExample}
                </code>
              </pre>
              <pre className={`bg-[#fff] rounded-lg overflow-hidden`}>
                <span className={`text-black`}>log:</span>
                <code className={`javascript p-5 rounded-lg w-fit text-black`}>
                  {`1
3
2
                  `}
                </code>
              </pre>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <img
              className={`w-[36%] rounded-lg `}
              src={"https://sovanmarat-presentation.netlify.app/img/4_0.png"}
              loading="lazy"
            />
          </div>
        </section>
      </section>
    </>
  );
}
