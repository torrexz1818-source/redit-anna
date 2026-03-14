const mockPosts = [
  {
    id: "1",
    title: "¿Qué proveedor recomiendan para empaques personalizados?",
    content:
      "Estoy buscando un proveedor confiable para empaques personalizados en tirajes medianos. Me interesa buena calidad, tiempos razonables y atención constante durante el proceso.",
    category: "recommendation",
    author: {
      name: "María Fernández",
      company: "PackNova",
      position: "Compradora Senior",
    },
    likes: 12,
    commentsCount: 4,
    createdAt: "2026-03-10T10:30:00",
  },
  {
    id: "2",
    title: "Tip para negociar mejores tiempos de entrega",
    content:
      "Algo que me ha funcionado bastante es pedir dos escenarios desde el inicio: entrega estándar y entrega optimizada. Eso ayuda a comparar costos y tener más margen de negociación.",
    category: "tip",
    author: {
      name: "Luis Ortega",
      company: "Andina Supply",
      position: "Jefe de Compras",
    },
    likes: 20,
    commentsCount: 7,
    createdAt: "2026-03-09T14:15:00",
  },
  {
    id: "3",
    title: "Mi experiencia trabajando con proveedores internacionales",
    content:
      "En nuestro caso, trabajar con proveedores internacionales mejoró costos, pero exigió muchísimo más control documental y validaciones previas en logística y pagos.",
    category: "experience",
    author: {
      name: "Camila Rojas",
      company: "Global Trade Solutions",
      position: "Coordinadora de Operaciones",
    },
    likes: 8,
    commentsCount: 2,
    createdAt: "2026-03-08T09:00:00",
  },
  {
    id: "4",
    title: "¿Cómo evalúan la calidad antes de cerrar contrato?",
    content:
      "Quiero mejorar nuestro proceso de selección de proveedores. Actualmente revisamos muestras, referencias y tiempos, pero siento que falta una metodología más sólida.",
    category: "question",
    author: {
      name: "Diego Salvatierra",
      company: "Industrias Delta",
      position: "Analista de Abastecimiento",
    },
    likes: 15,
    commentsCount: 6,
    createdAt: "2026-03-11T08:45:00",
  },
  {
    id: "5",
    title: "Recomendación de software para gestionar cotizaciones",
    content:
      "Si están empezando, recomiendo usar una herramienta simple que permita comparar propuestas, dejar comentarios internos y exportar reportes rápidamente.",
    category: "recommendation",
    author: {
      name: "Paola Núñez",
      company: "ProcureTech",
      position: "Consultora",
    },
    likes: 9,
    commentsCount: 3,
    createdAt: "2026-03-07T16:20:00",
  },
  {
    id: "6",
    title: "Error común al evaluar solo el precio más bajo",
    content:
      "Muchas veces el precio más bajo termina siendo el más costoso cuando aparecen incumplimientos, reprocesos o costos logísticos no contemplados.",
    category: "tip",
    author: {
      name: "Javier Molina",
      company: "Suministros 360",
      position: "Gerente Comercial",
    },
    likes: 18,
    commentsCount: 5,
    createdAt: "2026-03-06T11:10:00",
  },
];

export default mockPosts;