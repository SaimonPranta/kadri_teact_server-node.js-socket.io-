
const root = async (req, res) => {
    try {
        res.send("hello from server")
    } catch (error) {
        res.send("hello from server")
    }
}

module.exports = root;