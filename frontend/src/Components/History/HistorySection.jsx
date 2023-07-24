import React from 'react';
import "./History.css"

const HistorySection = () => {
  // Sample history data
  const historyData = [
    {
      title: 'Petra by night',
      picture: "./image/petraNight.jpeg",
      description: '(description) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque optio in accusantium autem facere rerum unde tenetur corrupti qui? Maiores veritatis quos eveniet exercitationem magnam voluptatem, impedit officiis laudantium quasi dolor atque! Blanditiis excepturi illo autem fugit in dolorum vel?',
      price: '$10',
      time: '10:30 AM',
      date: '2023-07-21',
    },
    {
      title: 'The old city tour',
      picture: "./image/petraDay.jpeg",
      description: '(description) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque optio in accusantium autem facere rerum unde tenetur corrupti qui? Maiores veritatis quos eveniet exercitationem magnam voluptatem, impedit officiis laudantium quasi dolor atque! Blanditiis excepturi illo autem fugit in dolorum vel?',
      price: '$20',
      time: '11:45 AM',
      date: '2023-07-22',
    },
    
  ];

  return (
    <div className="history-container d-flex justify-content-center align-items-center">
      <div className="history-wrapper">
        <h2 className="history-title text-center mb-4">History</h2>
        <div className="history-list">
          {historyData.map((item, index) => (
            <div className="history-item" key={index}>
              <img className="history-picture" src={item.picture} alt={item.title} />
              <div className="history-details">
                <h3 className="history-item-title">{item.title}</h3>
                <p className="history-description">{item.description}</p>
                <p className="history-price">Price: {item.price}</p>
                <p className="history-time">Time: {item.time}</p>
                <p className="history-date">Date: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
              <button type="submit" className="btn ">Back</button>

      </div>
    </div>
  );
};

export default HistorySection;
