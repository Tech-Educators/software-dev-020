// if we use {}'s in the parenthesis, we can skip writing props.foo and props.blah and just write foo

export function Painting({description, imgSrc}) {
    return (
        <div>
            <img src={imgSrc} />
            <p>{description}</p>
        </div>
    )
}


// export const Painting = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <img src={props.imgSrc} />
//             <p>{props.description}</p>
//         </div>
//     )
// }