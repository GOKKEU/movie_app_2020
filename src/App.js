import React from "react";
import axios from "axios";
//설치한 axios를 import합니다.
import Movie from "./Movie";
import "./App.css";
//클레스를 선언 합니다.
//React.Component를 상속 받습니다.
class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    //axios의 속도는 매우 느리기 때문에 이를 위해 비동기 함수를 선언합니다.

    //async await은 javascript에게 getMovies에 조금 시간이 필요하고 우리는 그것을 기다려야만 해
    getMovies = async () => {
        //노마드 코더의 YTS Proxy API의 URL를 입력합니다.
        //const movies = axios.get("url"); 할당 시
        //movies.data.data.movies ==> 원하는 20개의 영화 데이터가 존재합니다.
        //ES6 문법에따라 movies.data.data.movies -> const {data:{data:{movies}}} (object를 담음)
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //할당된 movies를 state에 다시 할당합니다.
        this.setState({ movies, isLoading: false }); //movies만 써도 동작함
    };
    //(4)render 이후 발생 메스드
    componentDidMount() {
        this.getMovies();
    }
    //(1) React.Component를 상속받은 클레스는 render()를 자동으로 실행 합니다.
    render() {
        //(2) isLoading에 값을 할당합니다.
        const { isLoading, movies } = this.state;

        //(3)isLoading이 true Loading ,false we are ready 를 div에 추가 합니다.
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
