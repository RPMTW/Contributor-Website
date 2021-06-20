$(function () {
    $(".lodding").show();
    $.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json", function (datas) {
        $(".lodding").hide();
        for (data_ in datas.data) {
            if (data_ >= 10) return; 
            data = datas.data[data_]
            var html = `<div class="user">
                <img class="user-icon" src="${data.user.avatarUrl}">
                <div class="card-body">
                    <div class="hover">
                        <a href="https://crowdin.com/profile/${data.user.username}"><h4 class="user-name">
                        <span class="txt-rank">${parseInt(data_) + 1}. 
                        </span> ${data.user.fullName}</h4></a>
                    </div>

                    <p class="card-text">翻譯字數: ${data.translated}</p>
                    <p class="card-text">投票次數: ${data.voted}</p>
                    <p class="card-text">翻譯獲得稱讚數: ${data.winning}</p>
                </div>
            </div > `;
            $("#react-root").append(html);
        };
    }).fail(error => {
        $(".lodding").html("<h1>錯誤，請稍後在試</h1>");
    });
});
