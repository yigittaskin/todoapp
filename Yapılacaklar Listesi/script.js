//developer by YGT

const ekleButon     = document.querySelector("#ekleButon");
const ogeGiris      = document.querySelector("#ogeGiris");
const form          = document.querySelector("#form");
const yapilacakList = document.querySelector("#yapilacaklar");
const ul            = document.querySelectorAll("ul");

olaylar();

function olaylar(){
    
    //öge ekleme olayı
    ekleButon.addEventListener("click" , ogeEkle);

    //öge silme/tamamlama olayı
    ul[0].addEventListener("click", ogeSilTamamla);
    ul[1].addEventListener("click", ogeSilTamamla);
}

function ogeEkle(e){

    if (ogeGiris.value == "") {
        alert("Boş bir yapılacaklar listesi olmaz. Lütfen öge girin.");
    }
    else {
        //li oluşturma
        const li     = document.createElement("li");
        li.className = "list-group-item bg-danger text-white mt-1";
        li.innerHTML = ogeGiris.value + "<a id='check' href='#'><i class='fas fa-check-square fa-2x float-right ml-3 text-white'></i></a></i><a id='delete' href='#'><i class='fas fa-trash-alt fa-2x float-right text-white'></i></a>";
        //li.appendChild(document.createTextNode(ogeGiris.value));
        yapilacakList.appendChild(li);
    }
        // ekledikten sonra inputun içini boşaltıyor
        ogeGiris.value ="";

        //Butona tıklandığında sayfayı yenileme özelliğini kapatıyoruz
        e.preventDefault();
}

function ogeSilTamamla(e){
    
    //console.log(e.target);

    //target(tetikleyici) eğer çöp iconunun classına eşitse silme işlemi gerçekleşir
    if (e.target.className == "fas fa-trash-alt fa-2x float-right text-white") {
        e.target.parentElement.parentElement.remove();
    }
    //target eğer tik iconunun classına eşitse çalışacak kod
    else if (e.target.className == "fas fa-check-square fa-2x float-right ml-3 text-white") {
        ul[1].appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.className="list-group-item bg-success text-white mt-1 text-white";
        e.target.parentElement.remove();
    }

    e.preventDefault();
}