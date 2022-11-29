import React, { useMemo } from "react";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { attributes, react as HomeContent } from "../content/home.md";

/* 

const features = [
  "positionnement en temps reel de toute votre flotte accessible aussi via smartphone.",
  "État du véhicule (en fonction, en pause, en veille, hors couverture GPRS)",
  "Indication de tous les paramètres du véhicule",
  "Live tracking Plus vous permet de générer plusieurs rapports (Relecture (Replaying), excès de vitesse, arrêts, écoconduite, synthèse. Par véhicule(s) et par chauffeur(s) avec l'indicateur RAG)",
];

*/
const Feature = () => {
  let { title, body, fonctionnalites } = attributes;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Les Fonctionnalites de LIVE TRACKING Plus
            </h3>
            <p className="my-2 text-black-500">
              Ayez une autre vision precise de votre flotte Avec LIVE TRACKING
              Plus service où nous offrons :
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 mt-5">
              {fonctionnalites.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature.name}
                </motion.li>
              ))}
            </ul>
            <ButtonOutline>More</ButtonOutline>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
