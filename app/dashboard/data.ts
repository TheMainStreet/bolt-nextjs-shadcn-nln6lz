export const initialData = {
  goals: [
    {
      id: 1,
      title: "Increase Enterprise Customer Adoption",
      quarter: "Q1 2024",
      status: "on-track",
      progress: 76,
      experiments: [
        { id: 1, title: "Implement SSO Integration", bountyCount: 3, totalPoints: 26 },
        { id: 2, title: "Complete SOC2 Certification", bountyCount: 2, totalPoints: 13 }
      ]
    },
    {
      id: 2,
      title: "Optimize Cloud Infrastructure Costs",
      quarter: "Q1 2024",
      status: "on-track",
      progress: 85,
      experiments: [
        { id: 3, title: "Implement Auto-scaling", bountyCount: 2, totalPoints: 18 },
        { id: 4, title: "Resource Usage Optimization", bountyCount: 2, totalPoints: 21 }
      ]
    },
    {
      id: 3,
      title: "Enhance Platform Reliability",
      quarter: "Q1 2024",
      status: "at-risk",
      progress: 45,
      experiments: [
        { id: 5, title: "Implement Circuit Breakers", bountyCount: 2, totalPoints: 21 },
        { id: 6, title: "Improve Error Handling", bountyCount: 2, totalPoints: 13 }
      ]
    }
  ]
};