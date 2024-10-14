interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}
const projectsData: Project[] = [
  {
    title: 'Lychee',
    description: `Want to see what I actually take photos of on a weekly basis? Take a look in my personal gallery, nicknamed "Lychee."`,
    imgSrc: 'https://lychee.shiruvaaa.net/uploads/medium2x/a7/d9/ba5bea99c66038f1ae05b463e2ef.jpg',
    href: 'https://lychee.shiruvaaa.net',
  },
  {
    title: 'The Wiki',
    description: `Mostly for personal use, but maybe some info might be of use to you as well. Things I learn and are in need to be written down in regards to tech will be written down here.`,
    imgSrc: '/static/images/project/wiki-shiruvaaa',
    href: 'https://wiki.shiruvaaa.net',
  },
  // {
  //   title: 'EHBO (WIP)',
  //   description: `EHBO: "Eerste Hulp Bij Ondervoeding" -- Or in English: "First Aid For Malnutrition" | A cozy source for good recipes.`,
  //   imgSrc: 'https://lychee.shiruvaaa.net/uploads/medium/7e/e9/2bd722254ecd085670df5541aff9.jpg',
  //   href: '/404',
  // },
]

export default projectsData
