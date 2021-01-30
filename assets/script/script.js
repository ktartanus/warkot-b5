
$(function() {

  var modal_html = $('<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <!-- <div class="modal-dialog modal-dialog-centered modal-xl modal-lg modal-fullscreen-md-down"> --> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <img src="" class="imagepreview" style="width: 100%;" > </div> </div> </div> </div>');

  $(modal_html).appendTo('body');



		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');
		});
});
