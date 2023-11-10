const form = document.querySelector('form');
const titleInput = document.getElementById('post-title');
const contentInput = document.getElementById('post-content');
const imageInput = document.getElementById('post-image');
const videoInput = document.getElementById('post-video');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', titleInput.value);
  formData.append('content', contentInput.value);
  formData.append('image', imageInput.files[0]);
  formData.append('video', videoInput.value);
  console.log(formData); 
  form.reset(); 
});