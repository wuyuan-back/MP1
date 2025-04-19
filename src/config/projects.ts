// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
        name: 'Newcomer Cup Volleyball Tournament Team Second Prize',
    description: '',
    date: '2024',
    location: 'XMU, Xiamen',
  },

]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  
  
  
  {
    name: 'test',
    description: '',
    link: { href: '', label: '' },
    tags: ['test']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
        name: 'Newcomer Cup Volleyball Tournament Team Second Prize',
    description:
      'The tournament is held for freshmen to enliven the volleyball atmosphere.',
    date: '2024-10-24',
    location: 'XMU',
    link: '',
  },
]
