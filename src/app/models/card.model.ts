import {Option} from './option.model';


export interface Card {
  id: string;
  title: string;
  icon?: string;
  color?: string;
  options?: Option[];
}
