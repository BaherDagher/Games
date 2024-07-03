export class GAMES {
    constructor(row) {
        this.row = row;
    }
    async displayGames(gamesList) {
        let bBox = ``;
        for (let i = 0; i < gamesList.length; i++) {
            bBox += `
      <div class="col-md-3">
                        <div class="card bg-transparent" game-id="${  gamesList[i].id}">
                            <div class="card-inner p-3">
                            <div class="card-img">
                                <img src="${gamesList[i].thumbnail}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body text-start px-0">
                                <div class="card-category m-auto">
                                    <div class="row">
                                        <div class="col-10 font-size text-white">
                                            <p>${gamesList[i].title}</p>
    
                                        </div>
                                        <div class="col-2  p-0">
                                            <span
                                                class="badge text-bg-info bg-opacity-50 text-white fw-bold custom-hover">Free</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text max-three-lines text-secondary fw-bold ">${gamesList[i].short_description}
                                </p>
                            </div>
                        </div>
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item bg-transparent">
                                    <div class="row ">
                                        <div class="col-3  col-md-12 col-lg-3 ">
                                            <span
                                            class="badge text-bg-secondary bg-opacity-25 text-white fw-bold">${gamesList[i].genre}</span>
                                        </div>
                                        <div class="col-9 col-md-12 col-lg-9 text-end ">
                                            <span
                                            class="badge text-bg-secondary bg-opacity-25 text-white fw-bold">${gamesList[i].platform}</span>
                                        </div>
    
                                    </div>
    
                                </li>
                            </ul>
                        </div>
                    </div>
    `
  
        }
        this.row.innerHTML = bBox;
    }

}

