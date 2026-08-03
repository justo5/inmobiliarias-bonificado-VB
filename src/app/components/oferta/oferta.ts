import { Component } from '@angular/core';
import { FadeIn } from '../../directives/fade-in/fade-in';

@Component({
  selector: 'app-oferta',
  imports: [FadeIn],
  templateUrl: './oferta.html',
  styleUrl: './oferta.css',
})
export class Oferta {
  protected readonly included: string[] = [
    'Analizamos tu inmobiliaria',
    'Definimos un foco comercial: zonas y tipo de propiedad',
    'Creamos tu Plan del Mes',
    'Configuramos o revisamos la cuenta publicitaria',
    'Ponemos en marcha las campañas',
    'Comenzamos a medir y optimizar',
    'Analizamos la calidad de las consultas',
    'Revisamos el proceso comercial por WhatsApp',
  ];
}
