

/*

  SECTION 1: FETCH ARTICLES AND INSERT INTO THE DOM

*/


function createArticle(article) {

  console.log(article);

  // creation du container
  var articleContainer = document.createElement("div");

  // creation de l'info de l'article
  var articleInfos = document.createElement("div");

  // creation du titre de l'article
  var articleInfosTitle = document.createElement("h3");

  // creation de l'info de l'article
  var articleInfosAuthor = document.createElement("span");

  // creation du contenu de l'article
  var articleContent = document.createElement("p");

  // rempli le contenu
  articleContainer.setAttribute("class", "articleContainer");
  articleInfos.setAttribute("class", "articleInfos");
  articleInfosTitle.textContent = article.title;
  articleInfosAuthor.textContent = article.author;
  articleContent.setAttribute("class", "articleContent");
  articleContent.textContent = article.content;

  articleInfos.appendChild(articleInfosTitle);
  articleInfos.appendChild(articleInfosAuthor);

  articleContainer.appendChild(articleInfos);
  articleContainer.appendChild(articleContent);

  console.log(articleContainer);

  return articleContainer;
}

function generateArticles(articles) {
  console.log(articles);

  var articlesContainer = document.getElementById("articles");
  if (articles.length === 0) {
    // je n'ai pas d'articles
    document.getElementById("noArticles").style.display = "block";
  } else {
    // j'ai des articles
    // du coup je cache la div pour dire 0
    document.getElementById("noArticles").style.display = "none";

    // pour chaque article
    for (let i = 0, len = articles.length; i < len; i++) {

      // on récupère l'article courrant
      let currentArticle = articles[i];
      // on va créer l'élément DOM à ranger dans notre container
      let article = createArticle(currentArticle);

      // inserer l'article fraichement créée dans le container d'article
      articlesContainer.appendChild(article);
    }
  }
}

var xhr = new XMLHttpRequest();

if (xhr) {
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // la requete est completement terminé
      if (xhr.status === 200) {
        // tout s'est bien passé
        // le serveur m'a renvoyé une réponse positive

        var response = JSON.parse(xhr.responseText);
        generateArticles(response);
      } else {
        // il y a eu une erreur quelque part.
      }
    }
  };
  xhr.open("GET", "http://localhost:3000/posts");
  xhr.send();
}


/*

  SECTION 2: ADD ARTICLE

*/


function addArticle() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var content = document.getElementById("content").value;

  var obj = {
    title: title,
    author: author,
    content: content
  }

  var postData = new XMLHttpRequest();

  if (postData) {

    postData.onreadystatechange = function () {
      if (postData.readyState === XMLHttpRequest.DONE) {
        // la requete est completement terminé
        if (postData.status === 200) {
          alert("fini");
        }
      }
    }

    postData.open("POST", "http://localhost:3000/posts");
    postData.setRequestHeader("Content-Type", "application/json");
    postData.send(JSON.stringify(obj));
  }

}

document.getElementById("sendArticle").addEventListener("click", addArticle);