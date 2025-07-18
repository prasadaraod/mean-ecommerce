class OrderController {
    constructor(Order) {
        this.Order = Order;
    }

    async createOrder(req, res) {
        try {
            const order = new this.Order(req.body);
            await order.save();
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getOrderById(req, res) {
        try {
            const order = await this.Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await this.Order.find();
            res.json(orders);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateOrder(req, res) {
        try {
            const order = await this.Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteOrder(req, res) {
        try {
            const order = await this.Order.findByIdAndDelete(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default OrderController;