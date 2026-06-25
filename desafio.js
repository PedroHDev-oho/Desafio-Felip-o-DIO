let nomeHeroi = "Pedro"
let XpHeroi = 8001
let nivelHeroi = ""
if(XpHeroi <= 1000)// Nivel Ferro
{
    nivelHeroi = "Ferro"

}else if(XpHeroi > 1000 && XpHeroi <= 2000)//Nivel Bronze 
{
    nivelHeroi = "Bronze"

}else if(XpHeroi > 2000 && XpHeroi <= 5000)//Nivel Prata
{
    nivelHeroi = "Prata"

}else if(XpHeroi > 5000 && XpHeroi <= 7000)//Nivel Ouro  
{
    nivelHeroi = "Ouro"

}else if(XpHeroi > 7000 && XpHeroi <= 8000)//Nivel Platina 
{
    nivelHeroi = "Platina"

}else if(XpHeroi > 8000 && XpHeroi <= 9000)//Nivel Ascendente 
{
    nivelHeroi = "Ascendente"

}else if(XpHeroi > 9000 && XpHeroi <= 10000)//Nivel Imortal
{
    nivelHeroi = "Imortal"
    
}else if(XpHeroi > 10000)//Nivel Radiante
{
    nivelHeroi = "Radiante"
}

console.log("O Heroi de nome " + nomeHeroi + " está no nivel de " + nivelHeroi);