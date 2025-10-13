let allNews = [];
let visibleCount = 3;

async function loadNews() {
  try {
    const response = await fetch("../js/news.json");
    allNews = await response.json();
    renderNews();
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
  }
}

function renderNews() {
  const container = document.getElementById("section_3");
  container.innerHTML = "";

  const visibleNews = allNews.slice(0, visibleCount);

  visibleNews.forEach((item) => {
    const newsHTML = `
    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
        <div class="custom-block-wrap">
            <img
                src=${item.cover}
                class="custom-block-image img-fluid"
                alt=""
            />

            <div class="custom-block">
                <div class="custom-block-body">
                <h5 class="mb-3">
                    ${item.title}
                </h5>

                <p>
                    ${item.content}
                </p>
                </div>

                <a href="news-detail.html?id=${item.id}" class="custom-btn btn mt-2">Ler mais</a>
            </div>
        </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", newsHTML);
  });
}

document.addEventListener("DOMContentLoaded", loadNews);
