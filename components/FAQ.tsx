import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="p-3 w-[65vw] mx-auto mt-20 mb-20">
      <h2 className="font-light text-6xl text-center mb-20 mt-15 ">
        Frequently <span className="word">Asked</span> Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="accordion rounded-tl-2xl text-white  rounded-bl-2xl rounded-br-2xl p-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the 3 in 1 kit?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            You can buy the main device, the portable version, and the smart
            watch in one box.
            <ul className="list-disc ml-5">
              <li>
                The main device is the one that does all the heavy lifting and
                is the one that you will use to create your scent profile.
              </li>
              <li>
                The portable version is the one that you will use to refresh
                your scent on the go.
              </li>
              <li>
                The smart watch is the one that will help you track your
                biometrics and will help you measure your heart
                rates,temperature and connect to the main device so it can fight
                anti-stress and anxiety by spraying calming and energitic
                scents.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why Not Just One??</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <ul className="list-disc ml-5">
              If there were only one version, it would have to compromise either
              on portability or functionality:
              <li>
                {" "}
                A single portable version might not offer the deep customization
                & advanced AI processing possible in the main device.
              </li>
              <li>
                A single large version would be inconvenient for users who need
                a fragrance refresh on the go. Both can be marketed
                together4users could buy both, using the main device at home to
                refine their scent profile and the portable one for daily
                touch-ups
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            The Sentio AI Fragrance Bottle is enough?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Absolutely!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
