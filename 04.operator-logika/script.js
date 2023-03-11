const nilaiIPA = 70;
const nilaiMatematika = 90;
const nilaiIPS = 88;
const nilaiBahasa = 60;


const lulus = nilaiIPA > 70 && nilaiMatematika > 70
                && nilaiIPS > 70 && nilaiBahasa > 70
console.log(`lulusKedokteran =`, lulusKedokteran)

const lulusInformatika = nilaiIPA > 70 || nilaiIPS > 70
                || nilaiBahasa > 70 && nilaiMatematika > 80

console.log(`lulusInformatika =`, lulusInformatika)

const lulusSekolah = (nilaiIPA + nilaiIPS + nilaiBahasa + nilaiMatematika) / 4 > 70

console.log(`lulusSekolah =`, lulusSekolah)

const lulusKeperawatan = !lulusKedokteran && lulusSekolah

console.log(`lulusKeperawatan =`, lulusKeperawatan)

console.log ((lulusKeperawatan && lulusSekolah) || (lulusSekolah && lulusKedokteran));