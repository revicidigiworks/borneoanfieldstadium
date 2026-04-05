const BASE_URL = "https://your-api-url.com"; // ganti nanti

const api = {
  async getJadwalAyo(date: string) {
    const res = await fetch(`${BASE_URL}/jadwal?date=${date}`);
    return res.json();
  },
};

export default api;