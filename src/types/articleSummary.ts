import { FluidObject } from 'gatsby-image';

import ITag from 'src/types/tag';

interface IArticleSummary {
  id: string;
  title: string;
  description: string;
  slug: string;
  tags: ITag[];
  image: {
    fluid?: FluidObject | FluidObject[];
  };
  thumbnail: {
    fluid?: FluidObject | FluidObject[];
  };
  createdAt: string;
}

export default IArticleSummary;
