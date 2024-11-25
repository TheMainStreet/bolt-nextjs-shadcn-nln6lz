export const initialData = [
  {
    id: 1,
    goal: "Increase enterprise customer adoption",
    experiments: [
      {
        id: 1,
        name: "Implement SSO Integration",
        status: "in-progress",
        bounties: [
          {
            id: 1,
            title: "Design SSO architecture",
            points: 8,
            assignee: "Sarah Chen",
            status: "in-progress"
          },
          {
            id: 2,
            title: "Implement OAuth flow",
            points: 13,
            assignee: "Mike Rogers",
            status: "planned"
          },
          {
            id: 3,
            title: "Add SAML support",
            points: 5,
            assignee: null,
            status: "planned"
          }
        ]
      },
      {
        id: 2,
        name: "SOC2 Certification",
        status: "in-progress",
        bounties: [
          {
            id: 4,
            title: "Document security procedures",
            points: 5,
            assignee: "Alex Kim",
            status: "completed"
          },
          {
            id: 5,
            title: "Implement audit logging",
            points: 8,
            assignee: "James Wilson",
            status: "in-progress"
          }
        ]
      }
    ],
    measures: [
      { id: 1, name: "New enterprise customers per quarter", target: "4", current: "3", status: "yellow" },
      { id: 2, name: "Enterprise NPS score", target: "60", current: "55", status: "yellow" },
      { id: 3, name: "Security compliance score", target: "95", current: "92", status: "green" }
    ]
  },
  {
    id: 2,
    goal: "Optimize Cloud Infrastructure Costs",
    experiments: [
      {
        id: 3,
        name: "Implement Auto-scaling",
        status: "completed",
        bounties: [
          {
            id: 6,
            title: "Design scaling algorithms",
            points: 13,
            assignee: "Emma Davis",
            status: "completed"
          },
          {
            id: 7,
            title: "Set up monitoring dashboards",
            points: 5,
            assignee: "Chris Wong",
            status: "completed"
          }
        ]
      },
      {
        id: 4,
        name: "Resource Usage Optimization",
        status: "in-progress",
        bounties: [
          {
            id: 8,
            title: "Analyze current usage patterns",
            points: 8,
            assignee: "Lisa Johnson",
            status: "completed"
          },
          {
            id: 9,
            title: "Implement resource scheduling",
            points: 13,
            assignee: "Tom Martinez",
            status: "in-progress"
          }
        ]
      }
    ],
    measures: [
      { id: 4, name: "Monthly cloud costs reduction", target: "30%", current: "22%", status: "yellow" },
      { id: 5, name: "Resource utilization rate", target: "85%", current: "87%", status: "green" },
      { id: 6, name: "Cost per transaction", target: "$0.001", current: "$0.0012", status: "red" }
    ]
  },
  {
    id: 3,
    goal: "Enhance Platform Reliability",
    experiments: [
      {
        id: 5,
        name: "Implement Circuit Breakers",
        status: "in-progress",
        bounties: [
          {
            id: 10,
            title: "Design failure detection system",
            points: 13,
            assignee: "Rachel Kim",
            status: "completed"
          },
          {
            id: 11,
            title: "Implement retry mechanisms",
            points: 8,
            assignee: "David Chen",
            status: "in-progress"
          }
        ]
      },
      {
        id: 6,
        name: "Improve Error Handling",
        status: "planned",
        bounties: [
          {
            id: 12,
            title: "Create error taxonomy",
            points: 5,
            assignee: null,
            status: "planned"
          },
          {
            id: 13,
            title: "Implement global error boundary",
            points: 8,
            assignee: null,
            status: "planned"
          }
        ]
      }
    ],
    measures: [
      { id: 7, name: "System uptime", target: "99.99%", current: "99.95%", status: "yellow" },
      { id: 8, name: "Error rate", target: "0.1%", current: "0.08%", status: "green" },
      { id: 9, name: "Average response time", target: "200ms", current: "180ms", status: "green" }
    ]
  }
];