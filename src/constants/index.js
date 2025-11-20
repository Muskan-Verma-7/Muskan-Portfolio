
import {
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  gearXpert,
  project2,
  project3,
  apache_spark,
  aws,
  docker,
  fastapi,
  git,
  huggingface,
  kubernetes,
  langchain,
  mongodb,
  openai,
  postgresql,
  python,
  pytorch,
  tensorflow,
  typescript,
  vertex_ai,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Agentic Workflows",
    icon: web,
  },
  {
    title: "RAG & LLMs",
    icon: mobile,
  },
  {
    title: "ETL & Analytics",
    icon: backend,
  },
  {
    title: "MLOps & CI/CD",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "LangGraph",
    icon: langchain,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Vertex AI",
    icon: vertex_ai,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "ChromaDB",
    icon: mongodb,
  },
  {
    name: "Apache Spark",
    icon: apache_spark,
  },
  {
    name: "Terraform",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "SAGAS IT ANALYTICS",
    location: "Remote",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jul 2024 - Aug 2025",
    points: [
      "Built an AI Research Assistant with RAG, LangChain, LangGraph, and OpenAI LLMs integrated with vector search; cut research time by 30%.",
      "Designed custom retrieval workflows with LlamaIndex, building a ReAct-style agent for dynamic chunking; improved query accuracy by 18%.",
      "Researched and optimized embedding strategies, reducing retrieval cost per query by 15%.",
      "Developed RAG evaluation frameworks using RAGAS and Langsmith, with custom datasets; improved coverage by 40%.",
      "Fine-tuned LLMs (LLaMA 2) on Vertex AI with custom inference containers, dynamic batching, and quantization; reduced inference latency by 25%.",
      "Integrated AI agents in LangGraph with short-term and long-term memory (Mem0); increased task completion rate by 20%.",
      "Created schema-aware synthetic data generators; fine-tuned downstream models achieving +12% F1 score.",
    ],
    position: "left"
  },
  {
    title: "M.Sc. in Data Science",
    company_name: "IU International Hochschule",
    location: "Berlin, DE",
    icon: tekisky,
    iconBg: "#666666",
    date: "Apr 2023 - Apr 2025",
    points: [
      "Master's degree in Data Science with a focus on AI and Machine Learning.",
      "Specialized in Large Language Models, RAG architectures, and Agentic workflows.",
      "Developed end-to-end solutions for data-driven products and AI applications.",
      "Conducted research on advanced LLM techniques and multi-agent systems.",
    ],
    position: "right"
  },
  {
    title: "BI Engineer",
    company_name: "Grand View Research",
    location: "San Francisco, CA",
    icon: tekisky,
    iconBg: "#666666",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Developed ARIMA and multivariate regression models to forecast market CAGR, reducing prediction error by 15% over linear baselines.",
      "Implemented customer segmentation via K-Means, increasing marketing effectiveness by +20%.",
      "Automated Facebook ads with GPT-3, boosting engagement by +35%.",
      "Implemented n8n automations, reducing errors and costs by 20% and boosting signups by 15%.",
      "Engineered automated Python ETL pipelines, reducing data preprocessing time by 50% for AI model training.",
    ],
    position: "left"
  },
  {
    title: "Data Analyst Intern",
    company_name: "SKILLATE",
    location: "India",
    icon: tekisky,
    iconBg: "#666666",
    date: "Oct 2020 - Dec 2020",
    points: [
      "Collaborated with the ML team to curate high-quality Ground Truth datasets for NLP models.",
      "Performed rigorous data annotation and quality assurance (QA) to minimize noise in training corpora.",
      "Delivered Dash/Plotly dashboards, improving decision speed by +30%.",
      "Supported data preprocessing and feature engineering for machine learning projects.",
    ],
    position: "left"
  },
  {
    title: "Bachelor of Technology",
    company_name: "ABESIT",
    location: "India",
    icon: tekisky,
    iconBg: "#666666",
    date: "Aug 2016 - Aug 2020",
    points: [
      "Bachelor's degree in Technology with focus on Computer Science and Engineering.",
      "Built strong foundation in algorithms, data structures, and software development.",
      "Completed projects in machine learning and data analysis.",
      "Developed problem-solving and analytical skills through coursework and practical projects.",
    ],
    position: "right"
  },
];

const projects = [
  {
    name: "AI Voice Interview Assistant",
    description:
      "Interactive AI-powered interview preparation platform that conducts voice-based mock interviews with real-time feedback. Features document analysis (resume/cover letter), job description integration, multi-stage interviews, and generates personalized podcast summaries of interview performance.",
    tags: [
      {
        name: "OpenAI",
        color: "text-primary",
      },
      {
        name: "Whisper API",
        color: "text-secondary",
      },
      {
        name: "ChromaDB",
        color: "text-accent",
      },
      {
        name: "Streamlit",
        color: "text-primary-light",
      },
      {
        name: "ElevenLabs",
        color: "text-primary-light",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Muskan-Verma-7/ai_interviewer",
    live_demo_link: "",
    buttonType: "GitHub",
    impact: "Natural voice interaction with personalized feedback and podcast generation",
  },
  {
    name: "Synthetic Data Generator for LLM Reasoning",
    description:
      "Python framework using MuSR methodology to generate synthetic tax law cases for evaluating LLM reasoning capabilities. Features logic tree construction, narrative generation, and comprehensive reasoning evaluation with caching and batch processing for performance optimization.",
    tags: [
      {
        name: "Python",
        color: "text-primary",
      },
      {
        name: "MuSR",
        color: "text-secondary",
      },
      {
        name: "Logic Trees",
        color: "text-accent",
      },
      {
        name: "LLM Evaluation",
        color: "text-primary-light",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Muskan-Verma-7/Synthetic_Data_Generator",
    live_demo_link: "",
    buttonType: "GitHub",
    impact: "Generates reliable test cases with 50%+ cache hit rate and deterministic ground truth",
  },
  {
    name: "LangGraph Chatbot",
    description:
      "Advanced conversational AI system built with LangGraph for managing complex multi-turn conversations. Implements state management, dynamic conversation flow, and context-aware responses using graph-based architecture for intelligent dialogue handling.",
    tags: [
      {
        name: "LangGraph",
        color: "text-primary",
      },
      {
        name: "LangChain",
        color: "text-secondary",
      },
      {
        name: "Python",
        color: "text-accent",
      },
      {
        name: "State Management",
        color: "text-primary-light",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Muskan-Verma-7/Langgraph-Chatbot",
    live_demo_link: "",
    buttonType: "GitHub",
    impact: "Graph-based conversation management with intelligent context handling",
  },
];

export { services, technologies, experiences, projects };


