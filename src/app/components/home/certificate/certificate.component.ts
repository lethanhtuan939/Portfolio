import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  certificates = [
    {
      Title: 'Java OOP certifi cate of FPT Software',
      Organization: ['FPT Software'],
      image: '../../../../assets/images/certificates/java_oop.jpg'
    },
    {
      Title: 'IRON MAN 70.3 VietNam',
      Organization: ['IRONMAN VIETNAM'],
      image: '../../../../assets/images/certificates/ironman.jpg'
    },
  ]
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  redirect(route: string, event: any) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return
    }
    window.open(route, '_blank');
  }
}
