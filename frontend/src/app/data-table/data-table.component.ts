import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Produto {
  codigo: number;
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number;
  avaliacao: number;
}

const DADOS_PRODUTOS: Produto[] = [
{ codigo: 1, nome: 'Smartphone X Pro', categoria: 'Celulares', preco: 3999.90, quantidade: 25, avaliacao: 4.7 },
{ codigo: 2, nome: 'Notebook Elite', categoria: 'Computadores', preco: 5999.00, quantidade: 12, avaliacao: 4.8 },
{ codigo: 3, nome: 'Tablet Lite', categoria: 'Tablets', preco: 1299.90, quantidade: 18, avaliacao: 4.2 },
{ codigo: 4, nome: 'Fone de Ouvido Sem Fio', categoria: 'Acessórios', preco: 349.90, quantidade: 32, avaliacao: 4.5 },
{ codigo: 5, nome: 'Smartwatch Pro', categoria: 'Wearables', preco: 899.90, quantidade: 15, avaliacao: 4.6 },
{ codigo: 6, nome: 'Monitor 27" 4K', categoria: 'Monitores', preco: 2199.90, quantidade: 8, avaliacao: 4.9 },
{ codigo: 7, nome: 'Teclado Mecânico', categoria: 'Periféricos', preco: 429.90, quantidade: 22, avaliacao: 4.4 },
{ codigo: 8, nome: 'Mouse Gamer', categoria: 'Periféricos', preco: 279.90, quantidade: 30, avaliacao: 4.7 },
{ codigo: 9, nome: 'Caixa de Som Bluetooth', categoria: 'Áudio', preco: 599.90, quantidade: 14, avaliacao: 4.3 },
{ codigo: 10, nome: 'HD Externo 1TB', categoria: 'Armazenamento', preco: 399.90, quantidade: 20, avaliacao: 4.5 },
{ codigo: 11, nome: 'Webcam Full HD', categoria: 'Acessórios', preco: 349.90, quantidade: 10, avaliacao: 4.1 },
{ codigo: 12, nome: 'Roteador Wi-Fi 6', categoria: 'Redes', preco: 799.90, quantidade: 7, avaliacao: 4.6 },
{ codigo: 13, nome: 'Impressora Multifuncional', categoria: 'Impressão', preco: 1299.90, quantidade: 5, avaliacao: 4.0 },
{ codigo: 14, nome: 'SSD 500GB', categoria: 'Armazenamento', preco: 499.90, quantidade: 25, avaliacao: 4.8 },
{ codigo: 15, nome: 'Carregador Portátil', categoria: 'Acessórios', preco: 199.90, quantidade: 40, avaliacao: 4.2 },
{ codigo: 16, nome: 'Câmera DSLR', categoria: 'Fotografia', preco: 3499.90, quantidade: 6, avaliacao: 4.9 },
{ codigo: 17, nome: 'Drone Profissional', categoria: 'Drones', preco: 2599.90, quantidade: 4, avaliacao: 4.7 },
{ codigo: 18, nome: 'Console de Videogame', categoria: 'Games', preco: 2899.90, quantidade: 9, avaliacao: 4.9 },
{ codigo: 19, nome: 'Controle Sem Fio', categoria: 'Games', preco: 299.90, quantidade: 15, avaliacao: 4.5 },
{ codigo: 20, nome: 'Projetor Full HD', categoria: 'Vídeo', preco: 1899.90, quantidade: 3, avaliacao: 4.4 },
{ codigo: 21, nome: 'Microfone USB', categoria: 'Áudio', preco: 499.90, quantidade: 12, avaliacao: 4.6 },
{ codigo: 22, nome: 'Hub USB-C', categoria: 'Acessórios', preco: 249.90, quantidade: 28, avaliacao: 4.3 },
{ codigo: 23, nome: 'Monitor 24" Curvo', categoria: 'Monitores', preco: 1499.90, quantidade: 11, avaliacao: 4.7 },
{ codigo: 24, nome: 'Placa de Vídeo', categoria: 'Hardware', preco: 3299.90, quantidade: 5, avaliacao: 4.9 },
{ codigo: 25, nome: 'Processador i7', categoria: 'Hardware', preco: 1899.90, quantidade: 8, avaliacao: 4.8 },
{ codigo: 26, nome: 'Memória RAM 16GB', categoria: 'Hardware', preco: 599.90, quantidade: 30, avaliacao: 4.7 },
{ codigo: 27, nome: 'Fonte de Alimentação', categoria: 'Hardware', preco: 499.90, quantidade: 14, avaliacao: 4.5 },
{ codigo: 28, nome: 'Gabinete Gamer', categoria: 'Hardware', preco: 699.90, quantidade: 9, avaliacao: 4.6 },
{ codigo: 29, nome: 'Cooler para Notebook', categoria: 'Acessórios', preco: 129.90, quantidade: 35, avaliacao: 4.1 },
{ codigo: 30, nome: 'Kit Teclado e Mouse', categoria: 'Periféricos', preco: 199.90, quantidade: 25, avaliacao: 4.3 }
];

@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})

export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'categoria', 'preco', 'quantidade', 'avaliacao'];
  dataSource = new MatTableDataSource(DADOS_PRODUTOS);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
