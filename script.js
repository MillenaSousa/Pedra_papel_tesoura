var user = document.getElementById('user')
var computer = document.getElementById('comput')
// var audio = document.getElementById('mp3-figth')
var resullt = document.getElementById('resullt')
var figth = document.getElementById('img-figth')


var select = document.getElementById('select-player');
select.addEventListener('click', function (e) {

    var valorId = e.target.id
    var comput = Math.floor(Math.random() * 3);

    // 0 pedra -- 1 papel -- 2 tesoura 
//     inicio()


//     function inicio() {
//         audio.setAttribute('src', 'Efeito_sonoro_Mortal_Kombat_Fight_-_Mortal_Kombat_sound_effect_FightMP3_128K.mp3')

//     }
    
    setTimeout(() => { game() }, 1000);


    function game() {

      
        if (valorId === 'img-rock' && comput === 0) {
            // empate
            resullt.innerHTML += `<h3> EMPATE </h3>`
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/pedra.png');
            computer.setAttribute('src', 'img/pedra.png');
            recarregar()

        } else if (valorId === 'img-rock' && comput === 1) {
            // papel ganha
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/pedra.png');
            computer.setAttribute('src', 'img/papel.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/papel.png" >`

            recarregar()
        } else if (valorId === 'img-rock' && comput === 2) {
            // pedra ganha
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/pedra.png');
            computer.setAttribute('src', 'img/tesouraa.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/pedra.png" >`

            recarregar()
        }


        if (valorId === 'img-paper' && comput === 1) {
            // empate
            resullt.innerHTML += `<h3> EMPATE </h3>`
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/papel.png');
            computer.setAttribute('src', 'img/papel.png');

            recarregar()
        } else if (valorId === 'img-paper' && comput === 0) {
            // papel ganha
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/papel.png');
            computer.setAttribute('src', 'img/pedra.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/papel.png" >`

            recarregar()
        } else if (valorId === 'img-paper' && comput === 2) {
            // tesoura ganha
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/papel.png');
            computer.setAttribute('src', 'img/tesouraa.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/tesouraa.png" >`

            recarregar()
        }

        else if (valorId === 'img-scissors' && comput === 2) {
            // empate
            resullt.innerHTML += `<h3> EMPATE </h3>`
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/tesouraa.png');
            computer.setAttribute('src', 'img/tesouraa.png');

            recarregar()
        } else if (valorId === 'img-scissors' && comput === 0) {
            //    pedra vence
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/tesouraa.png');
            computer.setAttribute('src', 'img/pedra.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/pedra.png" >`

            recarregar()
        } else if (valorId === 'img-scissors' && comput === 1) {
            // tesoura vence
            figth.setAttribute('src', 'img/fight.png');
            user.setAttribute('src', 'img/tesouraa.png');
            computer.setAttribute('src', 'img/papel.png');

            resullt.innerHTML += `<h3> GANHADOR </h3>`
            resullt.innerHTML += `<img src="img/tesouraa.png" >`

            recarregar()
        }
        return
    }

})

function recarregar() {
    setTimeout(() => { window.location.reload(true) }, 2500);


    return
}
