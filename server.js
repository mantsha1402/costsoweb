const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/costcoStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// Schemas and Models
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    imageUrl: String,
});

const CartItemSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    productId: mongoose.Schema.Types.ObjectId,
    quantity: { type: Number, default: 1 },
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const CartItem = mongoose.model('CartItem', CartItemSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

// User Registration
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: "Registration successful." });
    } catch (err) {
        res.status(400).json({ message: "User already exists." });
    }
});

// User Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
    }
    res.json({ message: "Login successful.", userId: user._id });
});

// Fetch Products
app.get('/products', async (req, res) => {
    const { category, maxPrice } = req.query;
    let query = {};

    if (category && category !== 'all') {
        query.category = category;
    }

    if (maxPrice) {
        query.price = { $lte: parseFloat(maxPrice) };
    }

    const products = await Product.find(query);
    res.json(products);
});

// Add Product (Admin Route)
app.post('/products', async (req, res) => {
    try {
        const { name, category, price, imageUrl } = req.body;
        const product = new Product({ name, category, price, imageUrl });
        await product.save();
        res.status(201).json({ message: "Product added successfully." });
    } catch (err) {
        res.status(400).json({ message: "Failed to add product." });
    }
});

// Add to Cart
app.post('/cart', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const existingItem = await CartItem.findOne({ userId, productId });

    if (existingItem) {
        existingItem.quantity += quantity;
        await existingItem.save();
    } else {
        const cartItem = new CartItem({ userId, productId, quantity });
        await cartItem.save();
    }
    res.json({ message: "Item added to cart." });
});

// Fetch Cart
app.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    const cartItems = await CartItem.find({ userId }).populate('productId');
    res.json(cartItems);
});

// Remove from Cart
app.delete('/cart/:itemId', async (req, res) => {
    const { itemId } = req.params;
    await CartItem.findByIdAndDelete(itemId);
    res.json({ message: "Item removed from cart." });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require('express');

app.use(express.static('public')); // Serve static files from 'public' folder

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve your HTML
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
