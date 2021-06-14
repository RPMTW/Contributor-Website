$(function () {
    $(".lodding").show();
    $.getJSON('https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/opt.json', function (datas) {
        var d = [];
        for (i in datas.userName) {
            if (i != "0") {
                var z = {};
                z["userName"] = datas.userName[i];
                z["word"] = datas.word[i];
                z["Voted"] = datas.Voted[i];
                z["rank"] = i;
                d.push(z);
            }
        }

        $(".lodding").hide();
        for (data of d) {
            var html = '<div class="user"><div class="card-body"><h4 class="user-name"><span class="txt-rank">' + data.rank + '. </span>' + data.userName + '</h4><hr /><p class="card-text">翻譯字數: ' + data.word + '</p><p class="card-text">投票次數: ' + data.Voted + '</p></div></div > ';
            $("#react-root").append(html);
        };
    });
});