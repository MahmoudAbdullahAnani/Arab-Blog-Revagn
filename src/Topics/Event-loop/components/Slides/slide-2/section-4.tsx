import TopicName from "../../Headers/TopicName";
// images
// @ts-ignore
import WebAPIs from "./../../../assets/eventLoop.png";
// @ts-ignore
import styles from "./CustomStyles.module.css";
export default function Section4() {
  return (
    <section>
      <TopicName name="Event Loop" />
      <h5>secretary - السكرتير</h5>
      <div className={`flex justify-center h-[300px] relative`}>
        <span className={`${styles.eventLoopImage}`}></span>
        <img
          src={WebAPIs}
          className={`w-[30%] absolute left-[50%] top-[-5px] translate-x-[-50%] rounded-2xl`}
        />
      </div>
    </section>
  );
}
