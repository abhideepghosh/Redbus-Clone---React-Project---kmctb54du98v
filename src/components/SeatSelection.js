import React from "react";
import { useSelector } from "react-redux";
import "./../styles/SeatSelection.css";

const SeatSelection = () => {
  const travelData = useSelector((state) => state.travel.value);
  console.log(travelData);
  return (
    <div className="seatSelector">
      <h1>Seat Selection</h1>
      <div className="grid-layout">
        <div className="grid-item grid-item-1">item 1 </div>
        <div className="grid-item grid-item-2">item 2</div>
        <div className="grid-item span-3 grid-item-3">item 3</div>
        <div className="grid-item grid-item-4">item 4</div>
        <div className="grid-item span-2 grid-item-5">item 5</div>
        <div className="grid-item grid-item-6">item 6</div>
        <div className="grid-item grid-item-7">item 7</div>
        <div className="grid-item grid-item-8">item 8</div>
        <div className="grid-item grid-item-9">item 9</div>
        <div className="grid-item span-2 grid-item-10">item 10</div>
        <div className="grid-item grid-item-11">item 11</div>
        <div className="grid-item grid-item-12">item 12</div>
        <div className="grid-item span-2 grid-item-13">item 13</div>
        <div className="grid-item grid-item-14">item 14</div>
        <div className="grid-item grid-item-15">item 15</div>
        <div className="grid-item grid-item-16">item 16</div>
        <div className="grid-item span-3 grid-item-17">item 17</div>
        <div className="grid-item grid-item-18">item 18</div>
        <div className="grid-item grid-item-19">item 19</div>
        <div className="grid-item grid-item-20">item 20</div>
        <div className="grid-item span-2 grid-item-21">item 21</div>
        <div className="grid-item grid-item-22">item 22</div>
        <div className="grid-item grid-item-23">item 23</div>
        <div className="grid-item grid-item-24">item 24</div>
        <div className="grid-item grid-item-25">item 25</div>
        <div className="grid-item span-3 grid-item-26">item 26</div>
        <div className="grid-item grid-item-27">item 27</div>
        <div className="grid-item grid-item-28">item 28</div>
        <div className="grid-item grid-item-29">item 29</div>
        <div className="grid-item grid-item-30">item 30</div>
        <div className="grid-item grid-item-31">item 31</div>
        <div className="grid-item grid-item-32">item 32</div>
        <div className="grid-item grid-item-33">item 33</div>
        <div className="grid-item grid-item-34">item 34</div>
        <div className="grid-item grid-item-35">item 35</div>
        <div className="grid-item grid-item-36">item 36</div>
        <div className="grid-item grid-item-37">item 37</div>
        <div className="grid-item grid-item-38">item 38</div>
        <div className="grid-item grid-item-39">item 39</div>
      </div>
    </div>
  );
};

export default SeatSelection;
