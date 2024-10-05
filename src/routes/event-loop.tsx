import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

// Use Spectacle
// import EventLoopTopic from "../Topics/Event-loop/EventLoop.topic";

import Reveal from "reveal.js";
import Slide1 from "../Topics/Event-loop/components/Slides/Slide-1";
import Slide2 from "../Topics/Event-loop/components/Slides/slide-2/Slide-2";
import Slide3 from "../Topics/Event-loop/components/Slides/slide-3";
import Slide4 from "../Topics/Event-loop/components/Slides/slide-4";
import Slide5 from "../Topics/Event-loop/components/Slides/slide-5";

export const Route = createFileRoute("/event-loop")({
  component: EventLoopComponent,
});

function EventLoopComponent() {
  const [alirt, setAlirt] = React.useState(
    <div className={`flex justify-between text-2xl px-5 py-2 bg-red-600 rounded-lg m-2 text-white`}>
      <p>You can return to the main menu using ctrl+z</p>
      <p style={{ direction: "rtl" }} className={``}>
        يمكن الرجوع الي القائمة الرئيسية عن طريق ctrl+z
      </p>
    </div>
  );
  React.useEffect(() => {
    setTimeout(() => {
      setAlirt(<></>);
    }, 3000);
    let deck = new Reveal({
      backgroundTransition: "slide",
      transition: "slide",
    });
    deck.initialize();
    console.log("initialized fool");
  }, []);

  return (
    <>
      {alirt}
      <div
        className="reveal"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: "#0005",
        }}
      >
        <div className="slides" data-transition="slide">
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
        </div>
      </div>
    </>
  );
}
