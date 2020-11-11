exports.frameToDays= (frame) => {
  switch (frame) {
    case 'daily':
      return 1;
    case 'weekly':
      return 7;
    case 'monthly':
      return 30;
    default:
      return new Error("Invalid time frame! Enter 'daily', 'weekly' or 'monthly'");
  }
} 