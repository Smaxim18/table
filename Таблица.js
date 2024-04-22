const PHONE_NUMBER = {
    'Пожарная служба': [
        ['Номер 1', '101'],
        ['Номер 2', '112'],
        ['Номер 3', '01']
    ],
    'Полиция': [
        ['Номер 1', '102'],
        ['Номер 2', '112']
    ],
    'Скорая помощь': [
        ['Номер 1', '103']
    ]
}
document.querySelector('.content').innerHTML = `<table class="phone"></table>`
for(key in PHONE_NUMBER) {
    let row = document.createElement('tr')
    row.innerHTML = `<td colspan="2">${key}</td>`
    document.querySelector('.phone').appendChild(row)
    for(let i=0; i<PHONE_NUMBER[key].length; i++) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${PHONE_NUMBER[key][i][0]}</td>
        <td>${PHONE_NUMBER[key][i][1]}</td>
        `
        document.querySelector('.phone').appendChild(row)
    }
}