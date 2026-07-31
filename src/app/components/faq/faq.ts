import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly items: FaqItem[] = [
    {
      question: '¿El primer mes es realmente gratis?',
      answer:
        'Sí. Durante el primer mes están bonificados únicamente los honorarios de Vamos Bien. La inversión publicitaria se abona desde el primer día directamente a Meta y no está incluida en la bonificación.',
    },
    {
      question: '¿Cuándo hago mi primer pago?',
      answer:
        'Tu primer pago a Vamos Bien se realiza recién al comenzar el segundo mes. Antes de eso, trabajamos normalmente en tu inmobiliaria sin cobrarte honorarios.',
    },
    {
      question: '¿Por qué hay un mínimo de 3 meses?',
      answer:
        'El algoritmo de Meta necesita tiempo para aprender qué perfil de comprador o inquilino convierte mejor para tus propiedades. Primer mes: base. Segundo: resultados sólidos. Tercero: escalamos lo que funciona.',
    },
    {
      question: '¿El presupuesto de los anuncios está incluido?',
      answer: 'No. Nuestro fee es por gestión y estrategia. Lo que le pagás a Meta va directo a tu cuenta. Transparencia total.',
    },
    {
      question: '¿Pueden anunciar varias propiedades a la vez?',
      answer:
        'Sí. Armamos campañas por propiedad, por zona o por tipo de operación (venta o alquiler), segmentadas para llegar al comprador o inquilino que estás buscando.',
    },
    {
      question: '¿Cómo evitan que se llene de consultas de gente que no busca en serio?',
      answer:
        'Con segmentación precisa y, si sumás el Bot IA, preguntas automáticas de presupuesto, zona y tipo de propiedad que filtran curiosos antes de que lleguen a tu equipo.',
    },
  ];

  private readonly openIndexSignal = signal<number | null>(0);
  readonly openIndex = this.openIndexSignal.asReadonly();

  toggle(index: number): void {
    this.openIndexSignal.set(this.openIndexSignal() === index ? null : index);
  }
}
