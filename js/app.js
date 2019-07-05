let projects = [
  {
  img: 'img/png/memory-game-thumbnail.png',
  name: 'Memory Game',
  desc: 'A memory game where you have to match two of the same cards.',
  url: 'projects/memory-game/index.html',
  repoLink: 'https://github.com/coreymyster/memory-game'
  },
  {
    img: 'img/png/furniture-thumbnail.png',
    name: 'Wood Furniture Website',
    desc: 'This website is built for a fictional custom wood furniture building company and was built using Handlebars JS.',
    url: 'projects/furniture/index.html',
    repoLink: 'https://github.com/coreymyster/wood-furniture-website'
  },
  {
    img: 'img/png/recipe-book-thumbnail.png',
    name: 'Recipe Book',
    desc: 'A recipe book built with PHP. The focus here is functionality and not design. Test credentials are provided on the website.',
    url: 'projects/recipe-book/index.php',
    repoLink: 'https://github.com/coreymyster/recipe-book'
  }
]

let projectItem = document.querySelector('.projectItem')

for (let i = 0; i <= projects.length; i++) {
  projectItem.innerHTML += `
    <span>
      <p><a href="${projects[i].url}"><img class="thumbnail" src="${projects[i].img}"></a></p>
      <p>${projects[i].name}</p>
      <p>${projects[i].desc}</p>
      <p class="links"><a href="${projects[i].url}">Link</a>  |  <a href="${projects[i].repoLink}" target="_blank"><img src="img/svg/github-icon.svg"></a></p>
    </span>
  `
}
