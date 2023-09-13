//переделать цвета
export const getColor = (value, isShow) => {
  if(isShow)
    {
      switch (value) {
      case 1:
        return "#446bcf"
      case 2:
        return "#1f8c37"
      case 3:
        return "#e0265e"
      case 4:
        return "#2a0e8f"
      case 5:
        return "#73520a"
      case 6:
        return "#1abd8c"
      case 7:
        return "black"
      case 8:
        return "#721682"
      default:
        return ""
      }
    }
  }