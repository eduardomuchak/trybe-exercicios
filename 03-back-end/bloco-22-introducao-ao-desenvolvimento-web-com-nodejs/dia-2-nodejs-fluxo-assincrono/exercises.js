const { readFileSync } = require('fs');

const getSimpsons = () => {
const response = readFileSync('./simpsons.json', 'utf-8');
const simpsons = JSON.parse(response);
simpsons.map((simpson) => console.log(`${simpson.id} - ${simpson.name}`));
};

const main = () => {
getSimpsons();
};

main(); 

//////

const { readFile } = require('fs').promises;

const getSimpsons = () => {
const response = readFile('./simpsons.json', 'utf-8').then((file) => {
const simpsons = JSON.parse(file);
simpsons.map((simpson) => console.log(`${simpson.id} - ${simpson.name}`));
});
};

const main = () => {
getSimpsons();
};

main(); 

//////

const { readFile } = require('fs').promises;

const getSimpsons = (id) => {
const response = readFileSync('./simpsons.json', 'utf-8');
const simpsons = JSON.parse(response);
const simpsonExist = simpsons.find((simpson) => Number(simpson.id) === id);
if (!simpsonExist) throw new Error('id não encontrado');
return simpsonExist;
};

const main = (id) => {
console.log(getSimpsons(id));
};

main(1); 

//////

const { readFile } = require('fs').promises;

const getSimpsons = async (id) => {
const response = await readFile('./simpsons.json', 'utf-8');
const simpsons = JSON.parse(response);
const simpsonExist = simpsons.find((simpson) => Number(simpson.id) === id);
console.log(simpsonExist);
if (!simpsonExist) throw new Error('id não encontrado');
};

const main = () => {
getSimpsons(1);
};

main(); 