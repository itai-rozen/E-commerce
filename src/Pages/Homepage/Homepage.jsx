import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export default class Homepage extends React.Component {

    renderProducts = () => {
        const categories = [
            {name:'Instruments', pathName:'instruments', imgSrc:`images/instruments/category.png`},
            {name:'Hiking Equipment',pathName:'natureEquipment', imgSrc: `images/nature-equip/category.png`},
            {name:'Cars', pathName:'cars', imgSrc: `images/cars/category.png`},
            {name:'Clothes',pathName:'clothes', imgSrc: `images/clothes/category.png`}
        ]
        return categories.map(category => {

            return <Link key={category.name} to={`/${category.pathName}`}>
               <div  style={{backgroundImage:`url(${category.imgSrc})`}} className="category-card">
                   <div className="header-container">
                   <h2 className="categpry-header">{category.name}</h2>
                   </div>
                   <div className="sale">Black friday sales!</div> 
               </div>
           </Link>
            })
        }
    

    componentDidMount = () => {
        this.renderProducts()
    }

    render(){
        return <div className='categories-container'>
            {this.renderProducts()}
        </div>

    }
}