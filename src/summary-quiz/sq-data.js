export const QuizData = [
    {
        id: 0,
        question: `Who wins in a second price bid?`,
        options: [`The bidder who offers the highest price gets an item at the highest price`,
                 `The bidder who offers the second highest price gets an item at the second highest price`,
                 `The bidder who offers the second highest price gets an item at the highest price`,
                 `The bidder who offers the highest price gets an item at the second highest price`],
        answer: `The bidder who offers the highest price gets an item at the second highest price`
    },
    {
        id: 1,
        question: `In this game you are in the role of _______?`,
        options: [`A buyer in an auction`,
                 `An auctioneer in an auction`,
                 `An information provider who holds knowledge regarding the true worth of the auctioned item`,
                 `None of the above is correct`],
        answer: `An auctioneer in an auction`
    },
    {
        id: 2,
        question: `Who holds the knowledge regarding the true worth of the auctioned item?`,
        options: [`You do (The auctioneer)`,
                  `Both you and the buyers in the auction`,
                  `Only the information provider`,
                  `You and the information provider`],
        answer: `Only the information provider`
    },
    {
        id: 3,
        question: `Which of the following parameters can be changed in each auction?`,
        options: [`The number of bidders`,
                  `The number of possible item values and their content`,
                  `The number of possible bidder types and each type’s private evaluations`,
                  `All the answers are correct`],
        answer: `All the answers are correct`
    },
    {
        id: 4,
        question: `Who decides whether to purchase the information from the information provider?`,
        options: [`Only You (the auctioneer ), and thus you will have to pay for it`,
                  `Both you and the bidders, and thus the payment is split among all of you`,
                  `Only the information provider `,
                  `You and the information provider`],
        answer: `Only You (the auctioneer ), and thus you will have to pay for it`
    },
    {
        id: 5,
        question: `What value will the bidder bid, if you decide not to purchase any information from the information provider?`,
        options: [`They won’t place any bid without information`,
                 `Each possible bidder type will bid his highest evaluation among his possible item evaluations`,
                 `Each possible bidder type will bid his lowest evaluation among his possible item evaluations`,
                 `The bidders will use values expectancy (average value) to calculate their bid`],
        answer: `The bidders will use values expectancy (average value) to calculate their bid`
    },
    {
        id: 6,
        question: `What  value will the buyers offer, if you do decide to purchase the information regarding the true worth of the auctioned item from the information provider?`,
        options: [`Both you and all the bidders will be exposed to the specific value of the item. Therefore, each possible bidder type will offer his highest bid from his possible item values`,
                `Both you and all the bidders will be exposed to the specific value of the item. Therefore, each  possible bidder type will offer his item’s true value as was exposed by the information provider`,
                `The bidders won’t be exposed to the specific value of the item. Therefore, each possible bidder type will offer the lowest bid  from his possible item values`,
                `The bidders won’t be exposed to the specific value of the item. Therefore, they will use values expectancy (average value) to calculate their bid`],
        answer: `Both you and all the bidders will be exposed to the specific value of the item. Therefore, each  possible bidder type will offer his item’s true value as was exposed by the information provider`
    },
    {
        id: 7,
        question: `What is your goal in this game, and how is your score in each round calculated?`,
        options: [`Your goal is to sell each item at the highest possible price. Your score is actually the difference between the actual sale price and the expected value of the item`,
                `Your goal is to sell each item at the highest possible price. Your score is actually the difference between the actual sale price and the expected value of the item, minus the information purchase price if purchased. , i.e, in a case where information is purchased, you can either gain or lose game points`,
                `Your goal is to sell each item at the highest price possible. Your score is actually the difference between the actual sale price and the expected 	     value of the item . i.e, in a case where no information is purchased,bidders use their" expectanc" y to decide how much to bid and thus the actual selling price is equal to the expected price, and you gain 0 game points`,
                `Answers B+C are correct`],
        answer: `Answers B+C are correct`
    },
    {
        id: 8,
        question: `Why choose to buy information?`,
        options: [`Because you are not sure regarding the value of the item you aim to sell and there is a set of possible values it might be worth`,
                `If the actual selling price is greater than the" average value (due to information purchasing), " you will sell the item for more than the expected price, and therefore earn some game points`,
                `If the actual selling price is greater than the" average value (due to information purchasing), " you will sell the item for more than the expected price, and therefore might earn some game points (depending on the information cost)`,
                `If  the actual selling price is equal to the" average value (due to information purchasing), " you will sell the item for the the expected price, and therefore you lose some game points (because of the information cost)`],
        answer: `If the actual selling price is greater than the" average value (due to information purchasing), " you will sell the item for more than the expected price, and therefore might earn some game points (depending on the information cost)`
    },
    {
        id: 9,
        question: `Why choose not to buy information?`,
        options: [`If  the actual selling price is less than the" average value (due to information purchasing), " you will sell the item for less than the expected price, and therefore might lose some game points (depending on the the information cost).`,
                `If  the actual selling price is equal to the" average value(due to information purchasing), " you will sell the item for the expected price, and therefore you lose some game points (because of the information cost).`,
                `If  the actual selling price is greater than the" average value, " you will sell the item for more than the expected price, and therefore might earn or lose some game points (depending on the information cost)`,
                `All the answers are correct`],
        answer: `All the answers are correct`
    },
]


