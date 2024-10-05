import TopicName from "../../Headers/TopicName";
// images
// @ts-ignore
import Queue from "./../../../assets/queue.png";
// @ts-ignore
import QueueGif from "./../../../assets/queue.gif";

export default function Section5() {
  return (
    <section>
      <TopicName name="Tasks Queue" />
      <div className={`flex justify-center gap-2 mt-[2rem]`}>
        <img
          src={QueueGif}
          className={`w-[40%] rounded-lg`}
          alt="Queue DS"
          title="Queue Data Structure"
        />
        <img
          src={Queue}
          className={`w-[30%]`}
          title={`Macrotask Queue, Microtask Queue`}
        />
      </div>
    </section>
  );
}
