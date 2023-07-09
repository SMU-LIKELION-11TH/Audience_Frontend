function changeIdSlice_old(old_id) {
    var element = document.getElementById(old_id);
    var slicedId ="new" + element.id.slice(3);
    element.id = slicedId;
    // console.log("New ID:", element.id);
}
function changeIdSlice_new(old_id) {
    var element = document.getElementById(old_id);
    var slicedId ="old" + element.id.slice(3);
    element.id = slicedId;
    // console.log("New ID:", element.id);
}


// 선택되기 전에 연한색의 박스의 id는 "old_label_xx" / "old_aca_label_xx"
// 클릭을 통해 선택된 진한색의 박스의 id는 "new_label_xx" / "new_aca_label_xx"
function button(old_id) {
    if (old_id.slice(0, 1) == "o") {
        var label_id = document.getElementById(old_id);
        $(label_id).css("background-color", "#FFBDBD");

        changeIdSlice_old(old_id);
    }
    else if (old_id.slice(0,1) == "n") {
        var label_id = document.getElementById(old_id);
        $(label_id).css("background-color", "#FFE5E5");

        changeIdSlice_new(old_id);
    }
}


// // 첨부한 파일 제목 보기
// var input_file = document.getElementById("input_file");
// var show_filename = document.getElementById("filename");

// input_file.addEventListener("change", function(event) {
//     var file = event.target.files[0];
//     if (file){
//         show_filename.textContent = file.name;
//     }
// });

function display_filename(input) {
    var file = input.files[0];
    var filename = document.getElementById("filename");
    if (file) {
        filename.textContent = file.name;
    }
}