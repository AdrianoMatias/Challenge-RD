const selector = selector => document.querySelector(selector);
/* trecho preenchido */

const create = element => document.createElement(element);
/* trecho preenchido */

const app2 = selector("#app2");

const Container = create("div");
Container.classList.add("container");

const Logo = create("img");
Logo.src = "./assets/images/logo.svg";
Logo.classList.add("logo2");

const Ul = create("ul");
Ul.classList.add("ul");
Container.appendChild(Ul);

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.mocky.io/v2/5dba68fb3000007400028eb5", true);
xhr.addEventListener("load", function() {
  const resposta = xhr.responseText;
  const desenvolvedores = JSON.parse(resposta);

  desenvolvedores.forEach(function(desenvolvedor) {
    const li = create("li");
    li.classList.add("li");

    const img = create("img");
    img.classList.add("avatar");
    img.classList.add("zoom");

    li.innerHTML = desenvolvedor.login;
    Ul.appendChild(li);

    img.src = desenvolvedor.avatar_url;
    li.appendChild(img);

    Ul.appendChild(li);
  });
});
xhr.send();

app2.appendChild(Logo);
app2.appendChild(Container);

/**
 * bloco de código omitido
 * exiba a lista de desenvolvedores
 */
