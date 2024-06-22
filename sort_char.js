function sortCharacters(S) {
    const hurufVokal = 'aiueo';
    let karakterVokal = '';
    let karakterKonsonan = '';

    for (let karakter of S.toLowerCase()) {
        if (karakter !== ' ') {
            if (hurufVokal.includes(karakter)) {
                karakterVokal += karakter;
            } else {
                karakterKonsonan += karakter;
            }
        }
    }

    return {
        'Vowel Characters :': karakterVokal.split('').sort().join(''),
        'Consonant Characters :': karakterKonsonan.split('').sort().join('')
    };
}

// Contoh penggunaan
const input1 = "Sample Case";
const input2 = "Next Case";

const output1 = sortCharacters(input1);
const output2 = sortCharacters(input2);

console.log(output1);
console.log(output2);
