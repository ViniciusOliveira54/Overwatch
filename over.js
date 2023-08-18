let damageHeroes = []

let tankHeroes = []

let supportHeroes = []

let heroList = document.

for (let i = 0; i < 37; i++) {
    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.id = "hero-" + i;
    checkbox.value = heroes[i].name;

}
