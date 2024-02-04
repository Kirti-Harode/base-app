import React from 'react';
import Sidebar from './sidebar';
import BellIcon from '../assets/bellIcon.png';
import ProfilePhoto from '../assets/profilePhoto.png';
import {useState} from 'react';
import { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import excel from '../assets/excel.png';
import * as XLSX from 'xlsx';

export default function UploadPage() {
	const [files, setFiles] = useState([]);
	const [excelData, setExcelData] = useState([]);
	const [isUploaded, setIsUploaded] = useState(false);

	const onDrop = useCallback(acceptedFiles => {	
		if(acceptedFiles?.length){
			setFiles(previousFiles => [
				...previousFiles,
				...acceptedFiles.map(file => 
						Object.assign(file, {preview: URL.createObjectURL(file)})
					)
			])
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop });

	const handleFileSubmit=(e)=>{
    e.preventDefault();
    if(files!==null){
      const workbook = XLSX.read(files,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0,10));
			setIsUploaded(true);
    }
  }

	return (
		<div style={{
			display: 'flex',
		}}>
			<Sidebar />
			<div style={{
				backgroundColor: '#F8FAFF',
				width: '100%',
				paddingTop: '30px',
				paddingLeft: '30px',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px'
			}}>
				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '800px',
					minWidth: '200px',
					height: '32px',
					position: 'fixed'
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
						<img src={BellIcon} style={{width: '20px'}}alt=''/>
						<img src={ProfilePhoto} style={{width: '30px'}}alt=''/>
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
					marginTop: '90px'
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
						{
							isDragActive ?
								<p>Drop the files here ...</p> :
								<div>
									<img src={excel} style={{width: '30px'}}alt=''/>
									<div style={{color: '#999CA0'}}>Drop your excel sheet here, or 
										<p style={{color: '#605BFF', cursor: 'pointer'}}>browse</p>
									</div>
								</div>
						}
						<div >
							{
								files.map((file, index )=> (
									<p key={index}>{file.name}</p>
								))
							}
						</div>
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
					>
						<LuUpload style={{fontSize: '16px'}}/>
						Upload
					</button>
				</div>
					{	isUploaded ? 
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						
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
								<tr>
									<th>SI No.</th>
									<th>Links</th>
									<th>Prefix</th>
									<th>Add Tags</th>
									<th>Selected Tags</th>
								</tr>
								{
									excelData.map((data, index) => (
										<tr key={index}>
											<td>{data.SI}</td>
											<td>{data.Links}</td>
											<td>{data.Prefix}</td>
											<td>{data.AddTags}</td>
											<td>{data.SelectedTags}</td>
										</tr>
									))
								}
							</table>
						</div>
					</div> 
					: <div></div>}
			</div>
		</div>
	)
}
