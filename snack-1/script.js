const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let listName = "";

for (let i = 0; i < names.length; i++) {
  const curname = names[i];
  listName += curname + ", ";
}
console.log(listName);
