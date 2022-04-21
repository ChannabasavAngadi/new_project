const quest = [
    {
        question: "Q1.what is the capital of india",
        a: 'Karnataka',
        b: 'New Delhi',
        c: 'Chennai',
        d: 'Kolkata',
        ans: "ans2"
    },
    // {
    //     question:"what full form of xml",
    //     a:'xml',
    //     b:'xml markup',
    //     c:'xmal no',
    //     d:'xml hyper',
    //     ans:"ans2"
    //     }
];





const question = document.getElementById("question");
const inputtext = document.getElementById("leb");
const inputtext1 = document.getElementById("leb1");
const inputtext2 = document.getElementById("leb2");
const inputtext3 = document.getElementById("leb3");
const submit = document.getElementById("submit");
const showscore = document.getElementById("showscore");


const answers = document.querySelectorAll('.answer')

let questionCount = 0;
let score = 0;

function loadquestion() {
    const questList = quest[questionCount]
    question.innerText = questList.question
    inputtext.innerText = questList.a
    inputtext1.innerText = questList.b
    inputtext2.innerText = questList.c
    inputtext3.innerText = questList.d
}

loadquestion()



function getanswer() {

    let answer;
    answers.forEach((currentanswer) => {
        if (currentanswer.checked) {
            answer = currentanswer.id;
        }
    });
    return answer;
}

submit.addEventListener('click', () => {
    const check = getanswer();
    console.log(check)

    if (check == quest[questionCount].ans) {
        score++;
    }
    questionCount++

    function deselect() {

        answers.forEach((currentanswer) => currentanswer.checked = false)


    }
    deselect()

    // if(questionCount<quest.length)
    // {
    //     loadquestion()
    // }
    // else{

    // showscore.innerHTML=`
    // <h3>you scored ${score}/${quest.length}</h3>
    // <button class='btn'onclick="location.reload()">submit</button>
    // `;
    // showscore.classList
    // }

    let len = questionCount < quest.length
    swal({
        title: "Are You Sure Want To Submit?",
        text: "Once you submit you can't resubmit",
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
        .then((len) => {
            if (len) {
                window.location = "win.html";
                
                if (score == 0) {
                    window.location = "loss.html";


                }


                showscore.classList
            } else {
                location.reload()
                loadquestion();

            }
        });

})

