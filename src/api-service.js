const BASE_URL= "https://apiauctiongame.herokuapp.com/";


export class API {

    static addParticipant(body)
    {
        return fetch(BASE_URL+"api/participant/add_participant/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static isParticipant(body)
    {
        return fetch(BASE_URL+"api/participant/is_participant/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static passInstructions(body)
    {
        return fetch(BASE_URL+"api/participant/pass_instructions/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    
    static updateScore(body)
    {
        return fetch(BASE_URL+"api/participant/update_score/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
        
    static TrainingRound(body)
    {
        return fetch(BASE_URL+"api/participant/get_round/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static TrainingRoundGame(body)
    {
        return fetch(BASE_URL+"api/participant/get_round_game/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    
    static get_training(body)
    {
        return fetch(BASE_URL+"api/entry/get_another_training_ent/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static get_game(body)
    {
        return fetch(BASE_URL+"api/entry/get_another_game_ent/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    
    static get_Yes(body)
    {
        return fetch(BASE_URL+"api/entry-yes/get_yes/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static getBidders(body)
    {
        return fetch(BASE_URL+"api/entry-yes/get_bidders/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static getBiddersNo(body)
    {
        return fetch(BASE_URL+"api/entry-no/get_bidders/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static get_No(body)
    {
        return fetch(BASE_URL+"api/entry-no/get_no/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static postAnswer(body)
    {
        return fetch(BASE_URL+"api/result/post_answer_training/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static postAnswerGame(body)
    {
        return fetch(BASE_URL+"api/result/post_answer_game/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
    static addSurvey(body)
    {
        return fetch(BASE_URL+"api/survey/add_survey/",
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }
}