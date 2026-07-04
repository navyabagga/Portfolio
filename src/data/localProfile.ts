import { ContactMe, ProfileBanner, Project, Skill, TimelineItem, Certification } from '../types';
import defaultBanner from '../images/blue.png';
import NavyaImg from '../images/Navya Img.jpg';
import hrPolicyImg from '../images/robo.png';
import oneOrderImg from '../images/oneorder logo.jpg';
import lungCancerImg from '../images/lungs.jpg';

export const localProfileBanner: ProfileBanner = {
  backgroundImage: { url: defaultBanner },
  headline: 'Navya Bagga - AI Python Developer',
  resumeLink: { url: 'https://drive.google.com/file/d/1tALSq0ONKiUDM_5KA2sbfzCzjvKCKxjL/view?usp=drivesdk' },
  linkedinLink: 'https://www.linkedin.com/in/navya-bagga-899848338/',
  profileSummary:
    'Cloud-Native Software Developer specializing in Python development and AWS Distributed Systems. Developed and deployed scalable microservices to eliminate manual workflows, resulting in reduction of operational costs and performance improvements by 50%. Engineered end-to-end, high-impact solutions using next-generation AI paradigms. Leverage Generative AI and Machine Learning to define technical roadmaps and deliver innovative solutions.',
};

export const localContactMe: ContactMe = {
  profilePicture: { url: NavyaImg },
  name: 'Navya Bagga',
  title: 'AI Python Developer',
  summary:
    'Cloud-Native Software Developer specializing in Python development and AWS Distributed Systems. \n Developed and deployed scalable microservices to eliminate manual workflows, resulting in reduction of operational costs and performance improvements by 50%. \nEngineered end-to-end, high-impact solutions using next-generation AI paradigms. \n Leverage Generative AI and Machine Learning to define technical roadmaps and deliver innovative solutions.',
  companyUniversity: 'Tata Consultancy Limited',
  linkedinLink: 'https://www.linkedin.com/in/navya-bagga-899848338/',
  email: 'navyabagga34@gmail.com',
  phoneNumber: '+91 9452023340',
};

export const localProjects: Project[] = [
  {
    title: 'Self Updating HR Policy and Q&A Bot',
    description: 'An Agentic HR Assistant that auto ingests and updates company policies via secure HR login. \n It also answers employee queries and trigger escalation for sensitive cases.\n Integrated leave application and grievence ticketing with live database updates enabling a single conversational interface for all HR operations.',
    techUsed: 'Python, EC2 Instances, DynamoDB, Langchain, Langgraph, AWS, Vector DB, LLMs',
    image: { url: hrPolicyImg },
    githubLink: 'https://github.com/navyabagga/HR-Assistant',
  },
  {
    title: 'OneOrder - Unified Airline Retailing System',
    description: 'A system that maps an airline\'s existing databases to the OneOrder database according to IATA standards without requiring any schema changes. \n It automatically syncs and merges records into the OneOrder compliant structure, enabling airlines to adopt industry standards while continuing to use their legacy data systems.',
    techUsed: 'Python, Lambda, DynamoDB, AWS, DBMS, DSA',
    image: { url: oneOrderImg },
  },
  {
    title: 'Lung Cancer Detection',
    description: 'Implemented and compared multiple deep learning models on labelled CT scan datasets to identify the presence and type of lung cancer. \n Evaluated model peerformance under different configurations and hyperparameters, achieving accurate detection results using a trained classifier on test images',
    techUsed: 'Python, Matplotlib, Pandas, Keras, Tensorflow, Transfer Learning, Deep Learning (DenseNet, VGG, ResNet)',
    image: { url: lungCancerImg },
    githubLink: 'https://github.com/navyabagga/Lung-Cancer-Detection',
  },
];

