
let heroes = []
let page = 1
let limit = 20
let sortBy = 'name'
let order = 'up'
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(data => {
        heroes = data
        renderTable(paginate(heroes))
    })
    .catch(error => console.error('Error fetching data:', error))

    
function paginate(data) {
    if (limit === 'all') return data
    const start = (page - 1) * limit
    return data.slice(start, start + limit)
}
function sortData(data) {
    const sorted = Array.from(data);
    sorted.sort((a, b) => {
        let valueA = getValue(a, sortBy);
        let valueB = getValue(b, sortBy);
        if (valueA === null || valueA === undefined || valueA === ''|| valueA === '-' || valueA === 0) return 1;
        if (valueB === null || valueB === undefined || valueB === '' || valueB === '-' || valueB === 0) return -1;
        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }
        return order === 'up' ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
    });
    return sorted;
}
function getValue(hero, column) {
    switch (column) {
        case 'name': return hero.name
        case 'fullName': return hero.biography.fullName
        case 'intelligence': return hero.powerstats.intelligence
        case 'strength': return hero.powerstats.strength
        case 'speed': return hero.powerstats.speed
        case 'durability': return hero.powerstats.durability
        case 'power': return hero.powerstats.power
        case 'combat': return hero.powerstats.combat
        case 'race': return hero.appearance.race || 'N/A'
        case 'gender': return hero.appearance.gender
        case 'height': return convertHeight(hero.appearance.height[1])
        case 'weight': return convertWeight(hero.appearance.weight[1])
        case 'placeOfBirth': return hero.biography.placeOfBirth
        case 'alignment': return hero.biography.alignment
        default: return hero.name
    }
}
function convertHeight(height) {
    if (!height) return null
    const heightValue = parseFloat(height)
    return height.includes("meter") ? heightValue * 100 : heightValue
}
function convertWeight(weight) {
    if (!weight) return null
    const weightValue = parseFloat(weight)
    return weight.includes("ton") ? weightValue * 1000 : weightValue
}
function createCell(text) {
    const cell = document.createElement('td')
    if (text && text !== '-') {
        cell.textContent = text
    } else {
        cell.textContent = 'N/A'
    }
    return cell
}
function renderTable(data) {
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''
    data.forEach(hero => {
        const row = document.createElement('tr')
        const iconCell = document.createElement('td')
        const iconImg = document.createElement('img')
        iconImg.src = hero.images.xs
        iconImg.alt = hero.name
        iconCell.appendChild(iconImg)
        row.appendChild(iconCell)
        row.appendChild(createCell(hero.name))
        row.appendChild(createCell(hero.biography.fullName))
        row.appendChild(createCell(hero.powerstats.intelligence))
        row.appendChild(createCell(hero.powerstats.strength))
        row.appendChild(createCell(hero.powerstats.speed))
        row.appendChild(createCell(hero.powerstats.durability))
        row.appendChild(createCell(hero.powerstats.power))
        row.appendChild(createCell(hero.powerstats.combat))
        row.appendChild(createCell(hero.appearance.race))
        row.appendChild(createCell(hero.appearance.gender))
        row.appendChild(createCell(hero.appearance.height.join(' / ')))
        row.appendChild(createCell(hero.appearance.weight.join(' / ')))
        row.appendChild(createCell(hero.biography.placeOfBirth))
        row.appendChild(createCell(hero.biography.alignment))
        tableBody.appendChild(row)
    })
    updatePageInfo()
}
document.querySelectorAll('th.sortable').forEach(header => {
    header.addEventListener('click', function () {
        const column = this.getAttribute('data-column')
        if (sortBy === column) {
            order = order === 'up' ? 'down' : 'up'
        } else {
            sortBy = column
            order = 'up'
        }
        renderTable(paginate(sortData(heroes)))
    })
})
const searchInput = document.getElementById('search')
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase()
    const filtered = heroes.filter(hero => 
        hero.name.toLowerCase().includes(searchTerm)
    )
    renderTable(paginate(filtered))
})
const limitSelect = document.getElementById('pageSize')
limitSelect.addEventListener('change', function () {
    limit = limitSelect.value === 'all' ? 'all' : parseInt(limitSelect.value)
    page = 1  // Reset to first page
    renderTable(paginate(sortData(heroes)))
})
function updatePageInfo() {
    const pageInfo = document.getElementById('pageInfo')
    const totalItems = heroes.length
    const totalPages = limit === 'all' ? 1 : Math.ceil(totalItems / limit)
    pageInfo.textContent = `Page ${page} of ${totalPages}`
}
document.getElementById('prevPage').addEventListener('click', function () {
    if (page > 1) {
        page--
        renderTable(paginate(sortData(heroes)))
    }
})
document.getElementById('nextPage').addEventListener('click', function () {
    const totalItems = heroes.length
    const totalPages = limit === 'all' ? 1 : Math.ceil(totalItems / limit)
    if (page < totalPages) {
        page++
        renderTable(paginate(sortData(heroes)))
    }
})
