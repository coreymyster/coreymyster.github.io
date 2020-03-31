let projects = [
  {
    img: "img/png/beer-cellar.png",
    name: "Beer Cellar Application",
    desc:
      "Note that this is a project that is under development for 2020 and is currently a work in progress. I am a big craft beer fan and there are quite a few beers that I store away in a cellar to age. I have a lot of beers cellared, and realized I needed a way to keep track of them all - hence this application. I am building this in ReactJS and have hosted this project through GitLab and have set up a CI/CD workflow through Amplify in AWS. For now the app uses dummy data but I will eventually connect a DB to store the data.",
    url: "https://master.dnng1okzlhe0x.amplifyapp.com/",
    repoLink: "https://gitlab.com/coreymyster/beer-cellar"
  },
  {
    img: "img/png/autumn-hills.png",
    name: "Autumn Hills Country Club",
    desc:
      "A cloud based web app for a fictional country club. The app is built using Pug (formerly Jade), on top of Node.js and utilizes Express to make requests to capture data which is sent to a MySQL database. The database is hosted through RDS in AWS, and the application is hosted through AWS Elastic Beanstalk.",
    url: "http://autumnhills-env.eba-ze2zkbv6.us-east-1.elasticbeanstalk.com/",
    repoLink: "https://github.com/coreymyster/Autumn-Hills-Country-Club"
  },
  {
    img: "img/png/memory-game-thumbnail.png",
    name: "Memory Game",
    desc: "A memory game where you have to match two of the same cards.",
    url: "projects/memory-game/index.html",
    repoLink: "https://github.com/coreymyster/memory-game"
  },
  {
    img: "img/png/furniture-thumbnail.png",
    name: "Wood Furniture Website",
    desc:
      "This website is built for a fictional custom wood furniture building company and was built using Handlebars JS.",
    url: "projects/furniture/index.html",
    repoLink: "https://github.com/coreymyster/wood-furniture-website"
  }
  /*{
    img: 'img/png/recipe-book-thumbnail.png',
    name: 'Recipe Book',
    desc: 'A recipe book built with PHP. The focus here is functionality and not design. Test credentials are provided on the website.',
    url: 'projects/recipe-book/index.php',
    repoLink: 'https://github.com/coreymyster/recipe-book'
  }*/
];

let projectItem = document.querySelector(".projectItem");

for (let i = 0; i <= projects.length; i++) {
  projectItem.innerHTML += `
    <span>
      <p><a href="${projects[i].url}"><img class="thumbnail" src="${projects[i].img}" alt="${projects[i].name}"></a></p>
      <p>${projects[i].name}</p>
      <p>${projects[i].desc}</p>
      <p class="links"><a href="${projects[i].url}">Link</a>  |  <a href="${projects[i].repoLink}" target="_blank"><img src="img/svg/github-icon.svg"></a></p>
    </span>
  `;
}
