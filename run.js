const fs = require('fs');
let html = fs.readFileSync('catering.html', 'utf8');

const galleryStart = html.indexOf('    <!-- GALLERY GRID -->');
const galleryEnd = html.indexOf('    <!-- CTA -->');

if (galleryStart !== -1 && galleryEnd !== -1) {
  const before = html.substring(0, galleryStart);
  const after = html.substring(galleryEnd);

  // Read directory to get available images dynamically
  const allFiles = fs.readdirSync('assets/images').filter(f => f.endsWith('.jpeg'));

  // Sort them into burger files and other files
  const burgerFiles = allFiles.filter(f => f.startsWith('b')).sort((a, b) => parseInt(a.replace('b', '')) - parseInt(b.replace('b', '')));
  const otherFiles = allFiles.filter(f => !f.startsWith('b')).sort((a, b) => parseInt(a) - parseInt(b));

  // Combine them in order (b files first, then the rest)
  const sortedFiles = [...burgerFiles, ...otherFiles];

  let newGallery = `    <!-- GALLERY GRID -->
    <div class="catering-gallery">
      <div class="container">
        <div class="catering-gallery-header reveal">
          <h2>CATERING <span class="text-primary italic">MENU</span></h2>
          <p>A visual journey through our most successful corporate events and gourmet presentations.</p>
        </div>
        
        <div class="gallery-grid reveal reveal-delay-1" id="mainCateringGrid" style="margin-bottom: 1.5rem;">\n`;

  // First 16 images
  for (let i = 0; i < 16 && i < sortedFiles.length; i++) {
    newGallery += `          <div class="gallery-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <img src="assets/images/${sortedFiles[i]}" alt="" loading="lazy">
          </div>\n`;
  }

  newGallery += `        </div>

        <!-- Hidden Grid for remaining images -->
        <div id="moreCategoriesWrapper" class="gallery-grid" style="display: none; opacity: 0; transition: opacity 0.5s ease; margin-bottom: 2rem;">\n`;

  // Remaining images
  for (let i = 16; i < sortedFiles.length; i++) {
    newGallery += `          <div class="gallery-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <img src="assets/images/${sortedFiles[i]}" alt="" loading="lazy">
          </div>\n`;
  }

  newGallery += `        </div> <!-- End of moreCategoriesWrapper -->

        <!-- View More Button (Positioned at the very end so it naturally pushes down) -->
        <div class="text-center reveal" id="btnContainer" style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
          <button id="viewMoreCateringBtn" class="btn btn-primary btn-lg" style="padding: 1.2rem 3.5rem; font-size: 1.15rem; border-radius: 50px; cursor: pointer; text-transform: uppercase; font-weight: 800; letter-spacing: 1.5px; transition: all 0.3s ease; display: inline-block; box-shadow: 0 10px 20px -5px rgba(239, 68, 68, 0.4);">
            <i class="fas fa-plus" style="margin-right: 8px;"></i> View Full Menu
          </button>
        </div>

      </div>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('viewMoreCateringBtn');
        const moreGrid = document.getElementById('moreCategoriesWrapper');
        
        if(btn && moreGrid) {
          btn.addEventListener('click', function() {
            if(moreGrid.style.display === 'none') {
              moreGrid.style.display = 'grid';
              setTimeout(() => { 
                moreGrid.style.opacity = '1'; 
              }, 50);
              
              // Just change text, no sticky positioning needed
              btn.innerHTML = '<i class="fas fa-minus" style="margin-right: 8px;"></i> View Less';
              
            } else {
              moreGrid.style.opacity = '0';
              setTimeout(() => { moreGrid.style.display = 'none'; }, 500);
              
              // Revert text
              btn.innerHTML = '<i class="fas fa-plus" style="margin-right: 8px;"></i> View Full Menu';
              
              // Scroll back up to the gallery so user is not lost
              const y = document.querySelector('.catering-gallery').getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({top: y, behavior: 'smooth'});
            }
          });
        }
      });
    </script>\n\n`;

  fs.writeFileSync('catering.html', before + newGallery + after);
}
