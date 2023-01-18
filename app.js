const quiz =[
    {
    question:'次の血液型の中で日本人に多い血液型はどれか',
    answers:[
        'AB型',
        'A型RH-',
        'B型RH+',
        'O型'
    ],
    correct:'O型'
},{
    question:'借金を返せず自己破産の手続きをした時に差し押さえ対象にならない物はどれか',
    answers:[
        '銀行預金100万円',
        '新車のプリウス',
        '積立NISAで購入した株式',
        'iDecoで購入した株式'
    ],
    correct:'iDecoで購入した株式'
},{
    question:'日本人に一番人気のパスワードはどれか',
    answers:[
        '000000',
        '123456',
        '1qaz2wsx',
        'password'
    ],
    correct:'123456'
}

]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button =document.getElementsByTagName('button');
let buttonLength =$button.length;
//クイズの問題文定義
const setupQuiz = () =>{
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
}

}

setupQuiz();

const clickHandle = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score ++;
    }else{
        window.alert('不正解');
    }

    quizIndex++;
    if(quizIndex<quizLength){
setupQuiz();
    }else{
        window.alert('アナタの正解数は'+score + '/'+quizLength + 'です');
    }
}

let handleIndex = 0;
    while(handleIndex<buttonLength){
        $button[handleIndex].addEventListener('click', (e) => {

            clickHandle(e);
            });
            handleIndex++;
}
