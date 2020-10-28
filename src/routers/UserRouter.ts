import { Router } from 'express';
import { UserController } from '../controllers/UserControllers';
import { GlobalCheckErrorMiddleWare } from '../middleware/CheckError';
import { UserValidators } from '../validators/UserValidators';

class UserRouter {

    public router: Router;


    constructor() {
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }


    getRoutes() {
        this.router.get('/send/verification/email', UserValidators.resendVerificationEmail(),GlobalCheckErrorMiddleWare.authentication, UserController.resendVerificationEmail);


    }
    postRoutes() {
        this.router.post('/signup', UserValidators.signup(), GlobalCheckErrorMiddleWare.checkError, UserController.signup);
        this.router.post('/login', UserValidators.login(), GlobalCheckErrorMiddleWare.checkError, UserController.login)
    }
    patchRoutes() {

        this.router.patch('/verify', UserValidators.verifyUser(), GlobalCheckErrorMiddleWare.checkError,GlobalCheckErrorMiddleWare.authentication, UserController.verify);
        this.router.patch('/update/password',UserValidators.updatePassword(),GlobalCheckErrorMiddleWare.checkError,GlobalCheckErrorMiddleWare.authentication,UserController.updatePassword)
       
    }
    deleteRoutes() {

    }

}

export default new UserRouter().router;