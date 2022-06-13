/*crypto VIGINERE

m <-- length of key 
for index, character in plaintext:
    ciphertext[index] <-- (character + key[index % m]) % 26
 
return ciphertext
let str = "Widget with id";
*/

//алфавіт кодування
const alfabet = "abcdefghijklmnopqrstuvwxyz";

//ключ кодування
const key = "cryptii";
let m = key.length;

// початковий текст
let plaintext = "dog";

console.log(plaintext);

//шифрування Ci = (Pi + Kj) mod 26

function crypt_viginere(text) {
  let rez = "";
  for (i = 0; i < text.length; i++) {
    rez =
      rez +
      alfabet[(alfabet.indexOf(text[i]) + alfabet.indexOf(key[i % m])) % 26];
  }
  return rez;
}
console.log(crypt_viginere(plaintext));

//дешифрування Ci = (Pi + 26 - Kj) mod 26

function text_viginere(text) {
  let rez = "";
  for (i = 0; i < text.length; i++) {
    rez =
      rez +
      alfabet[
        (alfabet.indexOf(text[i]) + 26 - alfabet.indexOf(key[i % m])) % 26
      ];
  }
  return rez;
}
console.log(text_viginere(crypt_viginere(plaintext)));
