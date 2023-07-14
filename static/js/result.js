$(function(){
    $("form").submit(function() {
        // 选择的答案
        let $choices = $("div.multisteps_form_panel>div.form_content ul>li>label.active");
        console.log($choices);
        // 遍历获取选项
        let answerScore = {
            "A": 5,
            "B": 10,
            "C": 15,
            "D": 20
        }
        let score = 0;
        $choices.each((index, choice)=>{
            // console.log(index, choice)
            let answer = $(choice).find("span:first").text();
            score += answerScore[answer]
        })
        console.log("得分：", score);
        // 跳转页面传递得分
        location.href = "result.html?score="+score;
        return false;
    });
})