import { Component, Input, OnInit } from '@angular/core';
import { Redes } from 'src/app/services/interface/Redes';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements OnInit {

  @Input() link!: Redes;

  constructor() { }

  ngOnInit(): void {
  }

}
