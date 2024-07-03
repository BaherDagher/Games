export class DETAILED {
    constructor(row) {
        this.row = row;
    }

    async displayGamesDetails(gameDetails) {
        let bBox = `
              <div class="col-md-4">
                    <div class="inner">
                        <img src="${gameDetails.thumbnail}" alt="">
                    </div>
                </div>
                <div class="col-md-8">
                <h2>Title: ${gameDetails.title}</h2>
                <h6>Category : <span
                                            class="badge text-bg-info bg-opacity-100 text-black fw-bold">${gameDetails.genre}</span></h5>
                <h6>Platform :  <span
                                            class="badge text-bg-info bg-opacity-100 text-black fw-bold">${gameDetails.platform}</span></hh>
                <h6>Status:  <span
                                            class="badge text-bg-info bg-opacity-100 text-black fw-bold">${gameDetails.status}</span></h5>
                <p>${gameDetails.description}</p>
              <a href= "${gameDetails.game_url}"  class="mx-auto btn btn-submit text-white border-warning color">Show Game</a>
            </div>
        `;
        this.row.innerHTML = bBox;          
        }
    }
