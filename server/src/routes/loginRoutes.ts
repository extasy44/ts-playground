import { Router, Response, Request, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "seo@gmail.com" && password === "1") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div> You are logged in </div>
      <a href="/logout"> Logout </a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div> You are not logged in </div>
      <a href="/login"> LogIn </a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome, loggedin user");
});

export { router };