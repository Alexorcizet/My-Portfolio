

$(init)

function init() {
    renderProjects()
    renderModals()
}


function renderProjects() {
    var shmulik = 0
    var projs = gProjs.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        ${proj.id}
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal-${proj.id}"
      >
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img
      class="img-fluid proj-img"
      src="${proj.img}"
      alt=""
      "
      />
      </a>
      <div class="portfolio-caption">
      <h4>${proj.id}</h4>
      <p class="text-muted">${proj.name}</p>
    </div>
  </div>`
    )
    $('.projs').html(projs)
}

function renderModals() {
    var modals = gProjs.map(proj =>
        `<div
    class="portfolio-modal modal fade"
    id="portfolioModal-${proj.id}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.id}</h2>
                <p class="item-intro text-muted">
                ${proj.name}
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="${proj.img}"
                  alt=""
                />
                <p>
                    ${proj.desc}
                </p>
                <ul class="list-inline">
                  <li>published at:${proj.publishedAt}</li>
                  <li>Client:<button class="btn btn-primary back-new">
                  <a href="${proj.url}" target="_blank">visit here</a>
                  </button></li>
                  <li><span class="badge badge-info bigger">${proj.labels[0]}</span>
                  <span class="badge badge-info bigger">${proj.labels[1]}</span></li>
                </ul>
                <button
                  class="btn btn-primary"
                  data-dismiss="modal"
                  type="button"
                >
                  <i class="fa fa-times"></i>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`)

    $('.modals').html(modals)

}