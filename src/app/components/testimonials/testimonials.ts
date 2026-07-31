import { Component } from '@angular/core';

interface Review {
  name: string;
  initials: string;
  quote: string;
  timeAgo: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  protected readonly reviews: Review[] = [
    {
      name: 'Sebastian Estevez',
      initials: 'SE',
      quote: 'Se nota que saben lo que hacen. No prometen magia, pero sí trabajo serio y resultados concretos.',
      timeAgo: 'Hace 4 semanas',
    },
    {
      name: 'Mariela Groisman',
      initials: 'MG',
      quote: 'Geniosss Thiago y Jero! Gracias por su ayuda y por potenciar siempre con la mejor.',
      timeAgo: 'Hace 2 semanas',
    },
    {
      name: 'Marcos Aldazabal',
      initials: 'MA',
      quote: 'Excelente servicio personalizado de Gael, impecable seguimiento y resultados.',
      timeAgo: 'Hace 2 meses',
    },
    {
      name: 'Lucas Maciel',
      initials: 'LM',
      quote: 'Soy cliente hace ya 3 años. Me han ayudado a crecer muchísimo. Gracias muchachos!',
      timeAgo: 'Hace 7 meses',
    },
    {
      name: 'Paco Lozano',
      initials: 'PL',
      quote: 'Atención 10 de 10. Super comprometidos y proactivos. Un espectáculo y vamos por más!!',
      timeAgo: 'Hace 7 meses',
    },
    {
      name: 'Valeria Wejjman',
      initials: 'VW',
      quote: 'Me ayudaron a potenciar mi marca y aumentar mis ventas. Los super recomiendo!',
      timeAgo: 'Hace 9 meses',
    },
  ];
}
