import Eat from '../img/icon/eat.png';
import Snack from '../img/icon/snack.png';
import Beverage from '../img/icon/beverage.png';
import Daily from '../img/icon/daily.png';
import Transportation from '../img/icon/transportation.png';
import Exercise from '../img/icon/exercise.png';
import Movie from '../img/icon/movie.png';
import Leisure from '../img/icon/leisure.png';
import Study from '../img/icon/study.png';
import Medical from '../img/icon/medical.png';
import Other from '../img/icon/other.png';
import Work from '../img/icon/work.png';
import Interest from '../img/icon/interest.png';

export function classify(type){
    switch (type) {
        case 'Eat':
            return Eat;
        case 'Snack':
            return Snack;
        case 'Beverage':
            return Beverage;
        case 'Daily':
            return Daily;
        case 'Transportation':
            return Transportation;
        case 'Exercise':
            return Exercise;
        case 'Movie':
            return Movie;
        case 'Leisure':
            return Leisure;
        case 'Study':
            return Study;
        case 'Medical':
            return Medical;
        case 'Other':
            return Other;
        case 'Work':
            return Work;
        case 'Interest':
            return Interest;
        default:
            break;
    }
}