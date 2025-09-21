export function imageExpoFormat(uri) {
  const filename = uri.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1].toLowerCase()}` : "image/jpeg";
  return { uri, name: filename, type };
}