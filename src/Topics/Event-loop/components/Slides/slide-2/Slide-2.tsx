// Slides
import Section1 from "./section-1";
import Section2 from "./section-2";
import Section0 from "./section-0";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Section6 from "./section-6";
import Section7 from "./section-7";

const nameWriter = "Mahmoud";
export default function Slide2() {
  return (
    <section>
      <section>
        <p className={`text-md font-bold`}>Environment JavaScript Runtime</p>
        <Section0 />
      </section>
      {/* <Section1 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </section>
  );
}
