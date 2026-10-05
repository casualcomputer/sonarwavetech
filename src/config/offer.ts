export const infrastructure = {
  name: 'AI Infrastructure & Deployment',
  entryName: 'Infrastructure Design & Procurement Plan',
  email: 'info@sonarwave.org',
  phone: '+1 (647) 667-3518',
  phoneHref: 'tel:+16476673518',
  stages: [
    {
      title: 'Define the system.',
      description:
        'Translate application features, user demand and operating constraints into hardware, network and security requirements with measurable acceptance criteria.',
      deliverable: 'System requirements and acceptance criteria',
    },
    {
      title: 'Benchmark and optimize.',
      description:
        'Test representative workloads and concurrent users. Evaluate the serving software alongside CPU, GPU, memory, storage and networking to determine where optimization, reconfiguration or additional capacity is needed.',
      deliverable: 'Benchmark results and validated specifications',
    },
    {
      title: 'Source and deploy.',
      description:
        'Compare cost, allocation and lead times across OEMs, resellers and specialist builders. Coordinate the selected build and delivery schedule, deploy the environment and verify it against the requirements.',
      deliverable: 'Vendor comparison, delivery schedule and tested deployment',
    },
    {
      title: 'Operate and scale.',
      description:
        'Establish monitoring, vulnerability scanning and AI audit logging. Use measured demand to plan capacity, maintain environment isolation and scale the system as usage grows.',
      deliverable: 'Operating procedures, handover and capacity plan',
    },
  ],
  deliverables: [
    'Agreed workload, response-time and concurrent-user targets',
    'Benchmark evidence, optimization options and known limitations',
    'Vendor comparison covering total cost, allocation and delivery timelines',
    'Hardware specifications aligned with your AI software requirements',
    'Deployment, security and acceptance-testing plan',
  ],
};

export const faqs = [
  {
    question: 'Who is this for, and when should we start?',
    answer:
      'For organizations with an upcoming, budgeted AI hardware purchase, deployment or capacity decision. The work is most useful before committing to a vendor or architecture, or when an existing system cannot meet required features, response times or user demand. We agree the decision and technical scope before starting.',
  },
  {
    question: 'We already have a vendor quote. Why get it reviewed?',
    answer:
      'A quote specifies what a vendor will supply. We assess whether the proposed hardware supports your AI software and workload, and compare the total cost of ownership, including integration effort, ongoing support and expansion. We also review allocation and delivery timelines across vendor options so the buying decision supports your project schedule. Existing quotes give us a practical starting point.',
  },
  {
    question: 'Can you improve an existing AI deployment?',
    answer:
      'We can assess an existing deployment before you commit to more hardware. We establish a performance baseline and identify opportunities to improve capacity. Changes are tested against throughput and response-time targets so you can decide whether to optimize, reconfigure or expand. The workload, measurements and scope are agreed before work begins.',
  },
  {
    question: 'What will we receive first?',
    answer:
      'The Infrastructure Design & Procurement Plan gives you a documented recommendation: agreed targets, benchmark evidence and its limits, comparable vendor costs and tradeoffs, architecture and purchase specifications, and a path to implementation. It identifies dependencies, open decisions and acceptance criteria so your team can decide what to buy and how to deploy it.',
  },
  {
    question: 'What do you need from our team?',
    answer:
      'Start with your existing workload, requirements, architecture documents and vendor quotes, plus budget and operating constraints. We identify gaps together and coordinate with your IT, data-centre and vendor contacts to gather technical details. Test access, representative data and permissions are agreed before testing; you do not need a finished specification to begin.',
  },
  {
    question: 'How long does the plan take?',
    answer:
      'We propose milestones and a delivery schedule once the workload, test scope and decision deadline are clear. Timing depends on access to representative data and environments, equipment availability and vendor responses. The proposal identifies these dependencies, and we review any change that affects the agreed schedule with you.',
  },
  {
    question: 'What does it cost, and are we committed to deployment?',
    answer:
      'We propose a fixed fee for an agreed scope before work begins. You have no obligation to commission deployment. If you proceed, procurement coordination, implementation and ongoing support receive their own defined scope and price. Hardware purchases, software licences and cloud usage are separate, with costs and approvals agreed in advance.',
  },
];
