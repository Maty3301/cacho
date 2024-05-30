const express = require("express");

export function initExpressPort() {
    const app = express();
    const port = process.env.PORT || 4000;

    app.get("/", (req: any, res: any) => {
        res.send("Hello World!");
    });

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}
