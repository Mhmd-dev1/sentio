"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

export const MobileSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="MobileApp" className="py-25 px-10">
      <h2 className="mt-5 mb-20 ml-20 font-light  text-4xl md:text-5xl tracking-tight text-gray-900">
        <span>
          The App That <span className="word">Learns</span> You
        </span>
        <svg
          className="w-9 h-9 text-amber-600 ml-3 -mb-1 inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h2>
      <div className="flex justify-center items-center space-x-8">
        {/* Left Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <Card className="w-[350px] transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl shadow-lg">
            <CardHeader>
              <h2 className="text-center text-2xl font-bold">
                Personalized Scent Creation
              </h2>
              <Image
                src="/card1-img.png"
                alt="Mobile App"
                width={250}
                height={200}
                className="rounded-2xl ml-6"
              />
            </CardHeader>
            <CardContent>
              {/* <h3 className="font-bold text-2xl mt-3 mb-2">
                Your Signature Scent Studio
              </h3> */}
              <p className="text-md leading-relaxed text-start card-desc">
                The app analyzes real-time data from your wearable Sentio smart
                watch extension or Sentio eco-friendly AI Fragrance Bottle
                scanner (skin pH, temperature, stress levels) to craft a
                fragrance uniquely tailored to your body chemistry. Store
                unlimited custom blends in your profile so people can see them.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          transition={{ delay: 0.3 }}
        >
          <Card className="w-[375px] transition-all duration-300 hover:z-20 hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-2xl scale-105 z-10">
            <CardHeader>
              <h2 className="text-center text-2xl font-bold">
                Scent NFT Marketplace
              </h2>
              <Image
                src="/Card2-img.png"
                alt="Mobile App"
                width={250}
                height={200}
                className="rounded-2xl ml-10"
              />
            </CardHeader>
            <CardContent>
              {/* <h3 className="font-bold text-2xl  mb-2">
                Own & Trade Your Scents
              </h3> */}
              <p className="text-md leading-relaxed card-desc">
                Turn your custom fragrances into NFTs. Gift, sell, or license
                your creations to others—perfect for influencers, perfumers, or
                friends, so you can buy influencers scent NFTs and spray it
                everyday. Also you can gift your friends a scent NFT instead of
                normal unsustainable perfume bottle and they can spray it using
                Sentio eco-friendly AI Fragrance Bottle .
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          transition={{ delay: 0.5 }}
        >
          <Card className="w-[350px] h-auto transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl  shadow-lg">
            <CardHeader>
              <h2 className="text-center text-2xl font-bold">
                Smart Dispenser Control
              </h2>
              <Image
                src="/card3last.jpg"
                alt="Mobile App"
                width={300}
                height={300}
                className="rounded-2xl "
              />
            </CardHeader>
            <CardContent>
              {/* <h3 className="font-bold text-2xl  mb-2">
                Adaptive Scent Delivery
              </h3> */}
              <p className="text-md leading-relaxed card-desc">
                Your fragrance adapts effortlessly. The app adjusts scent
                intensity and notes (floral, woody, fresh) based on your
                location, time of day, and mood. Syncs with wearables to detect
                stress, releasing calming or energizing blends. The smart bottle
                mixes personalized sprays in real-time, ensuring perfect harmony
                with your body chemistry.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
// import Image from "next/image";
// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// export const MobileSection = () => {
//   return (
//     <section className="p-25">
//       <h2 className="mt-20 mb-25 font-light text-4xl md:text-5xl tracking-tight text-gray-900">
//         <span>
//           The App That <span className="word">Learns</span> You
//         </span>
//         <svg
//           className="w-9 h-9 text-amber-600 ml-3 -mb-1 inline-block"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </h2>
//       <div className="flex justify-center items-center space-x-8 ">
//         <Card className="w-[400px] shadow-lg ">
//           <CardHeader>
//             <Image
//               src="/images/mobile.png"
//               alt="Mobile App"
//               width={200}
//               height={200}
//               className="rounded-tl-2xl rounded-tr-2xl"
//             />
//           </CardHeader>
//           <CardContent>
//             <h2 className="font-bold text-3xl mt-3 mb-2 ">Title</h2>
//             <p className="text-md leading-relaxed text-start card-desc">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
//               incidunt culpa eum iusto, tempore tenetur dolorum recusandae
//               aspernatur iste odit nihil quam? Cumque eos itaque ullam
//               repellendus molestiae exercitationem illum.
//             </p>
//           </CardContent>
//         </Card>
//         <Card className="w-[400px] shadow-2xl scale-105 z-10">
//           <CardHeader>
//             <Image
//               src="/images/mobile.png"
//               alt="Mobile App"
//               width={200}
//               height={200}
//               className="rounded-tl-2xl rounded-tr-2xl"
//             />
//           </CardHeader>
//           <CardContent>
//             <h2 className="font-bold text-3xl mt-3 mb-2 ">Title</h2>
//             <p className="text-md leading-relaxed card-desc">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
//               incidunt culpa eum iusto, tempore tenetur dolorum recusandae
//               aspernatur iste odit nihil quam? Cumque eos itaque ullam
//               repellendus molestiae exercitationem illum.
//             </p>
//           </CardContent>
//         </Card>
//         <Card className="w-[400px] shadow-lg">
//           <CardHeader>
//             <Image
//               src="/images/mobile.png"
//               alt="Mobile App"
//               width={200}
//               height={200}
//               className="rounded-tl-2xl rounded-tr-2xl"
//             />
//           </CardHeader>
//           <CardContent>
//             <h2 className="font-bold text-3xl mt-3 mb-2 ">Title</h2>
//             <p className="text-md leading-relaxed card-desc">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
//               incidunt culpa eum iusto, tempore tenetur dolorum recusandae
//               aspernatur iste odit nihil quam? Cumque eos itaque ullam
//               repellendus molestiae exercitationem illum.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };
