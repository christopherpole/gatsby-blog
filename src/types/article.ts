import { FluidObject } from 'gatsby-image';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';

interface IArticle {
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
  body: {
    json: ContentfulDocument;
  };
}

export default IArticle;
