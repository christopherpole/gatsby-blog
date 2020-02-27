import { FluidObject } from 'gatsby-image';

interface IArticleSummary {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  image: {
    fluid?: FluidObject | FluidObject[];
  };
  createdAt: string;
}

export default IArticleSummary;
