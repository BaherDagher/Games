import { UI } from "./ui-module.js";
import { GAMES } from "./games-module.js"
import { DETAILED } from "./details-module.js"

const gamesRow = document.querySelector(".games-row");
const category = document.querySelectorAll(".nav-link");
const defaultCategory = "mmorpg";
const gamesSection = document.querySelector("#gamesSection");
const detailsSection = document.querySelector("#detailsSection");
const gamesDetailsRow = document.querySelector(".details-row");

const ui = new UI;
const games = new GAMES(gamesRow);
const details = new DETAILED(gamesDetailsRow);

// Event Listner to Required Category
for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", function () {
        for (let y = 0; y < category.length; y++) {
            category[y].classList.remove("active");
        }
        category[i].classList.add("active");

        // To Show Loader
        $("#gamesLoader").fadeIn(100);
        $("body").addClass("overflow-hidden");

        let requiredCategory = category[i].textContent;
        displayGames(requiredCategory);
    })
}

async function displayGames(Category) {
    const gamesList = await ui.getGames(Category);
    await games.displayGames(gamesList);
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function () {
            gamesSection.classList.replace("d-block", "d-none");
            detailsSection.classList.replace("d-none", "d-block");
            const gameID = cards[i].getAttribute("game-id");
            displayGamesDetailed(gameID)
        })
    }

    // To Hide Loader
    $(document).ready(function () {
        $("#gamesLoader").fadeOut(100, function () {
            $("body").removeClass("overflow-hidden");
        });

    })
}
// Display Default Category
displayGames(defaultCategory);


async function displayGamesDetailed(gameID) {
    const gameDetails = await ui.getDetails(gameID);
    console.log(gameDetails);
    await details.displayGamesDetails(gameDetails);
    const closeBtn = document.querySelector(".close-btn")
    closeBtn.addEventListener('click', function () {
        detailsSection.classList.replace("d-block", "d-none");
        gamesSection.classList.replace("d-none", "d-block");
    });
}

