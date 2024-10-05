import TopicName from "../../Headers/TopicName";
// images
// @ts-ignore
import JSEngine from "./../../../assets/js-engine.png";
// @ts-ignore
import LIFOStack from "./../../../assets/LIFO-Operations-in-stack.jpg";
export default function Section2() {
  return (
    <section>
      <TopicName name="JS Engine" />
      <div className={`flex justify-between`}>
        <div className={`flex flex-col gap-2 w-[70%]`}>
          <ul>
            <li>Memory Heap</li>
            <li>Call Stack</li>
          </ul>
          <div className={`mt-[1rem]`}>
            <h4>LIFO</h4>
            <img src={LIFOStack} className={`w-[100%] rounded-2xl`} />
          </div>
        </div>
        <div className={`bg-[#fcefef]  w-[30%] rounded-2xl`}>
          <img src={JSEngine} className={`w-[100%] rounded-2xl`} />
        </div>
      </div>
    </section>
  );
}
