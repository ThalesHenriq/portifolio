document.addEventListener("DOMContentLoaded", () => {
  bloquearMenuContexto();
  menuRwd();
  modalPortfolio();
});

function bloquearMenuContexto() {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
}

function menuRwd() {
  const body = document.body;
  const categoriasBox = document.querySelector(".header-categorias-box");
  const btn = document.querySelector(".header-menu-rwd-btn");
  const categorias = document.querySelectorAll(".header-categoria-link");

  categorias.forEach((categoria) => {
    categoria.addEventListener("click", mostrarSecao);
  });

  btn.addEventListener("click", () => {
    categoriasBox.classList.toggle("header-menu-visivel");

    if (categoriasBox.classList.contains("header-menu-visivel")) {
      btn.src = "img/menu-mobile/fechar.svg";

      removerScroll();
    } else {
      btn.src = "img/menu-mobile/abrir.svg";

      adicionarScroll();
    }
  });

  function mostrarSecao() {
    btn.src = "img/menu-mobile/abrir.svg";

    categoriasBox.classList.remove("header-menu-visivel");

    body.classList.add("scroll-visivel");
  }

  function removerScroll() {
    body.classList.remove("scroll-visivel");
    body.classList.add("scroll-escondido");
  }

  function adicionarScroll() {
    body.classList.remove("scroll-escondido");
    body.classList.add("scroll-visivel");
  }
}

function modalPortfolio() {
  // Imagens
  const primeiraImagem = document.querySelector(".portfolio-img-1");
  const segundaImagem = document.querySelector(".portfolio-img-2");
  const terceiraImagem = document.querySelector(".portfolio-img-3");
  const quartaImagem = document.querySelector(".portfolio-img-4");
  const quintaImagem = document.querySelector(".portfolio-img-5");
  const sextaImagem = document.querySelector(".portfolio-img-6");

  // Mdodais
  const primeiroModal = document.querySelector(".portfolio-modal-1");
  const segundoModal = document.querySelector(".portfolio-modal-2");
  const terceiroModal = document.querySelector(".portfolio-modal-3");
  const quartoModal = document.querySelector(".portfolio-modal-4");
  const quintoModal = document.querySelector(".portfolio-modal-5");
  const sextoModal = document.querySelector(".portfolio-modal-6");

  const btnsFecharModal = document.querySelectorAll(".portfolio-modal-fechar");
  const modais = document.querySelectorAll(".portfolio-modal");

  primeiraImagem.addEventListener("click", () => {
    removerModalVisivel();

    primeiroModal.classList.add("portfolio-modal-visivel");
  });

  segundaImagem.addEventListener("click", () => {
    removerModalVisivel();

    segundoModal.classList.add("portfolio-modal-visivel");
  });

  terceiraImagem.addEventListener("click", () => {
    removerModalVisivel();

    terceiroModal.classList.add("portfolio-modal-visivel");
  });

  quartaImagem.addEventListener("click", () => {
    removerModalVisivel();

    quartoModal.classList.add("portfolio-modal-visivel");
  });

  quintaImagem.addEventListener("click", () => {
    removerModalVisivel();

    quintoModal.classList.add("portfolio-modal-visivel");
  });

  sextaImagem.addEventListener("click", () => {
    removerModalVisivel();

    sextoModal.classList.add("portfolio-modal-visivel");
  });

  // Fechar Modal
  btnsFecharModal.forEach((btnFecharModal) => {
    btnFecharModal.addEventListener("click", () => {
      const elementoPai = btnFecharModal.parentElement;

      elementoPai.classList.remove("portfolio-modal-visivel");
    });
  });

  // Remove Modal
  function removerModalVisivel() {
    modais.forEach((modal) => {
      modal.classList.remove("portfolio-modal-visivel");
    });
  }
}

