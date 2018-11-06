export default function calculateOldRent(discount, rent) {
  let oldRent = (rent * 100) / (100 - discount);

  return Math.round(oldRent / 100) * 100;
}
