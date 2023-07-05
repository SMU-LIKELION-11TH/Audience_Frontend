function show_form_id() {
    $("#form_find_id").show();
    $("#form_find_pw").hide();
    $(".find_id_button").css("background-color", "#FFBDBD");
    $(".find_pw_button").css("background-color", "#FFE5E5");
}

function show_form_pw() {
    $("#form_find_id").hide();
    $("#form_find_pw").show();
    $(".find_id_button").css("background-color", "#FFE5E5");
    $(".find_pw_button").css("background-color", "#FFBDBD");
}