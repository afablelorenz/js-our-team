const teamGrid = document.querySelector('section#teamGrid');
let team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
];


for(let i = 0; i < team.length; i++){
    const teamArticle = document.createElement('article');
    teamArticle.classList.add('teamArticle'+'-'+i);
    teamGrid.appendChild(teamArticle);
    teamNameAppend(team[i],i);
    teamRoleAppend(team[i],i);
    teamImageAppend(team[i],i);
    console.log(team[i]);
}


function teamNameAppend(array, i){
    const teamArticle = document.querySelector('article.teamArticle'+'-'+i);
    let teamArticleAdd=document.createTextNode(array.nome);
    teamArticle.appendChild(teamArticleAdd);
}

function teamRoleAppend(array, i){
    const teamArticle = document.querySelector('article.teamArticle'+'-'+i);
    let teamArticleAdd=document.createTextNode(array.ruolo);
    teamArticle.appendChild(teamArticleAdd);
}

function teamImageAppend(array, i){
    const teamArticle = document.querySelector('article.teamArticle'+'-'+i);
    let teamArticleAdd=document.createTextNode(array.foto);
    teamArticle.appendChild(teamArticleAdd);
}