export const localSkills: Skill[] = [
  { name: 'Python', category: 'Backend', description: 'Skilled in Python for building AI chatbots, implementing RAG pipelines, and developing Agentic AI solutions.', icon: 'FaPython' },

{ name: 'Java', category: 'Backend', description: 'Object-oriented language used for scalable backend systems, enterprise applications, and Android development.', icon: 'FaJava' },

{ name: 'Langchain', category: 'AI Frameworks', description: 'Building LLM-powered applications with tools, agents, and retrieval systems.', icon: 'FaPython' },

{ name: 'Langgraph', category: 'AI Frameworks', description: 'Creating production-grade agent workflows using graph-based orchestration.', icon: 'FaPython' },

{ name: 'Vector DB', category: 'AI Frameworks', description: 'Skilled in Vector DBs for high-performance embedding search, retrieval pipelines, and LLM integration.', icon: 'FaDatabase' },

{ name: 'Retrieval Augmented Generation (RAG)', category: 'AI Concepts', description: 'Experienced in implementing RAG pipelines for knowledge retrieval, context enrichment, and accurate LLM responses.', icon: 'FaBrain' },

{ name: 'Natural Language Processing (NLP)', category: 'AI Concepts', description: 'Skilled in applying NLP techniques for text analysis, intent understanding, and language-based AI applications.', icon: 'FaBrain' },

{ name: 'Generative AI', category: 'AI Concepts', description: 'Building applications that create text, content, and intelligent automated outputs.', icon: 'FaBrain' },

{ name: 'Agentic AI', category: 'AI Concepts', description: 'Designing systems with autonomous decision-making, tool use, and multi-step task execution.', icon: 'FaBrain' },

{ name: 'Prompt Engineering', category: 'AI Concepts', description: 'Crafting effective prompts that optimize LLM reasoning, output quality, and task performance.', icon: 'FaKeyboard' },

{ name: 'LLM', category: 'AI Concepts', description: 'Building applications that leverage large language models for reasoning, text generation, and intelligent task automation.', icon: 'FaBrain' },

{ name: 'Transformer', category: 'AI Concepts', description: 'Attention-based neural network architecture underlying most modern LLMs — enables models to weigh relationships across entire input sequences in parallel.', icon: 'FaBrain' },

{ name: 'Fine-tuning', category: 'AI Concepts', description: 'Adapting a pre-trained model on domain-specific data to improve accuracy and relevance for specialized tasks without training from scratch.', icon: 'FaBrain' },

{ name: 'Embeddings', category: 'AI Concepts', description: 'Dense vector representations of text, images, or other data that capture semantic meaning, enabling similarity search and retrieval.', icon: 'FaBrain' },

{ name: 'Chain-of-Thought (CoT)', category: 'AI Concepts', description: 'Prompting technique that elicits step-by-step reasoning from a model, improving accuracy on complex multi-step tasks.', icon: 'FaBrain' },

{ name: 'Agent', category: 'AI Concepts', description: 'An LLM equipped with tools, memory, and a reasoning loop to take multi-step actions autonomously toward a goal.', icon: 'FaBrain' },

{ name: 'Multimodal AI', category: 'AI Concepts', description: 'Models that process and reason across multiple input types — text, image, audio, and video — within a unified architecture.', icon: 'FaBrain' },

{ name: 'Machine Learning', category: 'AI Concepts', description: 'Building systems that learn patterns from data to make predictions and decisions — spanning supervised, unsupervised, and reinforcement learning paradigms.', icon: 'FaBrain' },

{ name: 'Deep Learning', category: 'AI Concepts', description: 'Training multi-layer neural networks on large datasets to automatically extract hierarchical features for tasks like classification, generation, and detection.', icon: 'FaBrain' },

{ name: 'AWS', category: 'Cloud', description: 'Deploying and managing cloud infrastructure, compute services, storage solutions, and scalable applications.', icon: 'FaAws' },

{ name: 'Object Oriented Programming (OOPs)', category: 'Technical Skills', description: 'Programming for building modular, reusable, and maintainable applications using classes and objects.', icon: 'FaCode' },

{ name: 'Data Structures and Algorithms (DSA)', category: 'Technical Skills', description: 'Writing efficient code, optimizing performance, and solving computational problems.', icon: 'FaCode' },

{ name: 'DBMS', category: 'Technical Skills', description: 'Designing and managing relational and non-relational databases, writing optimized queries, and ensuring data integrity across systems.', icon: 'FaDatabase' },

{ name: 'System Design', category: 'Technical Skills', description: 'Designing scalable, reliable, and maintainable large-scale software architectures.', icon: 'FaSitemap' },

{ name: 'Microservices', category: 'Technical Skills', description: 'Building and deploying applications as independently scalable services that communicate over APIs, enabling faster delivery and fault isolation.', icon: 'FaCode' },

{ name: 'Distributed Systems', category: 'Technical Skills', description: 'Designing systems that run across multiple nodes with consistency, fault tolerance, and high availability as core requirements.', icon: 'FaSitemap' },

{ name: 'Git', category: 'Technical Skills', description: 'Version control for managing codebases, branching strategies, code reviews, and collaborative development workflows.', icon: 'FaCode' },

{ name: 'Jira', category: 'Technical Skills', description: 'Agile project management using Jira for sprint planning, issue tracking, and cross-team delivery coordination.', icon: 'FaCode' },

{ name: 'Problem Solving', category: 'Soft Skills', description: 'Ability to analyze problems, break them down, and identify effective solutions.', icon: 'FaLightbulb' },

{ name: 'Decision Making', category: 'Soft Skills', description: 'Evaluating options and selecting the most effective and strategic course of action.', icon: 'FaLightbulb' },

{ name: 'Cross Functional Collaboration', category: 'Soft Skills', description: 'Working effectively with teams across different roles to achieve shared goals.', icon: 'FaUsers' },

{ name: 'Knowledge Sharing and Mentorship', category: 'Soft Skills', description: 'Helping others grow by offering guidance, insights, and support in learning.', icon: 'FaUsers' },

];

