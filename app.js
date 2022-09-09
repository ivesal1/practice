const summery = (text , char) => {
    let content = text
    console.log('...'+content.substring(0,char) );
}
summery('سلام وقت بخیر جناب',8)

const secretCard  = (card) => {
    let secred = card.substring(0,12)
    let result = `${secred}****`
    return result
}
console.log(secretCard('1234567890123456'));

const censored = (txt,w) => {
    let content = txt.replace(w , '*')
    return content
}
console.log(censored('سلام وقت بخیر جناب' , 'بخیر'));

const level = (exper) => {
    if (exper <= 2 ){
        console.log('junior');
    }else if(exper < 5 && exper >= 3){
        console.log('mid-level');
    }
    else{
        console.log('senior');
    }
}
level(2)