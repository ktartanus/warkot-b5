$(function() {

  var modal_gallery = $('<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <!-- <div class="modal-dialog modal-dialog-centered modal-xl modal-lg modal-fullscreen-md-down"> --> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-inner"> </div> <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </a> </div> </div> </div> </div> </div> ');

  $(modal_gallery).appendTo('body');



  $(".pop").each(function() {
    var imgSrc = $(this).find('img').attr('src');
    var carouselElem = '<div class="carousel-item" id="modal-image-nr-' + getImgeSrcNumber(imgSrc) + '">' +
      '<img src="' + imgSrc + '" class="d-block w-100" alt="Przykro nam, nie udało się pobrać obrazka.">' +
      '</div>';
    $(carouselElem).appendTo('.carousel-inner');
  });

  function getImgeSrcNumber(imageSrc){
    var splittedTab = imageSrc.split('.');
    var imageSrc = splittedTab[splittedTab.length -2 ];
    var splittedSrcTab = imageSrc.split('_');
    var imgNumber = splittedSrcTab[splittedSrcTab.length -1 ];
    return imgNumber;
  }


  $('.pop').on('click', function() {
    if ($(window).width() >= 768) {
      var clickedImgSrc = $(this).find('img').attr('src');
      var clickedImgNumber = getImgeSrcNumber(clickedImgSrc);

      $(".carousel-item").each(function() {
         $(this).removeClass("active");
      });
      $('#modal-image-nr-' + clickedImgNumber).addClass("active");
      $('#imagemodal').modal('show');
    }
  });
});
