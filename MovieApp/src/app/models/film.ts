export interface Film {
    id: number
    title: string,
    backdrop_path: string,
    vote_average: number,
    poster_path: string,
    overview: string,
    filmReviews: {
        author: string,
        content: string
    }
}