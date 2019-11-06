const selector = selector => document.querySelector(selector);
/* trecho preenchido */

const create = element => document.createElement(element);
/* trecho preenchido */

const app = selector("#app");

const Login = create("div");
Login.classList.add("login");
app.appendChild(Login);

const Logo = create("img");
Logo.src = "./assets/images/logo.svg";
Logo.classList.add("logo");

//criando o Form - input email, input senha e botão entrar
const Form = create("form");

Form.onsubmit = async e => {
  e.preventDefault();
  const email = document.querySelector(".email");
  const password = document.querySelector(".senha");
  /* trecho preenchido */

  if (email.value && password.value.length >= 5) {
    location.href = "users.html";
  }
};

Form.oninput = e => {
  const [email, password, button] = e.target.parentElement.children;

  if (email.value && password.value.length >= 5) {
    button.removeAttribute("disabled");
    button.style.background = "green";
  } else {
    button.setAttribute("disabled", "disabled");
    button.style.background = "gray";
  }
};

/**
 * bloco de código preenchido
 * com formulário
 */
Form.innerHTML = `<input  type="email" class="email" placeholder="Entre com seu e-mail" />
 <input type="password" class="senha" name="password" placeholder="Digite sua senha supersecreta" />
 <button class="entrar">Entrar</button>`;

app.appendChild(Logo);
Login.appendChild(Form);

async function fakeAuthenticate(email, password) {
  /**
   * bloco de código preenchido
   * aqui esperamos que você faça a requisição ao URL informado
   */

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://www.mocky.io/v2/5dba690e3000008c00028eb6?email=" +
      email +
      "&password=" +
      password,
    true
  );
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.responseText;
      console.log(data);
      window.location.href = "users.html";
    }
  };
}
