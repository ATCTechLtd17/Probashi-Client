export const navigationData = {
  services: [
    {
      title: 'Government',
      items: [
        { label: 'BMET Registration', path: '/bmetregistration' },
        { label: 'PDO (Pre-Departure Orientation)', path: '/pdobooking' },
        { label: 'General Training', path: '/services/training' },
        { label: 'BMET Clearance (Smart Card)', path: '/emigration' }
      ]
    },
    {
      title: 'Job',
      items: [
        { label: 'Find Job', path: '/services/find-job' },
        { label: 'Make CV', path: '/services/make-cv' },
        { label: 'Take Career Consultancy', path: '/services/career' }
      ]
    },
    {
      title: 'Life Style',
      items: [
        { label: 'Online Doctor (Probashi Health)', path: '/services/health' },
        { label: 'Entertainment', path: '/services/entertainment', badge: 'Coming Soon' },
        { label: 'e-Learning', path: '/services/learning', badge: 'Coming Soon' }
      ]
    },
    {
      title: 'BRAC',
      items: [
        { label: 'Returnee Migrants', path: '/services/returnee' },
        { label: 'Skill Training', path: '/services/skill-training' },
        { label: 'Overseas Employment', path: '/services/overseas' }
      ]
    }
  ],
  recruitment: [
    {
      title: 'Foreign Employers',
      items: [
        { label: 'Talent Pool', path: '/recruitment/foreign/talent-pool' },
        { label: 'Post Job', path: '/recruitment/foreign/post-job' },
        { label: 'Video Interview', path: '/recruitment/foreign/video-interview' },
        { label: 'Connect to Local Recruiting Agencies', path: '/recruitment/foreign/connect' },
        { label: 'Government Compliance', path: '/recruitment/foreign/compliance' }
      ]
    },
    {
      title: 'Local Employers',
      items: [
        { label: 'Talent Pool', path: '/recruitment/local/talent-pool' },
        { label: 'Post Job', path: '/recruitment/local/post-job' },
        { label: 'Video Interview', path: '/recruitment/local/video-interview' }
      ]
    },
    {
      title: 'Training Institute',
      items: [
        { label: 'Broadcast courses', path: '/recruitment/training/courses' },
        { label: 'Online Enrollment', path: '/recruitment/training/enrollment' },
        { label: 'Digital Attendance', path: '/recruitment/training/attendance' }
      ]
    }
  ],
  portals: [
    {
      title: 'Government Portal',
      items: [
        { label: 'BMET', path: '/portals/government/bmet' },
        { label: 'Technical Training Center (TTC)', path: '/portals/government/ttc' },
        { label: 'DEMO Office', path: '/portals/government/demo' },
        { label: 'BIMT', path: '/portals/government/bimt' }
      ]
    },
    {
      title: 'Recruitment Portal',
      items: [
        { label: 'Recruiting Agency', path: '/portals/recruitment/agency' },
        { label: 'Foreign Employer', path: '/portals/recruitment/employer' },
        { label: 'RA Account Request', path: '/portals/recruitment/request' }
      ]
    }
  ]
};