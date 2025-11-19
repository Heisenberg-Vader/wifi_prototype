export default function handler(req, res) {
  const size = 2 * 1024 * 1024;
  const buffer = Buffer.alloc(size, 'a');

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Length", size);
  res.status(200).send(buffer);
}
