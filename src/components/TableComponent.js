import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, Typography } from '@mui/material';

const data = [
  {
    detection: 'SQL Injection',
    threatLevel: 3, // High
    model: 'Embezzlement',
    timestamp: '2023-10-23 10:15:30',
    ipAddress: '86.167.165.78',
  },
  {
    detection: 'Cross-Site Scripting (XSS)',
    threatLevel: 2, // Medium
    model: 'Insider Trading',
    timestamp: '2023-10-22 14:45:00',
    ipAddress: '8.8.8.8',
  },
  {
    detection: 'Data Exfiltration',
    threatLevel: 4, // Urgent
    model: 'Bank Fraud',
    timestamp: '2023-10-21 08:30:15',
    ipAddress: '203.27.235.25',
  },
  {
    detection: 'Phishing Attack',
    threatLevel: 1, // Low
    model: 'Identity Theft',
    timestamp: '2023-10-20 16:20:45',
    ipAddress: '217.194.215.38',
  },
  {
    detection: 'Malware Infection',
    threatLevel: 0, // None
    model: 'Tax Evasion',
    timestamp: '2023-10-19 12:10:00',
    ipAddress: '88.178.28.226',
  },
  {
    detection: 'Insider Threat',
    threatLevel: 2, // Medium
    model: 'Money Laundering',
    timestamp: '2023-10-18 17:55:30',
    ipAddress: '133.168.86.42',
  },
  {
    detection: 'Denial of Service (DoS)',
    threatLevel: 3, // High
    model: 'Embezzlement',
    timestamp: '2023-10-17 11:40:15',
    ipAddress: '187.21.145.92',
  },
];

const threatLevelColors = [
  'gray', // None
  'green', // Low
  'orange', // Medium
  'red', // High
  'darkred', // Urgent
];

const TableComponent = () => {
  const [countryFlags, setCountryFlags] = useState({});

  useEffect(() => {
    // Function to fetch country information from IP addresses
    const fetchCountryInfo = async () => {
      const ipAddresses = data.map((row) => row.ipAddress);
      const flags = {};
      for (const ipAddress of ipAddresses) {
        try {
          const response = await fetch(`https://ipinfo.io/${ipAddress}/json?token=f7e994c369aefe`);
          
          const data = await response.json();
          if (data.country) {
            flags[ipAddress] = `https://flagsapi.com/${data.country}/flat/24.png`;
          }
        } catch (error) {
          console.error('Error fetching IP information:', error);
        }
      }
      setCountryFlags(flags);
    };

    fetchCountryInfo();
  }, []);

  return (
    <TableContainer className='hide-scrollbar' style={{ width: '60vw', height: '25vw', margin: '0px', marginLeft: '20px', border: "1px solid lightgray", borderRadius:"20px", padding:"10px", boxSizing:"border-box", overflow:"auto" }}>
      <Typography variant="h5" style={{ margin: '8px', display:"inline" }}>
        Detected Threats
      </Typography>
      <Link style={{ float: 'right', margin: '8px', display:"inline" }}>See All</Link>
      <Table aria-label="Threats Table">
        <TableHead>
          <TableRow>
            <TableCell className='table-header-cell'>Detection</TableCell>
            <TableCell className='table-header-cell'>Threat Level</TableCell>
            <TableCell className='table-header-cell'>Model</TableCell>
            <TableCell className='table-header-cell'>Timestamp</TableCell>
            <TableCell className='table-header-cell'>IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='table-body-cell'>{row.detection}</TableCell>
              <TableCell className='table-body-cell'>
                <span style={{ color: threatLevelColors[row.threatLevel] }}>
                  {['None', 'Low', 'Medium', 'High', 'Urgent'][row.threatLevel]}
                </span>
              </TableCell>
              <TableCell className='table-body-cell'>{row.model}</TableCell>
              <TableCell className='table-body-cell'>{row.timestamp}</TableCell>
              <TableCell className='table-body-cell'>
                <div style={{display:"flex", alignItems:"center" }}>
                  {countryFlags[row.ipAddress] && (
                    <div
                      style={{
                        width: '1rem',  // Set the desired width for the circular container
                        height: '1rem', // Set the desired height for the circular container
                        borderRadius: '1rem', // Make it circular
                        border: '0.5px solid #ccc',
                        overflow: 'hidden', // Clip the content to the circular shape
                        display: 'inline-block', // Display the container inline
                        marginRight: '8px', // Add some spacing between the flag and IP address
                        boxSizing:"border-box"
                        
                      }}
                    >
                      <img
                        src={countryFlags[row.ipAddress]}
                        alt={`Flag for ${row.ipAddress}`}
                        style={{
                          width: '100%',
                          height: '140%',
                          position: "relative",
                          top: "-21%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  )}
                  {row.ipAddress}
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
