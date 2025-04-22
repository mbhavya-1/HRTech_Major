export const trustIndexData = {
    organizationScore: 72,
    scoreHistory: [
      { month: 'Jan', score: 65 },
      { month: 'Feb', score: 68 },
      { month: 'Mar', score: 70 },
      { month: 'Apr', score: 72 },
      { month: 'May', score: 75 },
      { month: 'Jun', score: 73 },
      { month: 'Jul', score: 72 },
    ],
    departmentScores: [
      { department: 'Engineering', score: 78 },
      { department: 'Marketing', score: 65 },
      { department: 'Product', score: 76 },
      { department: 'Customer Support', score: 81 },
      { department: 'Sales', score: 68 },
      { department: 'HR', score: 85 }
    ],
    riskFactors: [
      { factor: 'Communication Gaps', value: 38 },
      { factor: 'Decision Transparency', value: 26 },
      { factor: 'Feedback Exchange', value: 15 },
      { factor: 'Resource Allocation', value: 42 },
      { factor: 'Recognition', value: 21 }
    ]
  };
  
  export const teamData = [
    { 
      id: 1, 
      name: 'Jane Cooper', 
      role: 'Product Manager',
      team: 'Product',
      trustScore: 84,
      trend: 'up',
      location: 'Remote',
      engagement: 76,
      collaboration: 81,
      sentiment: 88
    },
    { 
      id: 2, 
      name: 'Alex Mitchell', 
      role: 'Senior Developer',
      team: 'Engineering',
      trustScore: 78,
      trend: 'stable',
      location: 'Office',
      engagement: 80,
      collaboration: 75,
      sentiment: 79
    },
    { 
      id: 3, 
      name: 'Sarah Wilson', 
      role: 'Marketing Specialist',
      team: 'Marketing',
      trustScore: 62,
      trend: 'down',
      location: 'Hybrid',
      engagement: 55,
      collaboration: 68,
      sentiment: 64
    },
    { 
      id: 4, 
      name: 'Michael Brown', 
      role: 'Customer Support',
      team: 'Customer Support',
      trustScore: 81,
      trend: 'up',
      location: 'Remote',
      engagement: 85,
      collaboration: 78,
      sentiment: 80
    },
    { 
      id: 5, 
      name: 'Emily Davis', 
      role: 'Sales Representative',
      team: 'Sales',
      trustScore: 68,
      trend: 'down',
      location: 'Office',
      engagement: 65,
      collaboration: 72,
      sentiment: 68
    },
    { 
      id: 6, 
      name: 'David Johnson', 
      role: 'HR Specialist',
      team: 'HR',
      trustScore: 85,
      trend: 'stable',
      location: 'Office',
      engagement: 88,
      collaboration: 82,
      sentiment: 84
    },
    { 
      id: 7, 
      name: 'Lisa Thompson', 
      role: 'Frontend Developer',
      team: 'Engineering',
      trustScore: 75,
      trend: 'up',
      location: 'Remote',
      engagement: 78,
      collaboration: 76,
      sentiment: 72
    },
    { 
      id: 8, 
      name: 'Robert Garcia', 
      role: 'Backend Developer',
      team: 'Engineering',
      trustScore: 72,
      trend: 'down',
      location: 'Hybrid',
      engagement: 68,
      collaboration: 74,
      sentiment: 74
    }
  ];
  
  export const networkData = {
    nodes: [
      { id: 1, name: 'Jane Cooper', department: 'Product', trust: 84 },
      { id: 2, name: 'Alex Mitchell', department: 'Engineering', trust: 78 },
      { id: 3, name: 'Sarah Wilson', department: 'Marketing', trust: 62 },
      { id: 4, name: 'Michael Brown', department: 'Customer Support', trust: 81 },
      { id: 5, name: 'Emily Davis', department: 'Sales', trust: 68 },
      { id: 6, name: 'David Johnson', department: 'HR', trust: 85 },
      { id: 7, name: 'Lisa Thompson', department: 'Engineering', trust: 75 },
      { id: 8, name: 'Robert Garcia', department: 'Engineering', trust: 72 },
      { id: 9, name: 'Amanda Lewis', department: 'Product', trust: 77 },
      { id: 10, name: 'James Wilson', department: 'Marketing', trust: 66 },
      { id: 11, name: 'Patricia Moore', department: 'Customer Support', trust: 79 },
      { id: 12, name: 'Mark Taylor', department: 'Sales', trust: 71 }
    ],
    links: [
      { source: 1, target: 2, strength: 0.8 },
      { source: 1, target: 9, strength: 0.9 },
      { source: 2, target: 7, strength: 0.7 },
      { source: 2, target: 8, strength: 0.6 },
      { source: 3, target: 10, strength: 0.5 },
      { source: 3, target: 5, strength: 0.4 },
      { source: 4, target: 11, strength: 0.8 },
      { source: 5, target: 12, strength: 0.7 },
      { source: 6, target: 1, strength: 0.6 },
      { source: 6, target: 3, strength: 0.3 },
      { source: 6, target: 4, strength: 0.7 },
      { source: 7, target: 8, strength: 0.9 },
      { source: 9, target: 10, strength: 0.4 },
      { source: 11, target: 12, strength: 0.5 }
    ]
  };
  
  export const alertsData = [
    {
      id: 1,
      type: 'high',
      title: 'Communication breakdown detected',
      description: 'Marketing team showing 28% decrease in cross-team communication with Engineering over the past 2 weeks.',
      timestamp: '2 hours ago',
      team: 'Marketing',
      recommendation: 'Schedule a cross-team sync meeting to address potential misalignments.'
    },
    {
      id: 2,
      type: 'medium',
      title: 'Sentiment decline detected',
      description: 'Sales team sentiment has decreased by 15% in the last month, primarily around resource allocation topics.',
      timestamp: '1 day ago',
      team: 'Sales',
      recommendation: 'Review resource allocation processes and gather feedback from team members.'
    },
    {
      id: 3,
      type: 'high',
      title: 'Collaboration decline',
      description: 'Robert Garcia showing 40% drop in collaboration metrics with team members over past 3 weeks.',
      timestamp: '6 hours ago',
      team: 'Engineering',
      recommendation: 'Manager check-in recommended to address potential issues.'
    },
    {
      id: 4,
      type: 'low',
      title: 'Meeting participation decrease',
      description: 'Product team showing 10% decrease in active participation during cross-functional meetings.',
      timestamp: '3 days ago',
      team: 'Product',
      recommendation: 'Review meeting formats and encourage active participation.'
    },
    {
      id: 5,
      type: 'medium',
      title: 'Decision transparency issue',
      description: 'Engineering team members reporting 20% lower scores on decision transparency in pulse surveys.',
      timestamp: '2 days ago',
      team: 'Engineering',
      recommendation: 'Implement more transparent decision documentation and communication.'
    }
  ];
  
  export const privacySettings = {
    dataCollectionEnabled: true,
    consentGiven: true,
    dataCollectionMethods: [
      {
        id: 'communication',
        name: 'Communication Metadata',
        description: 'Analyzes patterns in communication (frequency, response times) without reading content',
        enabled: true
      },
      {
        id: 'meeting',
        name: 'Meeting Patterns',
        description: 'Tracks meeting attendance, speaking time, and participation patterns',
        enabled: true
      },
      {
        id: 'sentiment',
        name: 'Sentiment Analysis',
        description: 'Analyzes tone and sentiment in opt-in communication channels',
        enabled: false
      },
      {
        id: 'network',
        name: 'Collaboration Network',
        description: 'Maps relationships and collaboration patterns between team members',
        enabled: true
      }
    ]
  };