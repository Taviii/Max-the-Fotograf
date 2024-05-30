import profilePic from './assets/max profilowe.jpg'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Max profile pic"></img>
            <h2 className='card-title'>Max</h2>
            <p className='card-text'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui sapien, commodo a malesuada ac, laoreet ac lorem. Nunc vitae dolor dapibus, sagittis enim ac, gravida purus. Ut eget accumsan quam. Sed scelerisque sed odio sed mattis. In elementum metus sit amet leo dictum, eget accumsan quam tempor. Donec malesuada, dolor vitae eleifend maximus, sapien orci sodales est.</p>
        </div>
    );
}

export default Card