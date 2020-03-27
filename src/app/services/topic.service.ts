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
      circleClass: 'foundation-circle-background', link: '/foundation'
    },
    {id: 'design', displayName: 'Design',
      desc: 'Learn more about design elements which create the EPAS brand',
      color: '#005581', icon: 'fas fa-pencil-ruler', topicClass: 'design-background',
      circleClass: 'design-circle-background', link: '/design'
    },
    {id: 'components', displayName: 'UI/UX Components',
      desc: 'Learn more about available reusable EPAS UI/UX components',
      color: '#005581', icon: 'fas fa-puzzle-piece', topicClass: 'component-background',
      circleClass: 'component-circle-background', link: '/components'
    },
    {id: 'accessibility', displayName: 'Accessibility',
      desc: 'Learn more about 508 compliance and test your app against compliance standards',
      color: '#005581', icon: 'fas fa-universal-access', topicClass: 'asset-background',
      circleClass: 'asset-circle-background',  link: '/accessibility'
    }
];

  constructor() { }

  getTopics() {
    return this.topics;
  }
}
