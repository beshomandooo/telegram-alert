<?php
$botToken = "8172380019:AAGPgrf7PDEwdHnsoi_H5OBX45rH1eyi6K4";
$chatId = "-1002479732885";

$ip       = $_GET['ip'] ?? 'UNKNOWN';
$os       = $_GET['os'] ?? 'UNKNOWN';
$browser  = $_GET['browser'] ?? 'UNKNOWN';
$city     = $_GET['city'] ?? 'UNKNOWN';
$region   = $_GET['region'] ?? 'UNKNOWN';
$country  = $_GET['country'] ?? 'UNKNOWN';
$zip      = $_GET['zip'] ?? 'UNKNOWN';
$timezone = $_GET['timezone'] ?? 'UNKNOWN';
$isp      = $_GET['isp'] ?? 'UNKNOWN';
$org      = $_GET['org'] ?? 'UNKNOWN';
$as       = $_GET['as'] ?? 'UNKNOWN';
$time     = $_GET['time'] ?? date("Y-m-d H:i:s");

$message = "✈️ File Download Alert 🚨\n\n"
         . "🔹 IP: $ip\n"
         . "💻 OS: $os\n"
         . "🌐 Browser: $browser\n"
         . "📍 Location: $city, $region, $country\n"
         . "📮 ZIP: $zip\n"
         . "🕒 Timezone: $timezone\n"
         . "📡 ISP: $isp\n"
         . "🏢 Org: $org\n"
         . "🛰 AS: $as\n"
         . "🕓 Timestamp: $time";

file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message));

header('Content-Type: application/json');
echo json_encode(['status' => 'ok', 'message_sent' => true]);
