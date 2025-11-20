import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import ScrollAnimation from "./ScrollAnimation";

const Tech = () => {
  return (
    <section>
      <ScrollAnimation>
        <div className="mb-8">
          <p className={styles.heading2}>Tools and frameworks</p>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation delay={200}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {technologies.map((technology) => (
          <div 
            key={technology.name} 
            className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-xs text-accent text-center">{technology.name}</span>
          </div>
        ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionWrapper(Tech, "");