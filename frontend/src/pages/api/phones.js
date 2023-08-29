import axios from 'axios';

export default async function handler(req, res) {
    const { slug } = req.query;
    try {
        const response = await axios.get(`http://localhost:8000/api/phones/${slug}/`);
        const phone = response.data;
        res.status(200).json(phone);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: 'Error fetching phone details' });
    }
}
