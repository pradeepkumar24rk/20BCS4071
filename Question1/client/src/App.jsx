import { useEffect, useState } from 'react'
import Table from "./Taable"
import './App.css'
function App() {
  const result=[{"trainName":"Lucknow Exp","trainNumber":"2347","departureTime":{"Hours":17,"Minutes":33,"Seconds":0},"seatsAvailable":{"sleeper":5,"AC":1},"price":{"sleeper":310,"AC":443},"delayedBy":12},{"trainName":"Pune Exp","trainNumber":"2342","departureTime":{"Hours":23,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":734,"AC":1734},"delayedBy":17},{"trainName":"Delhi Exp","trainNumber":"2343","departureTime":{"Hours":9,"Minutes":45,"Seconds":0},"seatsAvailable":{"sleeper":32,"AC":1},"price":{"sleeper":368,"AC":1368},"delayedBy":3},{"trainName":"Bokaro Exp","trainNumber":"2347","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":55,"AC":0},"price":{"sleeper":148,"AC":338},"delayedBy":7},{"trainName":"Chennai Exp","trainNumber":"2344","departureTime":{"Hours":21,"Minutes":35,"Seconds":0},"seatsAvailable":{"sleeper":3,"AC":1},"price":{"sleeper":397,"AC":515},"delayedBy":15},{"trainName":"Mumbai Exp","trainNumber":"2343","departureTime":{"Hours":22,"Minutes":37,"Seconds":0},"seatsAvailable":{"sleeper":8,"AC":15},"price":{"sleeper":550,"AC":650},"delayedBy":16},{"trainName":"Patna Exp","trainNumber":"2340","departureTime":{"Hours":6,"Minutes":10,"Seconds":0},"seatsAvailable":{"sleeper":10,"AC":1},"price":{"sleeper":472,"AC":623},"delayedBy":0},{"trainName":"Panjim Exp","trainNumber":"2349","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":2,"AC":1},"price":{"sleeper":219,"AC":392},"delayedBy":9},{"trainName":"Cochin Exp","trainNumber":"2348","departureTime":{"Hours":15,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":677,"AC":964},"delayedBy":11},{"trainName":"Amritsar Exp","trainNumber":"2346","departureTime":{"Hours":19,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":15,"AC":10},"price":{"sleeper":375,"AC":575},"delayedBy":13},{"trainName":"Kolkata Exp","trainNumber":"2345","departureTime":{"Hours":20,"Minutes":15,"Seconds":0},"seatsAvailable":{"sleeper":16,"AC":70},"price":{"sleeper":570,"AC":670},"delayedBy":14},{"trainName":"Gandhinagar Exp","trainNumber":"2341","departureTime":{"Hours":7,"Minutes":15,"Seconds":0},"seatsAvailable":{"sleeper":15,"AC":5},"price":{"sleeper":412,"AC":645},"delayedBy":1},{"trainName":"Aizawl Exp","trainNumber":"2342","departureTime":{"Hours":8,"Minutes":30,"Seconds":0},"seatsAvailable":{"sleeper":18,"AC":7},"price":{"sleeper":1202,"AC":1833},"delayedBy":2},{"trainName":"Jodhpur Exp","trainNumber":"2344","departureTime":{"Hours":11,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":33,"AC":13},"price":{"sleeper":643,"AC":754},"delayedBy":4},{"trainName":"Sikkim Exp","trainNumber":"2345","departureTime":{"Hours":11,"Minutes":23,"Seconds":0},"seatsAvailable":{"sleeper":4,"AC":4},"price":{"sleeper":591,"AC":1367},"delayedBy":5},{"trainName":"Cuttack Exp","trainNumber":"2346","departureTime":{"Hours":12,"Minutes":3,"Seconds":0},"seatsAvailable":{"sleeper":10,"AC":1},"price":{"sleeper":464,"AC":613},"delayedBy":6},{"trainName":"Mysore Exp","trainNumber":"2347","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":2,"AC":2},"price":{"sleeper":520,"AC":653},"delayedBy":8},{"trainName":"Srinagar Exp","trainNumber":"2349","departureTime":{"Hours":14,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":987,"AC":1074},"delayedBy":10},{"trainName":"Hyderabad Exp","trainNumber":"2341","departureTime":{"Hours":23,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":554,"AC":1854},"delayedBy":5}]
  const trainNames=result.map(item=>item["trainName"])
  function createData(
    trainName,
    trainNumber,
    departureTime,
    seatsAvailable,
    price,
  ) {
    return { trainName, trainNumber, departureTime, seatsAvailable, price };
  }
  const row=result.map(item=>{
    return createData(item.trainName,item.trainNumber,item.departureTime,item.seatsAvailable,item.price)
  })
  return (
    <>
      <Table rows={row}/>
      </>
  )
}

export default App