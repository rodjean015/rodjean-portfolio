export type Project = {
  name: string;
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "IPICK - Booking Services",
    description:
      "Built and improved booking system infrastructure, enhancing performance, security, and user experience.",
    link: "#",
  },
  {
    name: "IKOMUTPH - Automated Fare Calculation",
    description:
      "Developed a real-time bus ticketing and fleet monitoring platform with IoT data integration and cloud scaling.",
    link: "#",
  },
  {
    name: "Casino Strategy Bots (Baccarat & Blackjack)",
    description:
      "Created autonomous betting bots using statistical models and card counting strategies.",
    link: "#",
  },
  {
    name: "Poker AI System",
    description:
      "Built a reinforcement learning-based poker AI with scalable training and deployment pipelines.",
    link: "#",
  },
];
