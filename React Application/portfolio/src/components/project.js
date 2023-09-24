import React from "react"
import Header from './header';
import Footer from './footer';

import img1 from '../images/project/servlet.png'
import img2 from '../images/project/Screenshot 2023-05-23 at 23-44-00 Home.png'

export default function Project()
{
    return(
        <>
            <Header/>
            <div className="project">
        <img src={img1} width={"200px"} height={"200px"} />
        <div style={{paddingleft: "30px"}}>
            <br/>
            <p className="txt7">Get Image(Servlet)</p>
            <br/>
            <p className="txt6">
                Our image retrieval page leverages servlet technology to efficiently fetch 
                images from our server. With a simple and user-friendly interface, you can easily specify the 
                image you want to retrieve by providing relevant details or parameters.
                Once the servlet successfully fetches the image, it is seamlessly displayed on the page, utilizing modern HTML 
                and CSS techniques for a visually appealing and responsive experience across different devices.
            </p>
        </div>
      </div>
      <div className="project">
      <img src={img2} width={"200px"} height={"200px"} />
        <div style={{paddingleft: "30px"}}>
            <br/>
            <p className="txt7">Dynamic Profile Page</p>
            <br/>
            <p className="txt6">
                Our platform offers a dynamic profile with a login page, allowing users to create personalized 
                profiles and securely access them. Users can customize their profiles, including uploading a profile picture, 
                sharing a bio, and updating personal information. The platform prioritizes privacy and security, while also facilitating social interaction 
                and networking through features like direct messaging and public walls. Stay connected, showcase your identity, and engage with others in our vibr/ant online community.
            </p>
        </div>
      </div>
            <Footer/>
        </>
    )
}