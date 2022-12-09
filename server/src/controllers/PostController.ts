import { Request, Response } from 'express';
import { Post } from '@models/Post';
import { Citi, Crud } from '../global'

export default class PostController implements Crud {

    async create(request: Request, response: Response){
        const {creator, name, description} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(creator, name, description);
        if(isAnyUndefined) return response.status(400).send();

        const newPost = { creator, name, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Post, newPost);

        return response.status(httpStatus).send({ message });
    }
    
}