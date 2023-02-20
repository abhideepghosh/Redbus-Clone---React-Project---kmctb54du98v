import React, { useEffect, useState } from "react";
import "./../styles/SearchBus.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setTravelData } from "../features/Travel";

const SearchBus = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchUrl = (from, to) =>
    `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`;
  const allBussesUrl = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`;

  const travelData = useSelector((state) => state.travel.value);
  const [responseData, setResponseData] = useState([]);

  const ratingGenerator = () => {
    const min = 7;
    const max = 9;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${randomNum}/10`;
  };

  const getAllResults = async () => {
    const response = await fetch(allBussesUrl);
    const data = await response.json();
    const finalData = data.map((e) => {
      e.rating = ratingGenerator();
      return e;
    });
    setResponseData(finalData);
  };

  const handleSelected = (e) => {
    dispatch(
      setTravelData({
        ...travelData,
        price: e.ticketPrice,
      })
    );
    navigate("/seatselection");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        searchUrl(travelData.from.toLowerCase(), travelData.to.toLowerCase())
      );
      const data = await response.json();
      const finalData = data.map((e) => {
        e.rating = ratingGenerator();
        return e;
      });
      setResponseData(finalData);
    })();
    console.log("Optimization Check");
  }, [params]);
  return (
    <div className="searchResults">
      <div className="flexBox">
        <div className="equalHMVWrap eqWrap">
          <div className="equalHMV eq">
            <span className="sortBySpan">SORT BY:</span>
          </div>
          <div className="equalHMV eq">
            <span className="sortBySpan">DEPARTURE</span>
          </div>
          <div className="equalHMV eq">
            <span className="sortBySpan">ARRIVAL</span>
          </div>
          <div className="equalHMV eq">
            <span className="sortBySpan">RATING</span>
          </div>
          <div className="equalHMV eq">
            <span className="sortBySpan">PRICE</span>
          </div>
        </div>
      </div>
      {responseData.length > 0 ? (
        <div className="flexBox">
          <div className="equalHMVWrap eqWrap">
            <div className="equalHMV eq">BUS NAME</div>
            <div className="equalHMV eq">DEPARTURE</div>
            <div className="equalHMV eq">ARRIVAL</div>
            <div className="equalHMV eq">RATING</div>
            <div className="equalHMV eq">PRICE</div>
          </div>
          {responseData.map((e) => (
            <div
              className="equalHMVWrap eqWrap hov clickCursor"
              key={e.id}
              onClick={() => {
                handleSelected(e);
              }}
            >
              <div className="equalHMV eq">{e.busName}</div>
              <div className="equalHMV eq">{e.departureTime}</div>
              <div className="equalHMV eq">{e.arrivalTime}</div>
              <div className="equalHMV eq">
                <span className="ratingSpan">{e.rating}</span>
              </div>
              <div className="equalHMV eq">{e.ticketPrice}/-</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flexBox">
          <div className="equalHMVWrap eqWrap">
            <div className="equalHMV eq">No Result Found.</div>
            <div className="equalHMV eq">
              <span className="sortBySpan clickCursor" onClick={getAllResults}>
                Show All Bus Routes
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBus;
