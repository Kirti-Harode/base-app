import React from 'react';
import Sidebar from './sidebar';
import BellIcon from '../assets/bellIcon.png';
import {useState} from 'react';
import { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import excel from '../assets/excel.png';
import * as XLSX from 'xlsx';
import { CgProfile } from "react-icons/cg";

export default function UploadPage() {
	const [selectedFile, setSelectedFile] = useState([]);
  const [excelData, setExcelData] = useState(null);
  const [error, setError] = useState(null);
	const [isUploaded, setIsUploaded] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
		setSelectedFile(acceptedFiles[0]);
    if (file) {
      if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setError(null);
        const reader = new FileReader();

        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          setExcelData(jsonData);
        };

        reader.readAsArrayBuffer(file);
      } else {
        setError('Please upload a valid CSV or XLSX file.');
      }
    }
  }, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv, .xlsx',
    maxFiles: 1,
  });

	const handleFileSubmit=(e)=>{
		e.preventDefault();
		if(selectedFile!==null){
			setIsUploaded(true);
		}
	}

  const handleSelectChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

	return (
		<div style={{
			display: 'flex',
		}}>
			<Sidebar />
			<div style={{
				backgroundColor: '#F8FAFF',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				marginLeft: '210px',
				height: '100vh'
			}}>
				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '82%',
					minWidth: '200px',
					height: '40px',
					position: 'fixed',
					backgroundColor: '#F8FAFF',
					padding: '55px 50px 30px 30px',
				}}>
					<div style={{
						fontFamily: 'Figtree',
						fontSize: '24px',
						fontWeight: '600'
					}}>
						Upload CSV
					</div>
					<div style={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px'
					}}>
						<img src={BellIcon} style={{width: '22px'}}alt=''/>
						<CgProfile  style={{fontSize: '25px'}}/>
					</div>
				</div>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '596px',
					height: '367px',
					borderRadius: '8px',
					backgroundColor: 'white',
					alignSelf: 'center',
					marginTop: '140px',
				}}>
					<div {...getRootProps()} 
						style={{
							borderStyle: 'dashed',
							borderRadius: '8px',
							borderColor: '#EBEBEB',
							width: '564px',
							height: '260px',
							marginBottom: '15px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '20px'
					}}>
						<input {...getInputProps()} />
							<img src={excel} style={{width: '30px'}}alt=''/>
							{
								isDragActive ?
								<p>Drop the files here ...</p> :
								<div>
									{ (selectedFile && excelData) ? 
										<div style={{
											display: 'flex',
											flexDirection: 'column'
										}}>
											{selectedFile.name}
											<button 
												style={{ color: 'red', marginLeft: '5px', fontSize: '14px', marginTop: '2px' }} 
												onClick={() => {setSelectedFile(null); setExcelData(null)}}
											>
												remove
											</button>
										</div>
										: 
										<div>
											<div style={{color: '#999CA0'}}>Drop your excel sheet here, or 
												<p style={{color: '#605BFF', cursor: 'pointer'}}>browse</p>
											</div>
										</div>
									}
								</div>
							}
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>
					<button style={{
						backgroundColor: '#605BFF',
						width: '564px',
						height: '56px',
						borderRadius: '8px',
						color: '#FFFFFF',
						fontFamily : 'Figtree',
						fontSize: '14px',
						fontWeight: '600',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '10px',
						cursor: 'pointer'
						}}
						onClick={handleFileSubmit}
						disabled={excelData === null}
					>
						<LuUpload style={{fontSize: '16px'}}/>
						Upload
					</button>
				</div>
				{	isUploaded &&
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '20px'
					}}>
						<h1 style={{ 
							display: 'flex', 
							margin: '20px 10px',
							fontFamily: 'Figtree',
							fontSize: '24px',
							fontWeight: '600'
							}}>
								Uploads
							</h1>
						<div style={{
							backgroundColor: '#F5F5F5',
							width: '100%',
							margin: '10px'
						}}>
							<table>
								<thead>
									<tr>
										{excelData[0].map((header, index) => (
											<th key={index}>{header}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{excelData.slice(1).map((row, rowIndex) => (
										<tr 
											key={rowIndex} 
											style={{
												backgroundColor: '#FFFFFF', 
												borderRadius: '8px',
											}}
										>
											{row.map((cell, cellIndex) => (
												<td key={cellIndex}>{cell}</td>
											))}
											<td>
												<select value={selectedOptions[rowIndex]} onChange={(e) => handleSelectChange(rowIndex, e.target.value)}>
													<option value="">Select Option</option>
													<option value="Option 1">Option 1</option>
													<option value="Option 2">Option 2</option>
												</select>
											</td>
											<td>{selectedOptions[rowIndex]}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div> 
				}
			</div>
		</div>
	)
}
