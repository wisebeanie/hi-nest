import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        // 진짜 데이터 베이스는 쿼리문 입력
        return this.movies;
    }
    
    getOne(id : string): Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }

    deleteOne(id: string): boolean {
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }
}
