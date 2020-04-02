import { Component, OnInit } from '@angular/core';
import { Typography } from '../../../../models/tabs-content/typography.model';
@Component({
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class TypographyPageComponent implements OnInit {

  fontStyles: Typography[] = [
    {id: 1, type: 'Header 1', style: '2rem, Bold, #3a3a3a', textColor: '#3a3a3a',
      usage: 'Page Headers', display: true, fontsize: '2rem', fontweight: '600',
      order: 1, area: 'typography', etc: ''
    },
    {id: 5, type: 'Header 1 Light', style: '2rem, Light, #3a3a3a', textColor: '#3a3a3a',
      usage: 'Page Headers', display: true, fontsize: '2rem', fontweight: '100',
      order: 5, area: 'typography', etc: ''
    },
    {id: 2, type: 'Header 2', style: '1.75rem, Regular, #3a3a3a', textColor: '#3a3a3a',
      usage: 'Section Headers', display: true, fontsize: '1.75rem', fontweight: '500',
      order: 2, area: 'typography', etc: ''
    },
    {id: 3, type: 'Header 3', style: '1.55rem, Regular, #3a3a3a', textColor: '#3a3a3a',
      usage: 'Sub Section Header', display: true, fontsize: '1.55rem', fontweight: '500',
      order: 3, area: 'typography', etc: ''
    },
    {id: 4, type: 'Body Text', style: '14px, Normal, #3a3a3a', textColor: '#3a3a3a',
        usage: 'Paragraphs, input text, read-only fields', display: true, fontsize: '14px', fontweight: '400',
        order: 4, area: 'typography', etc: ''
    },
    {id: 6, type: 'Label', style: '13px, 500, #3a3a3a', textColor: '#3a3a3a',
      usage: 'Form Labels', display: true, fontsize: '13px', fontweight: '500',
      order: 6, area: 'typography', etc: ''
    },
    {id: 6, type: 'External Link', style: '13px, 400, #0085ca', textColor: '#0085ca',
      usage: 'Hyperlinks', display: true, fontsize: '13px', fontweight: '400',
      order: 6, area: 'typography', etc: '', textDecoration: 'underline'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
