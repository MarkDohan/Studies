function changeBg(){
    var header = document.getElementById('scrolling')
    var scrollValue = window.scrollY;
    if(scrollValue < 15){
      header.classList.remove('bgColor');
    }else{
      header.classList.add('bgColor');
    }
  }
  
  window.addEventListener('scroll', changeBg)