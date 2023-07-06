export default function updateUniqueItems(map) {
  try {
    if (map) {
      map.forEach((value, key) => {
        if (value === 1) map.set(key, 100);
      });
    //   for (const [key, value] of map.entries()) {
    //     if (value === 1) {
    //       return map.set(key, 100);
    //     }
    //   }
    }
  } catch (e) {
    throw new Error('Cannot process');
  }
  return map;
}
