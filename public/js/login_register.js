$("document").ready(function() {
  $("#login-form").on("submit", function(event) {
    $(this)
      .parent()
      .find("span")
      .hide();

    event.preventDefault();

    var form = $(this);

    var email = $("#login-email")
      .val()
      .trim();

    var password = $("#login-password")
      .val()
      .trim();

    console.log(email, password);

    if (email !== "" && password !== "") {
      $.ajax({
        url: "/login",
        method: "POST",
        data: { email: email, password: password },
        success: function(response) {
          $("span").text("");
          if (response.status == 401) {
            $("<span/>")
              .text(response.message)
              .attr("id", "login-error")
              .appendTo($("#login-form"));
          } else {
            location.href = "/dashboard";
          }

          //$('#SuccessMsg').html(msg);
        },
        error: function(error) {
          alert("Error");
          console.log(error);
        }
      });
    }
  });
});

$("#signup-form").on("submit", function(event) {
  $(this)
    .parent()
    .find("p")
    .hide();
  event.preventDefault();

  var form = $(this);

  var name = $("#signup-name")
    .val()
    .trim();

  var email = $("#signup-email")
    .val()
    .trim();

  var password = $("#signup-password")
    .val()
    .trim();

  var phonenumber = $("#signup-phonenumber")
    .val()
    .trim();

  console.log(name, email, password, phonenumber);

  $.ajax({
    url: "/signup",
    method: "POST",
    data: {
      name: name,
      email: email,
      password: password,
      phonenumber: phonenumber
    },
    success: function(response) {
      // $("span").text("");
      console.log(response);
      if (!response.status) {
        $("<p/>")
          .text(response.data.message)
          .attr("id", "login-error")
          .appendTo($("#signup-form"));
      } else {
        location.href = "/dashboard";
      }
      //$('#SuccessMsg').html(msg);
    }
  });
});
