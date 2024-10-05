import TopicName from "../../Headers/TopicName";
// images
// @ts-ignore
import Queue from "./../../../assets/queue.png";

export default function Section6() {
  return (
    <section>
      <TopicName name="Tasks Queue" />
      <div className={` justify-between`}>
        <div>
          <ul>
            <li>Macrotask Queue</li>
            <li>Microtask Queue</li>
          </ul>
        </div>
        <div className={`flex justify-between h-[300px] relative`}>
          <img
            src={Queue}
            className={`w-[50%] absolute left-[50%] top-[-5px] translate-x-[-50%] rounded-2xl`}
            title={`Macrotask Queue, Microtask Queue`}
          />
        </div>
      </div>
    </section>
  );
}