export const localTimeline: TimelineItem[] = [
  {
    timelineType: 'education',
    name: 'Pranveer Singh Institute of Technology',
    title: 'Bachelors of Technology in Information Technology',
    techStack: 'Algorithms, Data Structures, OOPs',
    summaryPoints: ['Member of Google Developer Student Club'],
    dateRange: '2019 - 2023',
  },
  {
    timelineType: 'work',
    name: 'Tata Consultancy Limited',
    title: 'AI Python Developer',
    techStack: 'Python, AWS, Generative AI, Agentic AI, Vector Databases, Langchain, Langgraph',
    summaryPoints: [
      'Owned end-to-end client delivery of 10+ enterprise AI/ML cloud solutions for travel & hospitality clients — led requirement discovery sessions, designed cloud solution architecture, mapped client systems to AWS/GCP capabilities, and managed UAT through production go-live and drove atleast 10–25% operational efficiency gains per engagement.',
      'Architectured production grade ML and RAG pipelines using AWS, LangChain, LangGraph, and Python; improved retrieval precision by 18% and reduced LLM hallucinations by 25%; cut LLM latency 30% through distributed vector DB optimisation (Chroma, FAISS), intelligent caching, and document chunking strategies.',
      'Designed prompt engineering workflows and LLM evaluation frameworks on AWS; Llama variants on domain-specific datasets achieving 15–28% accuracy improvements; raised overall model response quality by 22% while significantly reducing manual review overhead.',
      'Led team adoption of AI-assisted SDLC workflows (Cursor, Claude Code with MCP integrations) — reduced individual delivery turnaround by 40% and cut overall team delivery time by 60%; upskilled 10+ colleagues through structured sessions on Generative AI, Agentic AI, RAG architectures, LLM Evaluations and LLMOps best practices.',
      'Troubleshot and resolved production issues across the full stack — LLM inference, retrieval pipelines, API integrations, and cloud infrastructure — consistently maintaining client SLAs across all live deployments.',
    ],
    dateRange: 'Nov2023 - Present',
  },
];

export const localCertifications: Certification[] = [];


