import { FluidObject } from 'gatsby-image';

import ICategory from 'src/types/category';

interface IArticleSummary {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: ICategory;
  image: {
    fluid?: FluidObject | FluidObject[];
  };
  createdAt: string;
}

export default IArticleSummary;
