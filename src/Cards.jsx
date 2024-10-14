import {Card} from './Card'
import img from './img.png'

export function Cards (){
    return(
        <div className="Cards">
            <Card title = {'Card title'} desk={"Some quick example text to build on the card title and make up the bulk of the card's content."} link = {'Go somewhere'}>
                <img src={img} className="card-img-top" alt="..."/>
            </Card>            
            <Card title = {'Card Special title treatment'} desk={"With supporting text below as a natural lead-in to additional content."} link = {'Go somewhere'}>
            </Card>
        </div>
    )
}