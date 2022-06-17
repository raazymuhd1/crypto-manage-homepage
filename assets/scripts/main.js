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


// provide footer data
