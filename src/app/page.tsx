"use client"
import { CldUploadButton } from 'next-cloudinary';


export default function Home() {


  return (
   <div> 
    <CldUploadButton uploadPreset="nu0fy2vh"
    options={{
      folder: "fileUploaderTest",
    }} 
    />
   </div>
  );
}
