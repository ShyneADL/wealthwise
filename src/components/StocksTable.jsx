import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../style';
import './stockstable.css'

const StocksTable = () => {
  const [symbol, setSymbol] = useState('');
  const [inputValue, setInputValue ] = useState('')
  const [historicalData, setHistoricalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const tableRef = useRef(null);

  const handleScroll = () => {
    if (tableRef.current) {
      const tableWidth = tableRef.current.clientWidth;
      const tableScrollWidth = tableRef.current.scrollWidth;
      if (tableScrollWidth > tableWidth) {
        tableRef.current.scrollRight = tableScrollWidth + tableWidth;
      } 
      else {
        tableRef.current.scrollRight = 0;
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    if (symbol) {
      fetchData();
    }
  }, [symbol, currentPage]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        outputsize: 'compact',
        datatype: 'json'
      },
      headers: {
        'X-RapidAPI-Key': '4b5fdeaf15mshc8f262ae8aac7a6p174e1bjsn95b9eb012e39',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setHistoricalData(response.data['Time Series (Daily)']);
    } catch (error) {
      console.error(error);
    }
  };

 // Slice data based on pagination
const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const displayedData = historicalData ? Object.entries(historicalData).slice(firstIndex, lastIndex) : [];

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSymbol(inputValue);
    await fetchData();
  };

  // const handleSearch = (e) => setSymbol(e.target.value) && setCurrentPage(1);
  


  return (
    <div>
      <div className={`${styles.marginY} flex flex-col justify-between items-center w-full`}>
          <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[40px] xs:text-[28px] text-[64px] text-neutral-900 ss:leading-[65.8px] xs:leading-[50.8px] leading-[75px]">Historical Stock Data for {symbol.toUpperCase()}</h1>
          <form onSubmit={handleFormSubmit} className='w-80%'>
            <input
              type="text"
              placeholder="Enter a stock symbol e.g AAPL, TSLA"
              value={inputValue}
              onChange={handleInputChange}
              className={`w-[60%] p-2 flex-1 sm:mt-6 border-2 border-black rounded-l-md  font-poppins font-normal text-neutral-700 ss:text-[20px] text-[24px] leading-[30.8px]`}
            />
            <button className='bg-black text-white py-[13.5px] rounded-r-md' type='submit'>Load Quote</button>
          </form>
      </div>

      <div className={`flex flex-1 ${styles.marginY} md:justify-center xs:justify-start w-full relative`}>
        <div className='table-style' ref={tableRef}>
          <table className={`xs:justify-start`}  id='id'>
            <thead>
              <tr>
                <th className='bg-blue-300 px-16' >Date</th>
                <th className='bg-green-300 px-16'>Open</th>
                <th className='bg-blue-300 px-16'>High</th>
                <th className='bg-green-300 px-16'>Low</th>
                <th className=' bg-blue-300 px-16'>Close</th>
                <th className='bg-green-300 px-16'>Volume</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map(([date, data]) => (
                <tr key={date}>
                  <td className='bg-blue-50 p-1'>{date}</td>
                  <td className='bg-green-50 p-1'>{data['1. open']}</td>
                  <td className='bg-blue-50 p-1'>{data['2. high']}</td>
                  <td className='bg-green-50 p-1'>{data['3. low']}</td>
                  <td className='bg-blue-50 p-1'>{data['4. close']}</td>
                  <td className='bg-green-50 p-1'>{data['5. volume']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {symbol && (

          <div className={`${styles.flexCenter}`}>
            <div className={`w-[300px] flex justify-between mb-10`}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <p>{currentPage} of 5</p>
              <button
                disabled={currentPage === 5}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
          </div>
          </div>
      )}
    </div>
  );
};

export default StocksTable;
