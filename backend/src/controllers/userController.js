class UserController {
    constructor(User) {
        this.User = User;
    }

    async register(req, res) {
        try {
            const { username, password, email } = req.body;
            const newUser = new this.User({ username, password, email });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await this.User.findOne({ username });
            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            // Generate token logic here (not implemented)
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }

    async getUserProfile(req, res) {
        try {
            const user = await this.User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user profile', error });
        }
    }

    async updateUser(req, res) {
        try {
            const { username, email } = req.body;
            const updatedUser = await this.User.findByIdAndUpdate(req.user.id, { username, email }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }

    async deleteUser(req, res) {
        try {
            const deletedUser = await this.User.findByIdAndDelete(req.user.id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
}

export default UserController;