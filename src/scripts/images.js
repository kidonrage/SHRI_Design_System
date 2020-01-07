const primaryImage = `<svg class="primary" width="80px" height="64px" viewBox="0 0 80 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>placeholder</title>
  <desc>Created with Sketch.</desc>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="image-placeholder" transform="translate(-500.000000, -368.000000)" fill="#000000" fill-rule="nonzero">
          <g id="Group" transform="translate(500.000000, 368.000000)">
              <g id="placeholder">
                  <path d="M32,16 L48,16 L48,8 L56,8 L56,16 L64,16 L64,24 L72,24 L72,32 L80,32 L80,48 L72,48 L72,40 L64,40 L64,48 L56,48 L56,56 L48,56 L48,48 L32,48 L32,56 L24,56 L24,48 L16,48 L16,40 L8,40 L8,48 L0,48 L0,32 L8,32 L8,24 L16,24 L16,16 L24,16 L24,8 L32,8 L32,16 Z M24,32 L32,32 L32,24 L24,24 L24,32 Z M16,0 L24,0 L24,8 L16,8 L16,0 Z M16,56 L24,56 L24,64 L16,64 L16,56 Z M56,32 L56,24 L48,24 L48,32 L56,32 Z M64,0 L64,8 L56,8 L56,0 L64,0 Z M64,56 L64,64 L56,64 L56,56 L64,56 Z" id="Shape"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`
const inversedImage = `<svg class="inversed" width="80px" height="64px" viewBox="0 0 80 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>placeholder</title>
  <desc>Created with Sketch.</desc>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="image-placeholder" transform="translate(-620.000000, -368.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <g id="Group" transform="translate(500.000000, 368.000000)">
              <g id="placeholder" transform="translate(120.000000, 0.000000)">
                  <path d="M32,16 L48,16 L48,8 L56,8 L56,16 L64,16 L64,24 L72,24 L72,32 L80,32 L80,48 L72,48 L72,40 L64,40 L64,48 L56,48 L56,56 L48,56 L48,48 L32,48 L32,56 L24,56 L24,48 L16,48 L16,40 L8,40 L8,48 L0,48 L0,32 L8,32 L8,24 L16,24 L16,16 L24,16 L24,8 L32,8 L32,16 Z M24,32 L32,32 L32,24 L24,24 L24,32 Z M16,0 L24,0 L24,8 L16,8 L16,0 Z M16,56 L24,56 L24,64 L16,64 L16,56 Z M56,32 L56,24 L48,24 L48,32 L56,32 Z M64,0 L64,8 L56,8 L56,0 L64,0 Z M64,56 L64,64 L56,64 L56,56 L64,56 Z" id="Shape"></path>
              </g>
          </g>
      </g>
  </g>
</svg>`

function insertImages() {
  let images = document.querySelectorAll('.image');
  images.forEach((image) => {
    image.innerHTML = primaryImage + inversedImage;
  });
}

module.exports = {
  insertImages
}