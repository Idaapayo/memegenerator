import "../static/css/form.css"
import "../memesdata"
import memesdata from "../memesdata";
import React, {useState} from "react"


export default function Form(){
    const [memeImage, setMemeImage] = useState("")


    function getRandomImage(){
        let imageArray = memesdata.data.memes.map(a => a.url)
        const randomNumber = Math.floor(Math.random() * imageArray.length)
        const randomUrl = imageArray[randomNumber]
        setMemeImage(randomUrl)
        console.log(randomUrl)
    }

    return(
        <div className="container w-50 pt-5">
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="top-text"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="bottom-text"/>
                        </div>
                    </div>
                </div>
                <img className="img-resize pt-2 pb-3" src={memeImage} alt="memeImage"/>

                <button type="submit" className="btn color-btn" onClick={getRandomImage}>Get new meme image</button>
            </div>

        </div>
    )
}