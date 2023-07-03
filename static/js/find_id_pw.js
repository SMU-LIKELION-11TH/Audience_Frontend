function show_form_id() {
    $("#form_find_id").show();
    $("#form_find_pw").hide();
    $("#form_find_id").css("background-color", "#FFBDBD");
    $("#find_pwform_find_pw_button").css("background-color", "#FFE5E5");
}

function show_form_pw() {
    $("#form_find_id").hide();
    $("#form_find_pw").show();
    $("#form_find_id").css("background-color", "#FFE5E5");
    $("#form_find_pw").css("background-color", "#FFBDBD");
}