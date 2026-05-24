// import './App.css'

function Hello() {

    // const name = "yachi"
    // const headingStyle = {
    // color:"red", // textAlign:"center",
    // backgroundColor:"pink", // fontSize: "40px" // }

    // const fruits = ["Apple", "Banana", " Orenge"]
   

    const getName = (yourname) => {
        return yourname;
    };

    const handleInput = (event) => {
        console.clear();
        console.log("value :", event.target.value);
    };

    function handleClick() {
        alert("button was clicked!");
    }

    const name1 = "yachi...";
    const name2 = "yachuu...";

    const handleMouseOver = () => console.log("Mouse is over text!");
    const handleDoubleClick = () => console.log("Text double clicked!");

    return (
        <>
            <h1>Hello {getName(name1)}</h1>
            <h2>by {getName(name2)}</h2>

               {/* Fruit List */}
{/*        
            <h2>Fruit List</h2>
            <ul>
                {fruits.com((fruit, index)=>(
                    <li>{index} - {fruit}</li>
                ))}
            </ul> */}
    
    )

            <p
                onMouseOver={handleMouseOver}
                onDoubleClick={handleDoubleClick}
            >
                Lorem ipsum dolor sit amet.
            </p>

            <button onClick={handleClick}>Click Me</button>

            <button onClick={() => alert("Hello from inline function")}>
                Say Hello
            </button>

            {/* 
            <h2 style={{ color:"red", textAlign:"center" }}>
                Hello
            </h2>

            <p className='test'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>    
            */}

            <br />

            <input
                type="text"
                onChange={handleInput}
                placeholder="Type something"
            />
        </>
    );
}

export default Hello;