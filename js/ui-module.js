 
  export class UI {
    
    async getGames (categoryOption){

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryOption}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ccd7fc5033msh435a262ea21a55ep1792edjsncb384eebb8ec',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api =await fetch(url, options);
        const response =await api.json();
        return response;
        };
        
         async getDetails (gameID){
            
            const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'ccd7fc5033msh435a262ea21a55ep1792edjsncb384eebb8ec',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const api =await fetch(url, options);
            const response =await api.json();
            return response;
            };
 }
 