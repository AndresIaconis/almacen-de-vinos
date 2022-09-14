import React, {useState, useEffect} from 'react'

export default, {useState} function Fetch() {
    useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
    .then ((res) => res.json ())
    .then ((json) => console.log(json))
    .catch ((e) => console.log(e))
    .finally (() => console.log('asdasdas asdasdsad'));
}, [])
    return (
    <div>Fetch</div>;
  )
}