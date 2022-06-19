// create and display new img element
const insertImages = () => {
    const companiesImages = document.querySelector('.companies-images');
    const rootDir = 'assets/images/main/companies'

    const sources = [`${rootDir}/monday.png`, `${rootDir}/morpheus.png`, `${rootDir}/oracle.png`, `${rootDir}/protone.png`, `${rootDir}/samsung.png`, `${rootDir}/segment.png`, `${rootDir}/open-zeppelin.png` ]

    for(let src of sources) {
      const img = document.createElement("img");
      
      if(src) {
          img.src = src;
        }
        
        companiesImages.appendChild(img)
    }

}

insertImages()


// show / hide navbar

const manipulateNavbar = () => {
    const navbar = document.querySelector('.nav');
    const closeNav = document.querySelector('.close-nav');
    const drawer = document.querySelector('.drawer');
    
    drawer.addEventListener('click', () => {
        navbar.style.visibility = "visible"
    })
    
    closeNav.addEventListener('click', () => {
        navbar.style.visibility = "hidden";
    })
    
    // change navbar bg when scrolling
    
    window.addEventListener("scroll", () => {
        const scrollHeight = navbar.offsetTop;
        
        if(scrollHeight >= 200) {
            navbar.style.backgroundColor = "#3734A9"
        }
    })
}

manipulateNavbar()