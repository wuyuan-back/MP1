export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Wilfred Wu'
export const headline = 'Student at Xiamen university.'
export const introduction =
  "Salut! My name is Wilfred Wu. I'm from Yunan and a student of XMU. I’ve been learning mediclal since 2024."
export const email = 'quanharry499@gmail.com'
export const githubUsername = 'wuyuan-back'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Bonjour! My name is Wilfred Wu. I'm from Yunan and a student of XMU. I’ve been learning mediclal since 2024.",
  'Currently I am working on studying communication engineering',
  "I started this blog to share the insights I learn every day. Most blogs focus on the course i have learnt, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about my life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/481874214',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
