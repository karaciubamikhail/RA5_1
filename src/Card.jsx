export function Card ({children , title, desk, link}){
    return(
        <div className="card" style={{width:18+'rem',marginBottom:20+'px'}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desk}</p>
                <a href="#" className="btn btn-primary">{link}</a>
            </div>
        </div>
    )
}