const QRCode = require("qrcode");
const path = require("path");

const url = "https://alzahraaboutique.ae/profile";
const out = path.join(__dirname, "..", "public");
const opts = {
  errorCorrectionLevel: "H",
  margin: 2,
  color: { dark: "#1A120D", light: "#FFFFFF" },
};

(async () => {
  await QRCode.toFile(path.join(out, "profile-qr.png"), url, { ...opts, width: 1024 });
  await QRCode.toFile(path.join(out, "profile-qr.svg"), url, { ...opts, type: "svg" });
  console.log("QR codes generated for", url);
})();
