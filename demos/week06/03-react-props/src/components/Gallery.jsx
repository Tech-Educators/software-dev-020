import { Painting } from "./Painting";

export default function Gallery() {
    return (
        <div>
            <h2>Gallery:</h2>
            <div>
                <Painting description="Wow, this is a great painting!!" imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/33/The_Roses_of_Heliogabalus.jpg"/>
                <Painting description="This one is really pretty" imgSrc="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/1/28/1422455251599/b1629046-4000-4e9d-bb75-19c5e631cfe0-1809x2040.jpeg?width=445&dpr=1&s=none&crop=none" />
                <Painting description="one of my favs" imgSrc="https://i.ebayimg.com/images/g/WUkAAOSw4f9mp661/s-l1200.jpg" />
            </div>
        </div>
    )
}
// this is how we might have done it in vanilla js
//Painting("ssrc", "this is a painting")


// This is how we do it in react
//<Painting imgSrc={``} description=""/>