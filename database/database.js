const books = [
    {
        ISBN : "5Book",
        title : "tesla!!!",
        pubDate : "2021-08-05",
        language: "en",
        numPage: "250",
        author:[1,2],
        publication : [1],
        category:["tech","space","education"]
    }
]

const author = [
    {
        id: 1,
        name : "Aradhana",
        books : ["12345Book","secretBook"]
    },
    {
        id: 2,
        name : "Elon Musk",
        books : ["12345Book"]
    },
]

const publication = [
    {
        id: 1,
        name:"writeex",
        books:["12345Book"]
    }
]

module.exports = {books,author,publication};