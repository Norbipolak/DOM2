/*
Attributumok manipulálása 
Elöző órán már csináltuk a classList-et és a style-t
*/

/*
index.html-ben ezt csináltuk 
    <img id=""car-image" src="car.png" width="250">
    <button id="change-img">Kép cseréje</button>
*/

//lementjük a gombot 
const changeImgBtn = document.querySelector("#change-img");

//lementjük a képet is 
const carImg = document.querySelector("#car-img");

//attributum törlése gomb
const deleteAttrBtn = document.querySelector("#delete-attr");

/*
Amikor rákattintunk a gombra, akkor szeretnénk módosítani a car-img-nek a src attributumát cheese-re vagy cargo-ship-re
*/
changeImgBtn.addEventListener("click", function() {
    carImg.setAttribute("src", "cheese.png");
    /*
    setAttribute az megint csak document-től örökölt metódus 
    vár két paramétert  
    1. atrributum elnevezése 
    2. attributum értéke -> hogy mire szeretnénk módosítani az eredetit 
    */
    /*
    A setAttribute-val tudjuk módosítani, de ennek van egy másik formája is, mivel ez egy 
    HTML image element, ezért van egy olyan tulajdonsága(property), hogy src, ez nyilván 
    a div-eknek nincsen 
    de itt viszont tudjuk, úgy módosítani az src attributumot, megadjuk a megfelelő elérésiútvonalat 
    */
    carImg.src = "cheese.png";//ugyanugy kicseréli a képet, mint a setAttribute

    //hogyan tudjuk lementi az attributumokat 
    const srcAtt = carImg.getAttribute("src");
    /*
    Ez csak egy paramétert vár és az az attributumnak az elnevezése, amit szeretnénk elmenteni
    visszakapunk vele egy stringet 
    és ha megnyomjuk a kép cseréje gombot, akkor konzolra visszakapjuk az src értékét stringben -> car.png
    */
    console.log(srcAtt);//car.png

    console.log(carImg.src);//ahol le van mentve a kép -y file:///F:oktatas/Diakok/Lengyel.....car.png
    /*
    Az a különbség a carImg.setAttribute és az carImg.src, hogy az src-es egy tulajdonság, 
    ami a source attributum és emiatt visszakapjuk a teljes elérési útvonalat(abszolut elérési útvonal)
    a setAttributumnál pedig csak effektíve az attributumnak az a értékét(car.png)
    mert mindeféle attributumot képes lementeni a car.png, a másik meg a source attributum 
    */
});
/*
Ebben az esetben, ha megnyomjuk a kép cseréje gombot akkor kicseréli a car.png-t a cheese.png 
és böngészőben gombnyomás után megjelenik a cheese.png amire kicseréltük 
*/
/*
A setAttribute-val tudjuk módosítani, de ennek van egy másik formája is, mivel ez egy 
HTML image element, ezért van egy olyan tulajdonsága(property), hogy src, ez nyilván 
a div-eknek nincsen 
de itt viszont tudjuk, úgy módosítani az src attributumot, megadjuk a megfelelő elérésiútvonalat 
*/

/*
Attributumok törlése -> removeAttribute
<button id="delete-attr">Attributum törlése!</button>
-> 
*/
deleteAttrBtn.addEventListener("click", function() {
    //letöröljük a source attributumot
    carImg.removeAttribute("src");// ennek a hatása az lesz, hogy eltűnik a kép 

    carImg.setAttribute("alt", "Itt egy autó volt.");
});

/*********************************************************************************************************************************/

//Szöveges és HTML tartalom módosítása

/*
    <div id="my-div">
        <span>Ez itt a div szövege</span>
    </div>
    <button id="modify-text">Szöveg módosítása</button>
    <button id="modify-html">HTML módosítása</button>
*/

const myDiv = document.querySelector("my-div");
const modifyTextBtn = document.querySelector("#modify-text");
const modifyHtmlBtn = document.querySelector("#modify-html");

