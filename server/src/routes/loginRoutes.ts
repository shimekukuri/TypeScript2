import { Router, Request, Response, NextFunction } from 'express';

interface ReqeustWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('Not permitted');
  }
};

const router = Router();

router.post('/login', (req: ReqeustWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid Input');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>
        You Are logged in
      </div>
      <a href="/logout">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You Are Not Logged In</div>
      <a href="/auth/login">Login</a>
    </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected rout, logged in user');
});

export { router };
