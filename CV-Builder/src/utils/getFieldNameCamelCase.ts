export default function getFieldNameCamelCase(fieldName: string): string {
  return fieldName
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(""); // обединява обратно в низ
}
