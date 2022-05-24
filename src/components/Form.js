import "../static/css/form.css"
import "../memesdata"
import React, {useState, useEffect} from "react"


export default function Form(){
    const [memeData, setMemeData] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])



    console.log(allMemeImages)

    function getRandomImage(){
        let imageArray = allMemeImages.map(a => a.url)
        const randomNumber = Math.floor(Math.random() * imageArray.length)
        const randomUrl = imageArray[randomNumber]
        setMemeData(prevMemeData => ({ ...prevMemeData ,randomImage:randomUrl}))
        // console.log(randomUrl)
    }

    function handleChange(event){
        const{name, value} = event.target
        setMemeData(prevMemeDate => ({...prevMemeDate, [name]: value}))
    }

    return(
        <div className="container w-50 pt-5">
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   placeholder="top-text"
                                   value={memeData.topText}
                                   name="topText"
                                   onChange={handleChange}
                            />

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputPassword1"
                                   placeholder="bottom-text"
                                   value={memeData.bottomText}
                                   name="bottomText"
                                   onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="meme">
                    <img className="img-resize pt-2 pb-3" src={memeData.randomImage} alt="memeImage"/>
                    <h2 className="meme--text top">{memeData.topText}</h2>
                    <h2 className="meme--text bottom">{memeData.bottomText}</h2>
                </div>


                <button type="submit" className="btn color-btn" onClick={getRandomImage}>Get new meme image</button>
            </div>

        </div>
    )
}