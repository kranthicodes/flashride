$(document).ready(function() {
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    $("#submit").attr("disabled", true);

    var data = {
      subject: $("#subject").val(),
      from: $("#from").val(),
      text: $("#text").val()
    };
    console.log(data);

    $.post("/sendmail", data, function() {
      var alertEmail = $("<div></div>")
        .text("Thankyou for writing to us. We'll get back to you soon.")
        .addClass("alert alert-success text-center");
      $(".contact-div").append(alertEmail);

      $("#subject").val("");
      $("#from").val("");
      $("#text").val("");
    });

    setTimeout(function() {
      $(".alert-success").hide();
    }, 10000);
  });

  $("#subscribe-form").on("submit", function(e) {
    e.preventDefault();

    var data = { email: $("#email").val() };

    $.post("/subscribemail", data, function() {
      var alertEmail = $("<div></div>")
        .text("You've been Subscribed successfully")
        .addClass("alert alert-success text-center");
      $("#email-form").append(alertEmail);

      $("#email").val("");
    });

    setTimeout(function() {
      $(".alert-success").hide();
    }, 10000);
  });
});
