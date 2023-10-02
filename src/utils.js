// utils.js

// Calculate the color code based on the health value
export const calculateColorCode = (health) => {
    if (health < 20) {
      return "rgba(219, 9, 9, 0.3)";
    }
    if (health < 50) {
      return "rgba(219, 90, 9, 0.5)";
    }
    if (health < 80) {
      return "rgba(219, 202, 9, 0.4)";
    }
    return "rgba(9, 219, 58, 0.3)";
  };
  
  //
  