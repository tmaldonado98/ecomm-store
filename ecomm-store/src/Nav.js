import './Nav.css';
export default function Nav(){
    return(
    <section id='container-nav'>
        <h1>David Maldonado Art</h1>
        <div>
            <ul id='nav-items'>
                <li>products</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <button>
                cart <span>0</span>
            </button>
        </div>
        <div>
        </div>
    </section>
    )
}

