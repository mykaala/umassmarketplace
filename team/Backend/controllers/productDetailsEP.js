const express = require("express");
const app = express();
const Product = require("./product"); // Your Product model

app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});