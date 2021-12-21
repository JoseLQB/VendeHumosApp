import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-vendehumos';
  listaVendehumos: any = [
    {
      id: 1,
      nombre: 'Jossef Ajram',
      descripcion: '',
      categorias: ['Trading'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: 'https://www.lavanguardia.com/files/image_449_220/uploads/2017/02/13/5fa3caba8943e.jpeg',
      votadoPor: [1, 2],
      usuarioId: 1
    },
    {
      id: 2,
      nombre: 'Roberto Gamboa',
      descripcion: '',
      categorias: ['No se'],
      fechaAlta: new Date(2020, 2, 16),
      urlImagen: 'https://s03.s3c.es/imag/_v0/770x420/f/5/3/600x400_ROBERTO-defini.png',
      votadoPor: [3],
      usuarioId: 2
    },
    {
      id: 3,
      nomre: 'Willirex',
      descripcion: '',
      categorias: ['NFTs'],
      fechaAlta: new Date(2020, 4, 26),
      urlImagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/13/15630045096883.jpg',
      votadoPor: [2],
      usuarioId: 3
    }
  ]
}
