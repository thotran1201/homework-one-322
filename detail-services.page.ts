import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-detail-services',
  templateUrl: './detail-services.page.html',
  styleUrls: ['./detail-services.page.scss'],
})
export class DetailServicesPage implements OnInit {

  public card = {};

  constructor(
    private route: ActivatedRoute, 
    private detailService: DetailService
    ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.detailService.getCard(id);
  }

}
