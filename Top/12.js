$(function () {
    $(".lodding").show();
    $.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json", function (datas) {
        $(".lodding").hide();
        for (data_ in datas.data) {
            if (data_ >= 12) return; 
            data = datas.data[data_]
            var html = `<div class="user">
                <div class="card-body">
                    <div class="hover">
                        <a href="https://crowdin.com/profile/${data.user.username}"><h4 class="user-name">
                        <img class="user-icon" src="${data.user.avatarUrl}">
                        </span> ${data.user.fullName}</h4></a>
                    </div>
                </div>
            </div > `;
            $("#react-root").append(html);
        };
    }).fail(error => {
        $(".lodding").html("<h1>錯誤，請稍後在試</h1>");
    });
});
