const axios = require('axios');

export async function getAllWidgets() {

    const response = await axios.get('/api/widgets');
    return response.data;
}

export async function createWidget(data) {
    const response = await axios.post(`/api/widget`, {widget: data});
    return response.data;
}