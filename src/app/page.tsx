"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';


export default function Home() {


  return (
   <div> 
    <div>
      <CldUploadButton uploadPreset="nu0fy2vh"
    options={{
      folder: "fileUploaderTest",
    }} 
    />
    </div>

    <div>
   
 
 <CldUploadWidget signatureEndpoint="api/image/signedWidget"
  options={{
  folder: "fileUploaderTest",
  }} 
>
  
   {({ open }) => {
     return (
       <button onClick={() => open()}>
         Upload an Image
       </button>
     );
   
    
  
   }
   
   }
 </CldUploadWidget>
    </div>
    
   </div>
  );
}
