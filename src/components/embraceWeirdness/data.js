import paragraph1 from '@/components/embraceWeirdness/1stParagraph.js'
import paragraph2 from '@/components/embraceWeirdness/2ndParagraph.js'
import paragraph3 from '@/components/embraceWeirdness/3rdParagraph.js'
const articleInfo = {
  'backgroundColor_1': 'rgb(29, 66, 76)',
  'backgroundColor_2': '#486E70',
  'landingPage': { 'title': 'Embrace Weirdness',
    'subHeading': 'Cryptocurrency feels weird. It should.',
    'background': 'https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'color': 'rgb(29, 66, 76,.9)' },
  '_1': { 'title': 'Would you take a ride from a driver who learned how to drive from studying and riding bicycles?',
    'photo': 'https://res.cloudinary.com/dylevfpbl/image/upload/v1554010459/decenblog/embrace/car.jpg' },
  '_2': { 'paragraph': paragraph1,
    'photos': ['https://images.pexels.com/photos/545062/pexels-photo-545062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'] },
  '_3': { 'title': `If what I say now seems to be very reasonable, then I will have failed completely.
          Only if what I tell you appears absolutely unreasonable have we any chance of visualizing
          the future as it really will happen. <br>  - Arthur C. Clarke`,
  // eslint-disable-next-line
    'photo': 'https://cdn.pixabay.com/photo/2018/04/01/02/20/future-3279838_960_720.jpg' },
  '_4': { 'paragraph': paragraph2,
    'photos': ['https://res.cloudinary.com/dylevfpbl/image/upload/v1554011377/decenblog/embrace/black_future.jpg'] },
  '_5': { 'paragraph': paragraph3,
    'photos': ['https://res.cloudinary.com/dylevfpbl/image/upload/v1554010696/decenblog/embrace/fantasy.jpg'] }
}

export default articleInfo
