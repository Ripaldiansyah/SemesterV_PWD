function change(){
    

    var hasil = document.getElementById("hitung-geometri").value;
    if (hasil == ("Bola")){
        document.location.assign("main.html#bola")
    }else
    if (hasil == ("Balok")){
        document.location.assign("main.html#Balok")
    }else
    if (hasil == ("Kerucut")){
        document.location.assign("main.html#Kerucut")
    }else
    if (hasil == ("Prisma Segitiga")){
        document.location.assign("main.html#Prisma-Segitiga")
    }else
    if (hasil == ("Tabung")){
        document.location.assign("main.html#tabung")
    }
}

