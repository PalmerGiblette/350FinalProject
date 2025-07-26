const express = require("express");
const app = express();
const port = 3000;

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

module.exports = app;
