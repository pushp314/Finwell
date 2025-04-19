import { StaticImageData } from 'next/image';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const timelineData: TimelineItem[] = [
  {
    year: '2011',
    title: 'The start of the Greenbull adventure',
    description: 'Greenbull Investment was founded in 2011, with a small team of three entrepreneurs in their middle of 20 years old university friends, motivated by a strong will to make an impact, and a vision of the future of financial markets. The tagline "together we achieve more" is born.',
    imageUrl: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2013',
    title: 'Launch of algorithmic trading',
    description: 'Greenbull Capital is created. To improve their saving yield and investment capabilities, the founders develop prediction engines to optimize customer gains with an automated management system.',
    imageUrl: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2015',
    title: 'Expansion into European markets',
    description: 'After successful growth in domestic markets, Greenbull Group begins expansion into key European financial centers, establishing offices in London and Frankfurt.',
    imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2017',
    title: 'Launch of Greenbull Ventures',
    description: 'Greenbull Ventures is established as a dedicated arm for early-stage investments in fintech startups, expanding the group\'s portfolio beyond traditional markets.',
    imageUrl: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2018',
    title: 'Introduction of AI-powered analysis',
    description: 'Greenbull integrates advanced AI algorithms into its trading platforms, revolutionizing market analysis and prediction capabilities for clients.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2019',
    title: 'Sustainable investment initiative',
    description: 'Launch of Greenbull Sustainable, a new division focused exclusively on ESG investments and sustainable development opportunities worldwide.',
    imageUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2020',
    title: 'Digital transformation acceleration',
    description: 'Amid global challenges, Greenbull accelerates its digital transformation, launching new remote investment platforms and virtual advisory services.',
    imageUrl: 'https://images.pexels.com/photos/7681926/pexels-photo-7681926.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2021',
    title: '10th anniversary & global expansion',
    description: 'Celebrating a decade of success with expansion into Asian markets and the introduction of Greenbull Global, a new international investment platform.',
    imageUrl: 'https://images.pexels.com/photos/5466459/pexels-photo-5466459.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    year: '2030',
    title: 'Future vision: Leading the financial revolution',
    description: 'Projected to become one of the top 10 investment groups globally, with revolutionary blockchain-based financial products and a commitment to carbon-negative operations.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];