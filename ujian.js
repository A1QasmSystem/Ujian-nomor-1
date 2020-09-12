var nilaiSantri = [50, 90, 65, 67, 89, 80, 50, 97, 84];

var total = 0;
var byknilai = nilaiSantri.length;

for (i = 0; i < byknilai; i++){
    total += nilaiSantri[i]
}

document.write(total/byknilai)