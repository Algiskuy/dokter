//1
class Santris {
  constructor(nama) {
    this.nama = nama;
  }
}
let santri = new Santris("dayat");
console.log(santri); //Santris {nama: 'dayat'}
//2
class Santris {
  getSantris(nama) {
    return "namanya" + nama;
  }
}
let santri = new Santris();
console.log(santri.getSantris("hafif")); //namanya hafif
