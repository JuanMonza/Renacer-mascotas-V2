// Genera dinámicamente las tarjetas del blog con imágenes y textos
const blogPosts = [
  {
    img: 'fotos/1.jpg',
    alt: 'Consejos de alimentación para mascotas',
    title: 'Tips de Alimentación',
    text: 'Cómo elegir el mejor alimento para tu mascota.',
    link: 'consejos.html'
  },
  {
    img: 'fotos/1-4.jpg',
    alt: 'Guía para bañar a un perro en casa',
    title: 'Baño en casa',
    text: 'Guía práctica para bañar a tu perro.',
    link: 'consejos.html'
  },
  {
    img: 'fotos/3.jpg',
    alt: 'Mascota feliz',
    title: 'Juegos y Enriquecimiento',
    text: 'Ideas para mantener a tu mascota activa y feliz.',
    link: 'consejos.html'
  }
];

const blogCards = document.getElementById('blog-cards');
if (blogCards) {
  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card blog-card reveal';
    card.tabIndex = 0;
    card.innerHTML = `
      <a href="${post.link}">
        <img src="${post.img}" alt="${post.alt}" class="plan-image" />
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </a>
    `;
    blogCards.appendChild(card);
  });
}
