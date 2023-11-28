const getColorByNumber = (num: number) => {
    let bgColorized = "#6EEB83";
    if (num <= 35) {
      bgColorized = "#FF3E3E";
    } else if (num > 35 && num < 60) {
      bgColorized = "#F08700";
    } else if (num >= 60 && num < 80) {
      bgColorized = "#EFCA08";
    }
    return bgColorized;
  };
  
export const barStyles = (num: number): Object => {
    return {
      backgroundColor: getColorByNumber(num),
      width: `${num}%`,
    };
  };