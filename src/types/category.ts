import { Item } from './item';

export interface Category {
  id: string;
  title: string;
  items: Item[];
}
