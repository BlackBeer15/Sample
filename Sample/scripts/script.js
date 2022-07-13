$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "scripts/mail.php",
			data: th.serialize()
		}).done(function() {
			Swal.fire(
			  'Заявка успешно отправлена!',
			  'Ожидайте звонка для подтверждения вашей записи :)',
			  'success'
			);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});