import { rawData } from "./eve";  
 
const aggregateAlertsByTime = (data, interval) => {
  const aggregatedData = {};
  data.forEach(alert => {
    const date = new Date(alert.timestamp);
    const roundedDate = new Date(Math.floor(date.getTime() / interval) * interval);
    const dateString = roundedDate.toISOString();

    if (aggregatedData[dateString]) {
      aggregatedData[dateString] += 1;
    } else {
      aggregatedData[dateString] = 1;
    }
  });

  return Object.keys(aggregatedData).map(key => ({
    timestamp: new Date(key).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
    count: aggregatedData[key]
  })).filter((_, index) => index % 5 === 0); // Displaying every 5th data point
};

// Aggregate by minute (60000 ms)
export const frequencyData = aggregateAlertsByTime(rawData, 60000);


  // 2. Alerts by Category
  
  const aggregateDataByCategory = (data) => {
    const categoryCount = {};
    let totalCount = 0; // Track total count of all alerts
    data.forEach(alert => {
      const category = alert.alert?.category;
      if (category) { // Only process alerts with defined categories
        if (categoryCount[category]) {
          categoryCount[category] += 1;
        } else {
          categoryCount[category] = 1;
        }
        totalCount += 1; // Increment total count
      }
    });
    return Object.keys(categoryCount).map(key => ({
      category: key,
      count: categoryCount[key],
      totalCount: totalCount, // Include total count in each category entry
    }));
  };
  
  
export const categoryData = aggregateDataByCategory(rawData);  


  // 3. Alerts by Protocol
  export const protocolData = rawData.reduce((acc, alert) => {
    const proto = alert.proto;
    const existing = acc.find(item => item.proto === proto);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ proto, count: 1 });
    }
    return acc;
  }, []);
  

  const COLORS = {
    "alert": '#FF6384',
    "ssh": '#36A2EB',
    "dns": '#FFCE56'
  };
  const aggregateDataByEventType = (data) => {
    const eventTypeCount = {};
    data.forEach(alert => {
      const eventType = alert.event_type;
      if (eventType) {
        if (eventTypeCount[eventType]) {
          eventTypeCount[eventType] += 1;
        } else {
          eventTypeCount[eventType] = 1;
        }
      }
    });
  
    return Object.keys(eventTypeCount).map(eventType => ({
      name: eventType,
      count: eventTypeCount[eventType],
      fill: COLORS[eventType]
    }));
  };
  export const eventType = aggregateDataByEventType(rawData)