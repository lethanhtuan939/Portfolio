import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Education',
      Orgenization: 'University of Technology and Education',
      Title: 'IT Student',
      Date: '2021 — Present',
      Description: [
        'I am the first salutatorian of 2021. During my studies, I was honored to receive a scholarship, which is a great motivation for me to continue to strive and improve in acquiring knowledge.'
      ]
    }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
