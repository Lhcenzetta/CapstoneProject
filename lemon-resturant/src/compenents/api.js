export const fetchAPI = (date) => {
    const result = [];
    const times = [
      "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
    for (let i = 0; i < times.length; i++) {
      if (Math.random() > 0.5) result.push(times[i]);
    }
    return result;
  };
  
  export const submitAPI = (formData) => {
    return true; // Always succeed for demo
  };
  