export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
};

export const projects: Project[] = [
  {
    slug: "ishvraa",
    number: "01",
    title: "Ishvraa",
    type: "E-Commerce Platform",

    shortDescription:
      "A modern e-commerce platform for fashion and accessories with product discovery, customer flows, orders and scalable application architecture.",

    description:
      "Ishvraa is a modern e-commerce platform focused on creating a smooth shopping experience while providing the business with a scalable foundation for managing products, customers and orders.",

    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
    ],

    image: "/images/projects/ishvraa/home.png",

    liveUrl: null,

    githubUrl: null,

    featured: true,

    overview:
      "The project is designed as a real-world fashion and accessories commerce platform. The focus is not only on the customer-facing storefront but also on building a maintainable application architecture that can support product management, authentication, ordering and future business requirements.",

    problem:
      "The platform needs to provide customers with a clean way to discover and purchase products while giving the business a structured system for managing products, inventory-related information and customer orders.",

    solution:
      "The application is being developed using a modern full-stack architecture with reusable frontend components, structured APIs, database-backed product information and scalable application flows.",

    features: [
      "Product catalogue and category browsing",
      "Responsive e-commerce storefront",
      "User authentication",
      "Shopping cart workflow",
      "Order management",
      "Product management",
      "REST API integration",
      "Database-backed application architecture",
    ],

    challenges: [
      "Designing reusable product structures",
      "Maintaining clean frontend and backend separation",
      "Building scalable ordering workflows",
      "Preparing the platform for future functionality",
    ],
  },

  {
    slug: "roomora",
    number: "02",
    title: "Roomora",
    type: "Hotel Booking Platform",

    shortDescription:
      "A full-stack MERN hotel booking platform with authentication, room search, reservation management and scalable REST API integration.",

    description:
      "Roomora is a full-stack hotel booking application designed to provide users with an intuitive way to discover rooms, authenticate securely and manage reservations.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],

    image: "/images/projects/roomora/home.png",

    liveUrl: null,

    githubUrl: null,

    featured: false,

    overview:
      "Roomora demonstrates full-stack application development using the MERN ecosystem. The project combines a responsive frontend with authentication, room discovery, reservation functionality and backend API integration.",

    problem:
      "Hotel booking applications need to coordinate user authentication, room information, reservation data and responsive user interactions while keeping frontend and backend responsibilities clearly separated.",

    solution:
      "Roomora uses a React.js frontend connected to Node.js and Express.js REST APIs, with MongoDB for data persistence and JWT for authentication.",

    features: [
      "User authentication using JWT",
      "Hotel and room discovery",
      "Reservation management",
      "Reusable React components",
      "Responsive user interface",
      "REST API integration",
      "User management",
      "MongoDB persistence",
    ],

    challenges: [
      "Managing authentication state",
      "Designing reservation workflows",
      "Keeping frontend and backend data synchronized",
      "Creating reusable responsive UI components",
    ],
  },

  {
    slug: "zapflow",
    number: "03",
    title: "ZapFlow",
    type: "Decentralized Automation Platform",

    shortDescription:
      "An event-driven automation platform supporting workflow triggers, actions, Kafka processing, webhooks, email automation and Solana transactions.",

    description:
      "ZapFlow is a decentralized automation platform designed around event-driven workflows. Users can connect triggers with actions to create automated processes across different services.",

    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Kafka",
      "Webhooks",
      "Solana",
    ],

    image: "/images/projects/zapflow/home.png",

    liveUrl: null,

    githubUrl: null,

    featured: false,

    overview:
      "ZapFlow demonstrates backend architecture and asynchronous processing through event-driven workflows. It combines traditional backend APIs with Kafka, webhooks and blockchain-related functionality.",

    problem:
      "Automation platforms need a reliable way to receive events, process asynchronous tasks and execute actions across services without tightly coupling every part of the system.",

    solution:
      "ZapFlow uses event-driven architecture with Kafka for asynchronous processing, webhooks for external triggers, PostgreSQL for structured persistence and Solana integration for transaction-based workflows.",

    features: [
      "Event-driven workflow creation",
      "Trigger and action architecture",
      "Webhook integration",
      "Kafka-based asynchronous processing",
      "Secure authentication",
      "Email automation",
      "PostgreSQL data management",
      "Solana transaction support",
    ],

    challenges: [
      "Coordinating asynchronous events",
      "Handling workflow execution reliably",
      "Designing trigger and action abstractions",
      "Integrating external services and webhooks",
    ],
  },
];