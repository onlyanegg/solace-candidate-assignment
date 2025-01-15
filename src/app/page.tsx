"use client";

import { useEffect, useState, useMemo } from "react";
import type {ChangeEvent} from 'react'

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const something = async () => {
      const resp = await fetch("/api/advocates")
      const json = await resp.json()

      setAdvocates(json.data);
    }

    something()
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  };

  const onClick = () => {
    setSearchTerm("")
  };

  const filteredAdvocates = useMemo(() => {
    if (searchTerm === "") {
      return advocates
    }
    
    const intSearchTerm = parseInt(searchTerm)
    if (!Number.isNaN(intSearchTerm)) {
      return advocates.filter(advocate => advocate.yearsOfExperience >= intSearchTerm)
    }

    const lowerSearchTerm = searchTerm.toLowerCase()
    return advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(lowerSearchTerm) ||
        advocate.lastName.toLowerCase().includes(lowerSearchTerm) ||
        advocate.city.toLowerCase().includes(lowerSearchTerm) ||
        advocate.degree.toLowerCase().includes(lowerSearchTerm) ||
        advocate.specialties.reduce((acc, cur) => acc || cur.toLowerCase().includes(lowerSearchTerm), false)
      );
    });
  }, [advocates, searchTerm])

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: {searchTerm}
        </p>
        <input style={{ border: "1px solid black" }} onChange={onChange} value={searchTerm}/>
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate, idx) => {
            return (
              <tr key={advocate.id} style={{backgroundColor: idx % 2 === 0 ? "white" : "lightgray"}}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
