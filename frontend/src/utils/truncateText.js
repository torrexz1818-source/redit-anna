export function truncateText(text, maxLength = 140) {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}