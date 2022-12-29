function balok_hasil(){
    var panjang = parseInt(document.getElementById("Panjang").value);
    var lebar = parseInt(document.getElementById("lebar").value);
    var tinggi = parseInt(document.getElementById("Tinggi").value);
    var hasil = panjang*lebar*tinggi;
    document.getElementById("hasil-balok").innerHTML="Volume Balok adalah "+hasil+" m³";
}

function tabung_hasil(){
    var v = 3.14;
    var jejari = parseInt(document.getElementById("jejari").value);
    var tinggi = parseInt(document.getElementById("Tinggi-tabung").value);
    var hasil = v*jejari*jejari*tinggi;
    document.getElementById("hasil-tabung").innerHTML="Volume tabung adalah "+hasil+" m³";
}

function kerucut_hasil(){
    var v1 = 0.3;
    var v = 3.14;
    var jejari = parseInt(document.getElementById("jejari-alas").value);
    var tinggi = parseInt(document.getElementById("Tinggi-kerucut").value);
    var hasil = v1*v*jejari*jejari*tinggi;
    document.getElementById("hasil-kerucut").innerHTML="Volume kerucut adalah "+hasil+" m³";
}

function PrismaSegitiga_hasil(){
    var v1 = 0.5;
    var tinggi_alas = parseInt(document.getElementById("Tinggi-alas").value);
    var Panjang_alas = parseInt(document.getElementById("Panjang-alas").value);
    var Tinggi_Prisma = parseInt(document.getElementById("Tinggi-Prisma").value);
    var hasil = v1*tinggi_alas*Panjang_alas*Tinggi_Prisma;
    document.getElementById("hasil-prisma").innerHTML="Volume prisma adalah "+hasil+" m³";
}

function bola_hasil(){
    var v = 3.14;
    var jejari = parseInt(document.getElementById("jejari_bola").value);
    var hasil = v*jejari*jejari*jejari;
    document.getElementById("hasil-bola").innerHTML="Volume Bola adalah "+hasil+" m³";
}