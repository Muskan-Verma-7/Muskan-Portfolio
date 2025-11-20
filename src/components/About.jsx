import React from "react";
import { styles } from "../styles";
import { secondTestimonial } from "../assets";
import { SectionWrapper } from "../hoc";
import ScrollAnimation from "./ScrollAnimation";
import OptimizedImage from "./OptimizedImage";

const About = () => {
  return (
    <>
      <ScrollAnimation>
        <div className="mb-3">
          <p className={styles.heading2}>Introduction</p>
        </div>
      </ScrollAnimation>

      {/* Professional Photo and Introduction */}
      <ScrollAnimation delay={200}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
        {/* Professional Photo */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto lg:mx-0 rounded-lg overflow-hidden border-2 border-accent/10 shadow-sm">
            <OptimizedImage
              src={secondTestimonial}
              alt="Muskan Verma - Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Introduction Text */}
        <div className="flex-1 space-y-6">
          <div className={`${styles.lead} leading-relaxed space-y-4`}>
            <p>
              AI Engineer and LLM Specialist with 3+ years of experience building production-grade Agentic Workflows and RAG Architectures. I specialize in orchestrating multi-agent systems using LangGraph, fine-tuning large language models, and optimizing vector search strategies to deliver scalable, high-performance AI solutions.
            </p>
            
            <p>
              My expertise spans the full AI engineering lifecycle — from designing custom retrieval workflows and implementing RAG evaluation frameworks to deploying quantized models with dynamic batching. I focus on creating AI systems that are not only technically robust but also practical and efficient for real-world applications.
            </p>
            
            <p>
              When I'm not building AI agents or optimizing embeddings, I enjoy exploring new technologies, contributing to open-source projects, and staying at the forefront of LLM innovations.
            </p>
          </div>
        </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default SectionWrapper(About, "about");
