import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { totalData } from "../fakeData/categoryitem";
import catItems from "../fakeData/categoryitem";
import Map from "../Map/Map";

//////

const totalData = [
  {
    seat: "Seat A",
    // no: 1,
    Price: 250,
    daily: "daily",
  },
  {
    seat: "Seat B",
    // no: 1,
    Price: 200,
    daily: "daily",
  },
  {
    seat: "Seat C",
    // no: 1,
    Price: 180,
    daily: "daily",
  },
  {
    seat: "Seat D",
    // no: 1,
    Price: 150,
    daily: "daily",
  },
  {
    seat: "Seat E",
    // no: 2,
    Price: 100,
    daily: "daily",
  },
  {
    seat: "Seat F",
    // no: 2,
    Price: 250,
    daily: "weekly",
  },
  {
    seat: "Seat G",
    // no: 2,
    Price: 200,
    daily: "weekly",
  },
  {
    seat: "Seat H",
    // no: 2,
    Price: 180,
    daily: "weekly",
  },
  {
    seat: "Seat I",
    // no: 3,
    Price: 150,
    daily: "weekly",
  },
  {
    seat: "Seat J",
    // no: 3,
    Price: 100,
    daily: "weekly",
  },
  {
    seat: "Seat G",
    // no: 3,
    Price: 200,
    daily: "Monthly",
  },
  {
    seat: "Seat H",
    // no: 3,
    Price: 180,
    daily: "Monthly",
  },
  {
    seat: "Seat I",
    // no: 4,
    Price: 150,
    daily: "Monthly",
  },
  {
    seat: "Seat J",
    // no: 4,
    Price: 100,
    daily: "Monthly",
  },
  {
    seat: "Seat H",
    // no: 4,
    Price: 180,
    daily: "Yearly",
  },
  {
    seat: "Seat I",
    // no: 4,
    Price: 150,
    daily: "Yearly",
  },
  {
    seat: "Seat J",
    // no: 4,
    Price: 100,
    daily: "Yearly",
  },
];

const CategoryDetails = () => {
  let { id } = useParams();
  const [categoryItem, setCategoryItem] = useState();
  const [inputData, setInputData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [display, setDisplay] = useState(true);
  const [data, setData] = useState(totalData);

  const findingData = data?.filter(
    (text) => text.daily.toLowerCase() == id.toString().toLowerCase()
  );

  console.log(inputData);
  const handleSearch = (e) => {
    e.preventDefault();
    setCategoryItem(catItems);
    setDisplay(false);
    setToggle(true);
  };
  return (
    <div className='container mt-5'>
      <div className='row text-white'>
        <div className='col-md-4'>
          <div className='card bg-warning'>
            <div className='card-body'>
              {display && (
                <form>
                  <div className='form-group'>
                    <label htmlFor=''>From</label>
                    <input
                      className='form-control'
                      type='text'
                      name='formPlace'
                      id=''
                      onBlur={(e) =>
                        setInputData({
                          ...inputData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder='Komlapur'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>From</label>
                    <input
                      className='form-control'
                      type='text'
                      onBlur={(e) =>
                        setInputData({
                          ...inputData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name='toPlace'
                      id=''
                      placeholder='Chittagong'
                    />
                  </div>
                  {/* <button
                 
                >
                  Search
                </button> */}
                  <input
                    type='submit'
                    value='Search'
                    className='btn btn-primary btn-sm'
                    onClick={handleSearch}
                  />
                </form>
              )}
              <hr />
              <br />
              <ul>
                {toggle && (
                  <li>
                    <span>{inputData.formPlace}</span>
                    <span className='pl-4'>{inputData.toPlace}</span>
                  </li>
                )}
                {toggle &&
                  findingData &&
                  findingData.map((findingData, i) => (
                    <li key={i}>
                      <span>{findingData.seat}</span>{" "}
                      <span className='pl-2'>{findingData.Price}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
