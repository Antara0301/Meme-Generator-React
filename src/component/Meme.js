import React, {useState, useEffect} from "react"

export default function Meme() {

 let [imgUrl, setImgUl] = useState([])

 let [meme, setMeme]=useState({
    topText: "",
    bottomText: "",
    randomImage:"http://i.imgflip.com/1bij.jpg"
 })
 let [allMemeImages, setAllMemeImages] = useState([])
 useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json() )
    .then(data => setAllMemeImages(data.data.memes))
 },[])

    function getMemeImage(){
        let randomNumber= Math.floor(Math.random()*allMemeImages.length)
        let url=allMemeImages[randomNumber].url
        setMeme(prev =>
        {  
           return {
             ...prev,
             randomImage: url,
             topText:"",
             bottomText:""
           }
          
        } ) 
    
    }

    function handleText(event){
        const {name, value} = event.target
        setMeme(prev => {
            return{
            ...prev,
            [name]:value
            
            }
          
        })
    
    }
   
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleText}
                    
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                   value={meme.bottomText}
                   onChange={handleText}
                />
                <button 
                    className="form--button" 
                onClick={getMemeImage}>
                    Get a new meme image 🖼 
                </button>
              
            </div>
            <div className="meme">
            <img src={meme.randomImage}  className="meme--image"/>
                <h2 
                type="text"
                className="meme--text top">{meme.topText}
                   </h2>
                <h2 
                type="text"
                className="meme--text bottom"
                
                
                >{meme.bottomText}</h2>
                </div>
        </main>
    )
}