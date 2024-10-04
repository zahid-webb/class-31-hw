// --------------------- dom part start
 // ----- player one dom
 let playerone          = document.querySelector('.playerone')
 let playeroneinput     = document.querySelector('.playeroneinput')
 let playeronebutton    = document.querySelector('.playeronebutton')
 // ----- player two dom
 let playertwo          = document.querySelector('.playertwo')
 let playertwoinput     = document.querySelector('.playertwoinput')
 let playertwobutton    = document.querySelector('.playertwobutton')
 // ----- player three dom
 let playerthree          = document.querySelector('.playerthree')
 let playerthreeinput     = document.querySelector('.playerthreeinput')
 let playerthreebutton    = document.querySelector('.playerthreebutton')
 // ----- other dom
 let playername         = document.querySelector('.playername')
 let error              = document.querySelector('.error')
 let img                = document.querySelector('.img_hh')
 let winner             = document.querySelector('.winner')
 let attemptscount      = document.querySelector('.attemptscount')
 let attempt            = 0
 let attemptscountthree = document.querySelector('.attemptscountthree')
 let chancethree        = 0

// --------------------- dom part end
// --------------------- function part start
 attemptscount.innerHTML      = attempt
 attemptscountthree.innerHTML = chancethree
 // ------- player one function
 playeronebutton.addEventListener('click' ,()=>{
    if(playeroneinput.value == ''){
        error.innerHTML = 'Vhai/apu moni value de/den ekta?'
    }else{
        if(playeroneinput.value >15 ){
            error.innerHTML = '15 theka kom value dao'
        } 
        else{
            if(playeroneinput.value<0){
                error.innerHTML = 'minus value ken deo Chacha?'
            }else{
                playerone.style = 'display: none'
                error.innerHTML = ''
                playertwo.style = 'display: block'
            }
        }
    }
    // ------ player two function
    playertwobutton.addEventListener('click' ,()=>{
        if(playertwoinput.value == ''){
            error.innerHTML = 'faka rakha jabe na'
        }else{
            if(playertwoinput.value >15){
                error.innerHTML = '15 theka choto value lagbe sir!!!!!!!'
            }else{
                if(playertwoinput.value <0){
                    error.innerHTML = 'minus value nei na, thanks'
                }else{
                    error.innerHTML = ''
                    if(playeroneinput.value == playertwoinput.value){
                        error.innerHTML = ''
                        playertwo.style = 'display : none'
                        img.style = 'display: block'
                        winner.innerHTML = 'Winner : Player 2'
                    }else{
                        attempt++
                        attemptscount.innerHTML = attempt
                        if(attempt == 5){
                            playertwo.style = 'display: none'
                            error.innerHTML = ''
                            playerthree.style = 'display: block'
                        }
                    }
                }
            }
        }
    })
              //--------- player 3 function start
              playerthree.addEventListener('click' ,() => {
                if(playerthreeinput.value == ''){
                    error.innerHTML = 'Put a Number please'
                }else{
                    if(playerthreeinput.value >15){
                        error.innerHTML = 'Please pick a number smaller than 15'
                    }else{
                        if(playerthreeinput.value < 0){
                            error.innerHTML = 'Can not put minus value'
                        }else{
                            error.innerHTML = ''
                            if(playeroneinput.value == playerthreeinput.value){
                                playerthree.style = 'display : none'
                                img.style = 'display: block'
                                winner.innerHTML = 'Winner : Player 3'
                            }
                            else{
                                chancethree++
                                attemptscountthree.innerHTML = chancethree
                            if(chancethree == 5){
                                playerthree.style = 'display : none'
                                img.style = 'display: block'
                                winner.innerHTML = 'Winner : Player 1'
                            }
                            }
                        }
                    }
                }
    })
 })
// --------------------- function part end