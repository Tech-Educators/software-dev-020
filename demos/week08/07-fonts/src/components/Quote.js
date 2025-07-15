import { rock_salt } from "@/app/layout"

export default function Quote() {
    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '2rem'}}>
            As Gregor Samsa awoke <span className={`${rock_salt.className} text-cyan-400`}>one morning</span> from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were <span>pitifully thin</span> compared to the rest of his bulk, waved helplessly before his eyes.
            <br />
            <br />
            <p className="font-honk bg-sam">What has happened to me? he thought.</p>
            </p>
        </div>
    )
}