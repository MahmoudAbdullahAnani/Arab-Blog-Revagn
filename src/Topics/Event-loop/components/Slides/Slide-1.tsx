import TopicName from "../Headers/TopicName";
import PreparedBy from "../Content/PreparedBy";

// Images
// @ts-ignore
import JSLogo from "./../../assets/JavaScript-logo.png";
const nameWriter = "Mahmoud";
export default function Slide1() {
  return (
    <section>
      <div className={`flex justify-center`}>
        <img src={JSLogo} className={`w-[10%] rounded-lg`} />
      </div>
      <TopicName name="Event Loop" />
      <PreparedBy
        content={`Presentation is prepared by ${nameWriter}`}
        customStyle={`text-[2rem]`}
      />
      <a
        className={`text-[1rem]`}
        href="https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/"
      >
        https://www.linkedin.com/in/mahmoud-abdullah-ab253920b/
      </a>
    </section>
  );
}
