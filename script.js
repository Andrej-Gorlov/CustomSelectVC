function editSelect() {
  if (document.getElementById("deleteInput") !== null) {
    let div = document.getElementById("select_custom");
    div.classList.remove("form_input_custom");

    document.getElementById("deleteInput").remove();

    document.getElementById("select-category").removeAttribute("hidden");
    document.getElementById("cuctom_opt").removeAttribute("hidden");

    let label = document.getElementById("lebel_custom");
    label.classList.remove("label_name_input");
    label.classList.add("label_name_select");

    let span = document.getElementById("span_custom");
    span.classList.remove("content_name_input");
    span.classList.add("content_name_select");

    setTimeout(deleteHidden, 300);
  }
}

function deleteHidden() {
  document.getElementById("select_custom").style.overflow = "";
}

$(".sel").each(function () {
  let reg;
  if (document.getElementById("select-category") != null) {
    reg = /form_input_custom sel/g;
  } else {
    reg = /sel/g;
  }

  $(this).children("select").css("display", "none");

  var $current = $(this);

  $(this)
    .find("option")
    .each(function (i) {
      if (i == 0) {
        $current.prepend(
          $("<div>", {
            class: $current.attr("class").replace(reg, "sel__box"),
          })
        );

        var placeholder = $(this).text();
        $current.prepend(
          $("<span>", {
            class: $current.attr("class").replace(reg, "sel__placeholder"),
            text: placeholder,
            "data-placeholder": placeholder,
          })
        );

        return;
      }

      $current.children("div").append(
        $("<span>", {
          class: $current.attr("class").replace(reg, "sel__box__options"),
          text: $(this).text(),
        })
      );
    });
});

// Toggling the `.active` state on the `.sel`.
$(".sel").click(function () {
  $(this).toggleClass("active");
});

// Toggling the `.selected` state on the options.
$(".sel__box__options").click(function () {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings(".sel__box__options").removeClass("selected");
  $(this).addClass("selected");

  var $currentSel = $(this).closest(".sel");
  $currentSel.children(".sel__placeholder").text(txt);
  $currentSel.children("select").prop("selectedIndex", index + 1);
});
