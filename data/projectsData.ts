interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
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
    href: '/blog/the-time-machine',
  },
]

export default projectsData
