async function fetchAllAnimals() {
  const query = species ? `?species=${species}` : '';
  const response = await fetch(`/api/beasts${query}`);
  return await response.json();
}

async function renderAllAnimals() {
  const data = await fetchAllAnimals();
  const gridNode = document.querySelector('.image-grid');
  data.forEach(element => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML= `
      <div class="grid-image-wrapper">
        <div style="background-image: url(${element.image})" class="grid-image">
          <div class="description">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
          </div>
        </div>
      </div>
      
    `;
    gridNode.appendChild(wrapper);
  });
}

window.onload = renderAllAnimals;