$(function () {
    $(".lodding").show();
    $.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/opt.json", function (datas) {
        $(".lodding").hide();
        for (data_ in datas.data) {
            data = datas.data[data_]
            var html = `<div class="user">
                <a href="https://crowdin.com/profile/${data.user.username}">
                <img class="user-icon" src="${data.user.avatarUrl}">
                <a>
                <div class="card-body">
                    <h4 class="user-name"><span class="txt-rank">${parseInt(data_) + 1}.</span> ${data.user.fullName}</h4>
                    <hr>
                    <p class="card-text">翻譯字數: ${data.translated}</p>
                    <p class="card-text">核准翻譯次數: ${data.approved}</p>
                    <p class="card-text">投票次數: ${data.voted}</p>
                    <p class="card-text">加入專案時間: ${data.user.joined}</p>
                    <p class="card-text">翻譯獲得稱讚數: ${data.winning}</p>
                </div>
            </div > `;
            $("#react-root").append(html);
        };
    }).fail(error => {
        $(".lodding").html("<h1>錯誤，請稍後在試</h1>");
    });
});