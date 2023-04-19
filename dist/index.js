const spaceShips = [];
let userOption = 0;
function addSpaceShip(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceShips.push(spaceship);
    alert(`A nave ${spaceship.name} foi cadastrada com sucesso!`);
}
function findSpaceShip(name) {
    let spaceship;
    spaceship = spaceShips.find((ship) => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("Membro não pode ser adicionado pois o limite foi atingido!");
    }
    else {
        spaceship.crew.push(member);
        alert(`Membro: ${member} cadastrado com sucesso na espaçonave: ${spaceship.name}!`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada pois já está em missão!`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada por tripulação insuficiente!`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada em missão!`);
    }
}
function firstMenuOption() {
    const name = prompt("Qual o nome da nave a ser registrada: ");
    const pilot = prompt(`Qual o nome do piloto da ${name}`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta? `));
    const confirmation = confirm(`Confirma o registro da nave ${name}\nO piloto ${pilot}\ncom a tripulação do tamanho ${crewLimit}?`);
    if (confirmation) {
        addSpaceShip(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt("Qual o nome do tripulante que deseja cadastrar? ");
    const spaceShipName = prompt("Qual o nome da espaçonave? ");
    const spaceship = findSpaceShip(spaceShipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja confirmar o ${member} na tripulação da espaçonave: ${spaceShipName}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceShipName = prompt("Qual o nome da espaçonave? ");
    const spaceship = findSpaceShip(spaceShipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja enviar a ${spaceShipName} em missão? `);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = "Naves registradas:\n";
    spaceShips.forEach((spaceship) => {
        list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? "Sim" : "Não"}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}`;
        spaceship.crew.forEach((member) => {
            list += `    - ${member}\n`;
        });
    });
    alert(list);
}
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar`;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
