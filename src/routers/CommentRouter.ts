import { Router } from 'express';
import { CommentController } from '../controllers/CommentRouter';
import { GlobalCheckErrorMiddleWare } from '../middleware/CheckError';
import { CommentValidators } from '../validators/CommentValidators';

class CommentRouter {

    public router: Router;


    constructor() {
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }


    getRoutes() { }
    postRoutes() {
        //id of that post where comment is going to add. This is basically called param.
        this.router.post('/add/:id', GlobalCheckErrorMiddleWare.authentication, CommentValidators.addComment(), GlobalCheckErrorMiddleWare.checkError, CommentController.addComment)
    }
    patchRoutes() { }
    deleteRoutes() { }

}

export default new CommentRouter().router;