document.getElementById("rock_btn").onclick = function(){
    btn_click("rock")
}
document.getElementById("paper_btn").onclick = function(){
    btn_click("paper")
}
document.getElementById("scissor_btn").onclick = function(){
    btn_click("scissor")
}
function btn_click(ch){
    console.log(ch);
    //FOR USER
    if(ch=="rock"){
        document.getElementById("me_img").src="./assests/rock.jpg"
    }
    else if(ch=="paper"){
        document.getElementById("me_img").src="./assests/paper.jpeg"
    }
    else if(ch=="scissor"){
        document.getElementById("me_img").src="./assests/scissors.jpg"
    }
    //FOR COMPUTER
    let comp_ch="";
    let comp_ch_n= Math.random()
    console.log(comp_ch_n);
    if(comp_ch_n<=0.33){
        comp_ch="rock";
        document.getElementById("comp_img").src="./assests/rock.jpg"
    }
    else if(comp_ch_n<=0.66){
        comp_ch="paper";
        document.getElementById("comp_img").src="./assests/paper.jpeg"
    }
    else if(comp_ch_n<=1){
        comp_ch="scissor";
        document.getElementById("comp_img").src="./assests/scissors.jpg"
    }
    play_logic(ch,comp_ch);
}
function play_logic(my_ch,comp_ch){
    console.log(my_ch,comp_ch);
    if(my_ch==comp_ch){
        document.getElementById("sts").innerHTML="DRAW"
    }
    else{
        if(my_ch=="rock"){
            if(comp_ch=="paper"){
                document.getElementById("sts").innerHTML="COMPUTER WIN"
                document.getElementById("comp_score").innerHTML=parseInt(document.getElementById("comp_score").innerHTML)+1
            }
            if(comp_ch=="scissor"){
                document.getElementById("sts").innerHTML="YOU WIN"
                document.getElementById("me_score").innerHTML=parseInt(document.getElementById("me_score").innerHTML)+1

            }
        }
        else if(my_ch=="paper"){
            if(comp_ch=="rock"){
                document.getElementById("sts").innerHTML="YOU WIN"
                document.getElementById("me_score").innerHTML=parseInt(document.getElementById("me_score").innerHTML)+1

            }
            if(comp_ch=="scissor"){
                document.getElementById("sts").innerHTML="COMPUTER WIN"
                document.getElementById("comp_score").innerHTML=parseInt(document.getElementById("comp_score").innerHTML)+1


            }
        }
        else if(my_ch=="scissor"){
            if(comp_ch=="rock"){
                document.getElementById("sts").innerHTML="COMPUTER WIN"
                document.getElementById("comp_score").innerHTML=parseInt(document.getElementById("comp_score").innerHTML)+1


            }
            if(comp_ch=="paper"){
                document.getElementById("sts").innerHTML="YOU WIN"
                document.getElementById("me_score").innerHTML=parseInt(document.getElementById("me_score").innerHTML)+1

            }
        }
    }
}


