const filterItem = document.querySelector('.contents');
const filterImage = document.querySelectorAll('.image');

window.onload = ()=>{
  filterItem.onclick = (selectedContent)=>{

    if(selectedContent.target.classList.contains('content')){

      filterItem.querySelector('.active').classList.remove('active');
      selectedContent.target.classList.add('active');
      
      let filterName = selectedContent.target.getAttribute("data-name");

      filterImage.forEach((image)=>{
        let filterImages = image.getAttribute("data-name");
        if((filterImages == filterName) || filterName == "tout"){
          image.classList.remove('hide');
          image.classList.add('show');
        }else {
          image.classList.add('hide')
          image.classList.remove('show')
        }
      });
    }
  }

  for (let index = 0; index < filterImage.length; index++){
    filterImage[index].setAttribute('onclick', "preview(this)");
  }
}


const previewBox = document.querySelector('.preview-box');
previewImg = previewBox.querySelector('img');
categorieName = previewBox.querySelector('.title p');
closeIcon = previewBox.querySelector('.icon');
shadow = document.querySelector('.shadow');

function preview(element){
  let selectedPreviewImage = element.querySelector('img').src;
  let selectedCategorieImage = element.getAttribute("data-name");

  categorieName.textContent = selectedCategorieImage;
  previewImg.src = selectedPreviewImage;

  previewBox.classList.add('show');
  shadow.classList.add('show');
  closeIcon.onclick = ()=>{
    previewBox.classList.remove('show');
    shadow.classList.remove('show');
  }
}