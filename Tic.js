class WiningNumber{
    a;b;c;
    constructor(a, b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
let td = document.getElementsByTagName("td");
let gamer = document.getElementsByTagName("h2");
let warning = document.getElementsByTagName("h3")
let winner = document.getElementsByTagName("h4")

let image = document.getElementsByTagName("img")

let x = 0;

function display(element) {
    if (element.innerHTML !== " " && draw()===false && winCheckXO("O")===false && winCheckXO("X")===false) {      //vérifie si la case contient deja autre chose qun espace vide par default et la partie dois être ni nulle ou gagnante
        warning[0].style.visibility="visible";

    } else if (element.innerHTML === " " && x === 0 && winCheckXO("O")===false) {                                    //joueur X peut jouer si le joueur opposer n'as pas gagner au dernier tour
        warning[0].style.visibility="hidden";                                                                           //joueur X est toujours le dernier à jouer lors d'une partie nulle donc inutile de verifier si la partie est nulle pour X
        element.style.backgroundColor = "#fd5656";
        element.style.border = "solid 4px red";
        element.innerText = "X";
        x++;
        gamer[0].style.backgroundColor = "#7777FF";
        gamer[0].style.border = "solid 4px blue";
        gamer[0].innerHTML = "Joueur O"
        image[0].setAttribute("src", "imgo.png")
        winCheckXO("X");                                                                                             //vérifie si le joueur est gagnant après chaque coup

    } else if (element.innerHTML === " " && x > 0 && draw()===false && winCheckXO("X")===false) {                    //joueur O peut jouer si le joueur opposer n'as pas gagner au dernier tour et que la partie n'est pas nulle
        warning[0].style.visibility="hidden";
        element.style.backgroundColor = "#7777FF";
        element.style.border = "solid 4px blue";
        element.innerHTML = "O";
        x--;
        gamer[0].style.backgroundColor = "#ff7777";
        gamer[0].style.border = "solid 4px red";
        gamer[0].innerHTML = "Joueur X"
        image[0].setAttribute("src", "imgx.png")
        winCheckXO("O");                                                                                             //vérifie si le joueur est gagnant après chaque coup
    }
    draw();
}
function draw() {                                                                                                       //vérifie si la partie est nulle
    let test=false;
    let z = 0;
    for (let i = 0; i < 9; i++) {
        if (td[i].innerText === "X" || td[i].innerText === "O") {
            z++;
        }
    }
    winCheckXO("X");                                                                                                 //vérifie que la partie n'est pas gagnante lorsque la dernière case est remplie
    winCheckXO("O");
    if (z === 9  && winCheckXO("O")===false && winCheckXO("X")===false ) {
        winner[0].innerText = "Partie nulle !";
        winner[0].style.visibility="visible";
        image[0].setAttribute("src", "imgnulle.png");
        gamer[0].style.visibility="hidden";
        test=true;
    }
    return test;
}

let trioA= new WiningNumber(0,1,2)                                                                             //8 objets qui contient les 8 combinaisons de 3 chiffres gagnante
let trioB= new WiningNumber(3,4,5)
let trioC= new WiningNumber(6,7,8)
let trioD= new WiningNumber(0,3,6)
let trioE= new WiningNumber(1,4,7)
let trioF= new WiningNumber(2,5,8)
let trioG= new WiningNumber(2,4,6)
let trioH= new WiningNumber(0,4,8)

let winningTrio = [trioA,trioB,trioC,trioD,trioE,trioF,trioG,trioH];

function winCheckXO(x) {                                                                                                //vérifie si le joueur X ou O est gagnant a chaque coup joué
    let test=false;
    winningTrio.forEach(function (trio)
    {
        if (td[trio.a].innerHTML === x && td[trio.b].innerHTML === x && td[trio.c].innerHTML === x) {
            winner[0].style.visibility="visible";
            gamer[0].style.visibility="hidden";
            test = true;
            if (x==="X"){
                winner[0].innerText="X gagne!";
                image[0].setAttribute("src", "imgx.png")
            }
            else{
                winner[0].innerText="O gagne !"
                image[0].setAttribute("src", "imgo.png")
            }
        }
    });

    return test;
}

