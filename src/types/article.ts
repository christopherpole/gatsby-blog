import { FluidObject } from 'gatsby-image';

interface IArticle {
  title: string;
  description: string;
  image: {
    fluid?: FluidObject | FluidObject[];
  };
}

export default IArticle;
