export type Project = {
  name: string;
  description: string;
};

export type Role = {
  title: string;
  period: string;
  projects?: Project[];
  description?: string;
};

export type Company = {
  name: string;
  roles: Role[];
};

export const experience: Company[] = [
  {
    name: "METROHILLS TRANSPORT ASSOCIATION INC.",
    roles: [
      {
        title: "Senior Fullstack Engineer",
        period: "2024 - Present",
        projects: [
          {
            name: "IPICK - Booking Services",
            description:
              "Developed and deployed planning software infrastructure at iPick - Booking Services to improve operational efficiency. Led code and security migrations to ensure system integrity and compliance. Collaborated with cross-functional teams to streamline deployment processes and enhance overall productivity. Contributed as a full-stack engineer to mobile application development, improving user experience.",
          },
          {
            name: "IKOMUTPH - Automated Fare Calculation",
            description:
              "Led the end-to-end design and delivery of a production-ready bus ticketing and fleet intelligence platform. Built and scaled backend services, APIs, and IoT data pipelines to handle real-time telemetry from ticketing devices, GPS, and onboard cameras. Developed a real-time monitoring dashboard for fleet operations, providing visibility into trips, devices, and driver behavior. Oversaw full-stack architecture across mobile, web, and backend, while managing cloud infrastructure on AWS and GCP. Collaborated with stakeholders to align product development with operational needs, and drove roadmap planning, system scalability, and high availability.",
          },
        ],
      },
    ],
  },
  {
    name: "Kakao Story",
    roles: [
      {
        title: "AI Engineer",
        period: "2024",
        description:
          "Developed a suite of autonomous gaming bots across Baccarat, Blackjack, and Poker, leveraging advanced betting strategies, statistical modeling, and machine learning. Implemented customizable betting systems, real-time decision-making algorithms (including card counting), and simulation frameworks to optimize performance under varying conditions. Built user interfaces for monitoring and control, and deployed scalable backend systems and data pipelines on GCP to support real-time data processing, model training, and adaptive gameplay.",
        projects: [
          {
            name: "Casino Strategy Bots (Baccarat & Blackjack)",
            description:
              "Built autonomous bots with customizable betting systems and card counting (Hi-Lo), incorporating statistical decision-making and simulation testing for optimized performance.",
          },
          {
            name: "Poker AI System",
            description:
              "Developed a machine learning-driven poker AI using reinforcement learning and real-time data pipelines. Deployed scalable APIs and training infrastructure on GCP.",
          },
        ],
      },
    ],
  },
  {
    name: "Accenture Inc.",
    roles: [
      {
        title: "Data Analyst",
        period: "2018 - 2024",
        description:
          "I am skilled in evaluating the accuracy and quality of data in medical systems, focusing on medical records and managing prior authorizations. My expertise includes calculating coinsurance, deductibles, and copays, adhering to HIPAA regulations for confidentiality. I proficiently handle end-to-end claims processing, verify member status, adjust claims, and route them accurately to relevant departments.",
      },
    ],
  },
];