modifyTextBtn.addEventListener("click", function() {
    //innerText az a szöveges tartalomra vonatkozó tulajdonság 
    myDiv.innerText = "Géza kék az ég";
});
/*
Ha megnyomjuk a gombot akkor az eredeti szöveget, ami a myDiv-ban volt azt átírta, amire itt meghatároztunk az innerText-vel
Ez itt a div szövege -> Géza kék az ég

de ez nem jó, ha azt írjuk innerText-be pl. <h2>Géza kék az ég</h2>, mert akkor teljesen, így fog megjelenni a weblapon, 
ahogy most ide leírtam 
azért nem lesz ebből tényleges html tartalom, mert a speciális karaktereket(relációs jeleket) a javascript 
kicserélte ilyen hmtl entity-kre

html entity -> beírjuk az index.html-be, hogy &lt; -> < jel lesz a böngészőben, &pound; a fontnak a jele
itt vannak, hogy milyen entity-k vannak -> https://www.w3schools.com/html/html_entities.asp

Tehát speciális karaktereket lehet kicserélni velük (pl. &lt;(<) &amp; (&), &quot; (") stb.)
<h2>Géza kék az ég</h2> -> ezt nem fogja felismerni rögtön ezt < ugy kéne írni html-ben hogy &lt
*/

//modifyHtmlBtn -> innerHtml 
modifyHtmlBtn.addEventListener("click", function() {
    /*
    az innerHTML ezt már fel fogja ismerni és h2-es nagysággal fogja kiírni a szöveget miután rákattintunk a megfelelő gombra
    és azt is beállíthatjuk, hogy pl. a style-ja legyen color:red és akkor piros színű lesz a szöveg 
    */
    myDiv.innerHTML = `<h2 style="color:red;">Géza kék az ég</h2>`;//ide effektíve html kódot is be tudunk írni 
});

/*******************************************************************************************************************************/

//Form beküldése

/*
    <div id="user-data"></div>
    <form>
        <h3>Név</h3>
        <input type="text" id="name">

        <button id="send-form">Az űrlap betöltése!</button>
    </form>

Itt van nekünk ez a form-unk és azt akarjuk, hogyha megnyomjuk a gombot, akkor az input mezőből 
kiolvassuk az információt és majd a userdata-ba írjuk be, hogy mik voltak az adatok, amiket megadott a user 
*/ 

//lementjük a gombot 
const sendBtn = document.querySelector("#send-form");

//lementjük az inputot 
const nameInput = document.querySelector("name");

//és a div-et, amit a form felé csináltunk 
const userDataDiv = document.querySelector("#user-data");

sendBtn.addEventListener("click", function(e) {
    console.log(e);
    /*
    Visszakapjuk 
    */


    //ha rákattintunk erre a gombra, akkor hogyan kapjuk meg nameInputnak az értékét -> 
    const name = nameInput.value.trim();//!!!!!!!!!!!!!!!!!!!! mindig egy stringet ad vissza 
    //érdemes használni a trim metódust 
    console.log(name);
    /*
    az input mezőnkbe beírjuk, hogy 
    */
});

/*
Ha egy formba beteszünk egy buttont és rákattintunk, akkor újra fogja tölteni az oldalt, mert ez az alapértelmezett 
viselkedése, mert normál esetben így küldünk be form-okat, megpróbálja a szerverhez elküldeni az adatokat 
(más kérdés, hogy itt nincsen szerver)
hogyan akadályozzuk meg 
->
<button type="button" id="send-form">Az űrlap betöltése!</button>
itt megadjuk type attributumként a buttont és akkor innentől kezdve nem fogja betölteni
!!!
alapértelmezetten a button-nek az a type-ja, hogy submit type="submit", ami beküldi az adatokat vagy legalábbis 
megpróbálja beküldeni őket, type="button" viszont nem 
de ha ezt nem akarjuk csinálni ->
sendBtn.addEventListener("click", function(e).. 
function paramétereként megadunk egy e-t
*/