const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.card');

const imageView = document.querySelector('.image-view');
const imageBox = document.querySelector('.image-box');
const imagePlace = document.querySelector('.image-place')

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const closeBtn = document.querySelector('.close-btn');

let currentImageIndex = 0;



imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})

zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIndex = index + 1;
        currentImageDisplay(currentImageIndex);
    })
})


function currentImageDisplay(position){
    imagePlace.style.background = `url(../content/photographie/photo-couleur/photo${currentImageIndex}.jpg) center/contain no-repeat`;
}


closeBtn.addEventListener('click', function(){
    imageView.style.display = 'none';
    imageBox.style.display = 'none';
})


prevBtn.addEventListener('click', function(){
    currentImageIndex--;
    if(currentImageIndex === 0){
        currentImageIndex = allImages.length;
    }
    currentImageDisplay(currentImageIndex)
})

nextBtn.addEventListener('click', function(){
    currentImageIndex++;
    if(currentImageIndex === allImages.length + 1){
        currentImageIndex = 1;
    }
    currentImageDisplay(currentImageIndex)
})