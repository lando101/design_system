import { Injectable } from '@angular/core';
import { Topic } from '../models/topics.model';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topics: Topic[] = [
    {id: 'foundation', displayName: 'Foundation',
      desc: 'Learn more about the principles of the EPAS Design System',
      color: '#005581', icon: 'fas fa-landmark', topicClass: 'foundation-background',
      circleClass: 'foundation-circle-background', link: '/authenticated/foundation'
    },
    {id: 'design', displayName: 'Design',
      desc: 'Learn more about design elements which create the EPAS brand',
      color: '#005581', icon: 'fas fa-pencil-ruler', topicClass: 'design-background',
      circleClass: 'design-circle-background', link: '/authenticated/design'
    },
    {id: 'components', displayName: 'UX/UX Components',
      desc: 'Learn more about available reusable EPAS UI/UX components',
      color: '#005581', icon: 'fas fa-puzzle-piece', topicClass: 'component-background',
      circleClass: 'component-circle-background', link: '/authenticated/components'
    },
    {id: 'assets', displayName: 'Assets',
      desc: 'Find available EPAS assets such as .png, img, PowerPoints, documentation and more',
      color: '#005581', icon: 'fas fa-file-download', topicClass: 'asset-background',
      circleClass: 'asset-circle-background',  link: '/authenticated/assets'
    }
];

  constructor() { }

  getTopics() {
    return this.topics;
  }
}
