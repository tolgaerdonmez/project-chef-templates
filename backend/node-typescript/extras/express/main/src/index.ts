import Express, { Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/user";

async function main() {
	const app = Express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(cors({ credentials: true }));

	app.get("/", ({}, res) => {
		res.send("hello");
	});

	app.use("/api/user", userRouter);

	// handling errors
	app.use((error: any, {}, res: Response, next: NextFunction) => {
		if (error) {
			return res.status(error.status || 400).json({ error });
		}
		next();
		return;
	});

	app.listen(4000, () => {
		console.log("Server listening on port 4000");
	});
}

main();
