import TopicName from "../../Headers/TopicName";
// images
// @ts-ignore
import WebAPIs from "./../../../assets/web-apis.png";
export default function Section3() {
  return (
    <section className="">
      <TopicName name="Web APIs" />
      <div className={`flex justify-between h-[300px] relative`}>
        <img
          src={WebAPIs}
          className={` absolute left-[50%] top-[-5px] translate-x-[-50%] rounded-2xl`}
        />
      </div>
    </section>
  );
}
