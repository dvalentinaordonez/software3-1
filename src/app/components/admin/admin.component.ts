import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../empresas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private articulosServicio: EmpresasService) { }
  listAdmin: any;

  ngOnInit(): void {
    this.listAdmin = this.articulosServicio.recuperarAdmin().subscribe(result => this.listAdmin = result)
  }

}
