//Desafio Nível do Herói

let nomeHeroi = "Thiago"
let nivelHeroi = "1"

const nome = "Nome do Herói: "
const rank = "Rank do Herói: "

/* coloquei <= 1000 pq se ficasse somente < 1000 
o "1000" cairia no else "somente números são validos"
*/

if (nivelHeroi <= 1000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Ferro!")
    }
else if (nivelHeroi >= 1001 && nivelHeroi <= 2000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Bronze!")
    }
else if (nivelHeroi >= 2001 && nivelHeroi <= 5000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Prata!")
    }
else if (nivelHeroi >= 5001 && nivelHeroi <= 7000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Ouro!")
    }
else if (nivelHeroi >= 7001 && nivelHeroi <= 8000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Platina!")
    }
else if (nivelHeroi >= 8001 && nivelHeroi <= 9000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Ascendente!")
    }
else if (nivelHeroi >= 9001 && nivelHeroi <= 10000)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Imortal!")
    }
else if (nivelHeroi >= 10001)
    {
        console.log (nome + nomeHeroi)
        console.log (rank + "Radiante!")
    }
else
    {
        console.log ("Somente números são válidos!")
    }