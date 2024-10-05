import TopicName from "../../Headers/TopicName";
// Images
// @ts-ignore
import EventLoopContents from "./../../../assets/eventLoopContent.png";
export default function Section0() {
  return (
    <section>
      <div className={`flex justify-center mt-[2rem]`}>
        <img src={EventLoopContents} className={`w-[60%] m-auto rounded-2xl`} />
      </div>
    </section>
  );
}
