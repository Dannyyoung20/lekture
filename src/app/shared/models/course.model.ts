import { Tutor } from './tutor.model';
import { Category } from './category.model';


export interface Course {
    id?: number;
    title: string;
    description: string;
    image_url?: string;
    created?: Date;
    created_at?: string;
    tutor: Tutor;
    category: Category;
}
